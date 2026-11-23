import * as THREE from 'three';
import { ClinicScene } from './graphics/ClinicScene';
import { CreatureModel } from './graphics/CreatureModel';
import { RemotePlayerModel } from './graphics/RemotePlayerModel';
import { SoundSystem } from './audio/SoundSystem';
import { InputManager } from './input/InputManager';
import { PlayerController } from './gameplay/PlayerController';
import { UIManager } from './ui/UIManager';
import { NetworkClient } from './network/NetworkClient';
import { GameDirector } from './gameplay/GameDirector';
import { GameRoomState, PlayerData } from '@the-last-signal/shared';

class GameApp {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();

  private clinicScene!: ClinicScene;
  private creature!: CreatureModel;
  private sounds!: SoundSystem;
  private input!: InputManager;
  private player!: PlayerController;
  private ui!: UIManager;
  private network!: NetworkClient;
  private director!: GameDirector;

  // Remote players in co-op
  private remotePlayers = new Map<string, RemotePlayerModel>();

  // Monster offline AI waypoints
  private waypoints = [
    new THREE.Vector3(0, 0, 5),    // Lobby
    new THREE.Vector3(0, 0, -6),   // Corridor
    new THREE.Vector3(6, 0, -6),   // Pharmacy
    new THREE.Vector3(-6, 0, -6),  // Generator room
  ];
  private currentWaypointIdx = 0;
  private monsterSpeed = 2.4;

  constructor() {
    this.initThree();
    this.initNetwork();
    this.initSystems();
    this.setupResize();
    this.animate();

    // Check server cold start
    this.checkServer();
  }

  private initThree() {
    const container = document.getElementById('canvas-container')!;
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      60
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.appendChild(this.renderer.domElement);

    // CRITICAL: Camera must be added to the scene so its attached children (flashlight, light cones) illuminate the scene!
    this.scene.add(this.camera);
  }

  private initSystems() {
    this.sounds = new SoundSystem();
    this.input = new InputManager();
    this.clinicScene = new ClinicScene(this.scene, this.camera);
    
    // Creature
    this.creature = new CreatureModel();
    this.creature.mesh.position.set(0, 0, -6);
    this.scene.add(this.creature.mesh);

    // Player Controller
    this.player = new PlayerController(this.camera, this.input, this.clinicScene, this.sounds);

    // UI Manager
    this.ui = new UIManager({
      onStartSolo: (name) => {
        this.sounds.ensureContext();
        this.network.startSoloGame(name);
        this.ui.showScreen('game');
        this.ui.showSubtitle('ක්‍රීඩාව ආරම්භ විය', 'සායනයේ ප්‍රධාන ගේට්ටුවේ යතුර සොයාගන්න (Check Reception Desk).');
      },
      onCreateRoom: async (name) => {
        this.sounds.ensureContext();
        const code = await this.network.createMultiplayerRoom(name);
        this.ui.showScreen('lobby');
        this.ui.updateLobby(this.network.state, true);
      },
      onJoinRoom: async (code, name) => {
        this.sounds.ensureContext();
        const ok = await this.network.joinMultiplayerRoom(code, name);
        if (ok) {
          this.ui.showScreen('lobby');
          this.ui.updateLobby(this.network.state, false);
        }
      },
      onToggleReady: () => {
        const local = this.network.state.players[this.network.localPlayerId];
        this.network.setReady(!local?.isReady);
      },
      onStartGame: () => {
        this.network.startGame();
      },
      onLeaveLobby: () => {
        this.ui.showScreen('menu');
      },
      onQualityChange: (quality) => {
        this.clinicScene.atmosphere.setQuality(quality);
        this.renderer.shadowMap.enabled = quality !== 'low';
      },
      onTouchModeChange: (mode) => {
        this.input.setTouchMode(mode);
      },
      onSensitivityChange: (val) => {
        this.input.sensitivity = val;
      },
      onVolumeChange: (vol) => {
        this.sounds.setMasterVolume(vol);
      },
      onSafeCodeSubmit: (code) => {
        this.director.handleSafeCode(code);
      },
      onRestart: () => {
        window.location.reload();
      },
    });

    // Game Director
    this.director = new GameDirector(
      this.clinicScene,
      this.sounds,
      this.ui,
      this.network,
      this.creature,
      this.player
    );

    // Audio thunder connection
    this.clinicScene.atmosphere.onThunder = () => {
      this.sounds.playThunder();
    };

    // User interaction callback
    this.input.onInteract = () => {
      this.sounds.ensureContext();
      if (this.player.hoveredInteractable) {
        this.director.handleInteraction(this.player.hoveredInteractable);
      }
    };

    // Flashlight toggle callback
    this.input.onFlashlightToggle = () => {
      this.sounds.ensureContext();
      const on = this.clinicScene.atmosphere.toggleFlashlight();
      this.sounds.playFlashlightToggle(on);
    };
  }

  private initNetwork() {
    this.network = new NetworkClient({
      onStateUpdate: (state: GameRoomState) => {
        if (state.phase === 'LOBBY') {
          this.ui.updateLobby(state, this.network.isHost);
        }
        this.syncRemotePlayers(state.players);

        // Sync creature position from host if guest
        if (!this.network.isHost && state.enemy) {
          this.creature.mesh.position.set(state.enemy.position.x, state.enemy.position.y, state.enemy.position.z);
          this.creature.mesh.rotation.y = state.enemy.rotationY;
          this.creature.setState(state.enemy.state);
        }
      },
      onPlayerJoined: (player) => {
        console.log('Player joined room:', player.name);
      },
      onPlayerLeft: (id) => {
        const model = this.remotePlayers.get(id);
        if (model) {
          this.scene.remove(model.mesh);
          model.dispose();
          this.remotePlayers.delete(id);
        }
      },
      onPhaseChange: (phase) => {
        if (phase === 'PLAYING') {
          this.ui.showScreen('game');
        } else if (phase === 'CLIMAX') {
          this.director.isClimaxActive = true;
          this.director.climaxTimer = 90;
        } else if (phase === 'COMPLETED') {
          this.ui.showScreen('victory');
        } else if (phase === 'FAILED') {
          this.ui.showScreen('defeat');
        }
      },
      onObjectiveChange: (index) => {
        const obj = this.network.state.objectives[index];
        if (obj) {
          this.ui.updateObjective(obj.titleSi, obj.descriptionSi);
          this.sounds.playItemPickup();
        }
      },
      onError: (err) => {
        alert(err);
      },
    });
  }

  private async checkServer() {
    const isOnline = await this.network.pingServer();
    this.ui.updateServerStatus(isOnline);
  }

  private syncRemotePlayers(players: Record<string, PlayerData>) {
    for (const [id, data] of Object.entries(players)) {
      if (id === this.network.localPlayerId) continue;

      let model = this.remotePlayers.get(id);
      if (!model) {
        model = new RemotePlayerModel(data);
        this.remotePlayers.set(id, model);
        this.scene.add(model.mesh);
      } else {
        model.updateState(data);
      }
    }

    // Cleanup disconnected players
    for (const [id, model] of this.remotePlayers.entries()) {
      if (!players[id]) {
        this.scene.remove(model.mesh);
        model.dispose();
        this.remotePlayers.delete(id);
      }
    }
  }

  private updateMonsterSoloAI(delta: number) {
    // Only host or solo player runs authoritative monster AI logic
    if (!this.network.isHost || this.director.isGameOver) return;

    const monsterPos = this.creature.mesh.position;
    const playerPos = this.player.position;
    const distToPlayer = monsterPos.distanceTo(playerPos);

    // Alert triggers: running or shining flashlight when near
    const isRunning = this.input.state.isSprinting && (Math.abs(this.input.state.forward) > 0.1);
    const hasLight = this.clinicScene.atmosphere.flashlightOn;
    const canSense = (distToPlayer < 12 && hasLight) || (distToPlayer < 9 && isRunning) || (distToPlayer < 5);

    if (this.director.isClimaxActive) {
      // Climax rooftop sprint
      this.creature.setState('CHASE');
      this.monsterSpeed = 5.2;
    } else if (canSense) {
      if (this.network.state.enemy.state !== 'CHASE') {
        this.sounds.playMonsterChaseScream(monsterPos.x, monsterPos.y, monsterPos.z);
      }
      this.creature.setState('CHASE');
      this.network.state.enemy.state = 'CHASE';
      this.monsterSpeed = 4.8;
    } else if (distToPlayer > 18 && this.network.state.enemy.state === 'CHASE') {
      this.creature.setState('PATROL');
      this.network.state.enemy.state = 'PATROL';
      this.monsterSpeed = 2.4;
    }

    // Move monster
    let target = this.waypoints[this.currentWaypointIdx];
    if (this.network.state.enemy.state === 'CHASE') {
      target = playerPos;
    }

    const toTarget = new THREE.Vector3().subVectors(target, monsterPos);
    toTarget.y = 0; // maintain floor plane
    const dist = toTarget.length();

    if (dist > 0.3) {
      toTarget.normalize();
      monsterPos.addScaledVector(toTarget, this.monsterSpeed * delta);
      this.creature.mesh.rotation.y = Math.atan2(toTarget.x, toTarget.z);
      this.creature.update(delta, true);
    } else {
      if (this.network.state.enemy.state === 'PATROL') {
        this.currentWaypointIdx = (this.currentWaypointIdx + 1) % this.waypoints.length;
      }
      this.creature.update(delta, false);
    }

    // Sync enemy transform to network state for connected guests
    this.network.state.enemy.position.x = monsterPos.x;
    this.network.state.enemy.position.y = monsterPos.y;
    this.network.state.enemy.position.z = monsterPos.z;
    this.network.state.enemy.rotationY = this.creature.mesh.rotation.y;

    // Random sinister groan
    if (Math.random() < 0.003) {
      this.sounds.playMonsterGroan(monsterPos.x, monsterPos.y, monsterPos.z);
    }
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.1);

    try {
      // 1. Process keyboard movement
      this.input.updateKeyboardInput();

      // 2. Update player physics and camera
      this.player.update(delta);

      // 3. Update Audio Listener
      const camDir = this.camera.getWorldDirection(new THREE.Vector3());
      this.sounds.updateListenerPosition(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z,
        camDir.x,
        camDir.y,
        camDir.z
      );

      // 4. Update Clinic Scene & Atmosphere
      this.clinicScene.update(delta, this.player.position);

      // 5. Update Creature
      this.updateMonsterSoloAI(delta);

      // 6. Update Remote Players
      for (const model of this.remotePlayers.values()) {
        model.update(delta);
      }

      // 7. Update Game Story Director
      if (this.director) {
        this.director.update(delta);
      }

      // 8. Update HUD vitals
      this.ui.updateHUD(
        this.clinicScene.atmosphere.batteryLevel,
        this.player.stamina
      );

      // Hover tooltip
      const hovered = this.player.hoveredInteractable;
      this.ui.setInteractionPrompt(
        hovered !== null,
        hovered ? hovered.promptSi : '',
        this.input.isMobile
      );

      // 9. Send local network input packet at tick interval
      if (this.network) {
        this.network.sendInput({
          x: this.player.position.x,
          z: this.player.position.z,
          rotationY: this.player.rotationY,
          pitch: this.player.pitch,
          isSprinting: this.input.state.isSprinting,
          isCrouching: this.input.state.isCrouching,
          flashlightOn: this.clinicScene.atmosphere.flashlightOn,
        });
      }
    } catch (e) {
      console.error('Frame update error:', e);
    }

    // 10. Render frame guaranteed
    this.renderer.render(this.scene, this.camera);
  };

  private setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}

// Start Game App safely
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => new GameApp());
} else {
  new GameApp();
}
