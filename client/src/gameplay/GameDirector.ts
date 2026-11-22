import * as THREE from 'three';
import { ClinicScene, InteractableObject } from '../graphics/ClinicScene';
import { SoundSystem } from '../audio/SoundSystem';
import { UIManager } from '../ui/UIManager';
import { NetworkClient } from '../network/NetworkClient';
import { CreatureModel } from '../graphics/CreatureModel';
import { PlayerController } from './PlayerController';

export class GameDirector {
  private scene: ClinicScene;
  private sounds: SoundSystem;
  private ui: UIManager;
  private network: NetworkClient;
  private creature: CreatureModel;
  private player: PlayerController;

  // Climax Rooftop Escape Timer
  public isClimaxActive = false;
  public climaxTimer = 90; // 90 seconds survival
  public isGameOver = false;

  constructor(
    scene: ClinicScene,
    sounds: SoundSystem,
    ui: UIManager,
    network: NetworkClient,
    creature: CreatureModel,
    player: PlayerController
  ) {
    this.scene = scene;
    this.sounds = sounds;
    this.ui = ui;
    this.network = network;
    this.creature = creature;
    this.player = player;
  }

  public handleInteraction(item: InteractableObject) {
    if (this.isGameOver) return;

    switch (item.type) {
      case 'GATE_KEY':
        item.interacted = true;
        item.mesh.visible = false;
        this.sounds.playItemPickup();
        this.ui.showSubtitle('පණිවිඩය', 'ඔබ ප්‍රධාන ගේට්ටුවේ යතුර ලබා ගත්තා! ගේට්ටුව විවෘත කරන්න.');
        this.network.sendInteract({ targetId: item.id, action: 'PICKUP_KEY' });
        break;

      case 'GATE':
        if (this.network.state.hasGateKey) {
          if (this.scene.gateDoor) {
            // Animate gate swing open
            this.scene.gateDoor.position.x = -3.5;
            this.scene.gateDoor.rotation.y = Math.PI / 2;
            this.sounds.playDoorCreak();
            this.ui.showSubtitle('පණිවිඩය', 'ප්‍රධාන ගේට්ටුව විවෘත විය. සායනය ඇතුළට ගොස් විදුලිය ලබා දෙන්න.');
            // Remove gate collision
            this.scene.walls = this.scene.walls.filter(w => !w.intersectsBox(new THREE.Box3().setFromObject(this.scene.gateDoor!)));
          }
        } else {
          this.ui.showSubtitle('පද්ධතිය', 'ගේට්ටුව අගුළු දමා ඇත. පිළිගැනීමේ කවුන්ටරයෙන් යතුර සොයාගන්න.');
        }
        break;

      case 'CLINIC_FUSE':
        item.interacted = true;
        item.mesh.visible = false;
        this.sounds.playItemPickup();
        this.ui.showSubtitle('පණිවිඩය', 'ඔබ කාර්මික විදුලි ෆියුස් එකක් සොයා ගත්තා! උත්පාදක යන්ත්‍රයට සවි කරන්න.');
        this.network.sendInteract({ targetId: item.id, action: 'PICKUP_FUSE' });
        break;

      case 'GENERATOR':
        if (this.network.state.hasClinicFuse) {
          if (!this.network.state.powerRestored) {
            this.sounds.playItemPickup();
            if (this.scene.generatorLight) {
              this.scene.generatorLight.color.setHex(0x10b981); // green power light
            }
            this.ui.showSubtitle('පද්ධතිය', 'විදුලිය සායනයට නැවත ලබා දුනි! දැන් වෛද්‍යවරයාගේ සේප්පුව පරීක්ෂා කරන්න.');
            this.network.sendInteract({ targetId: item.id, action: 'ACTIVATE_GENERATOR' });
          }
        } else {
          this.ui.showSubtitle('පද්ධතිය', 'උත්පාදක යන්ත්‍රය ක්‍රියාත්මක කිරීමට ෆියුස් එකක් (Fuse) අවශ්‍යයි.');
        }
        break;

      case 'DOCTOR_SAFE':
        this.ui.openPuzzleModal();
        break;

      case 'AUDIO_RECORDER':
        this.sounds.playRadioBroadcast(item.position.x, item.position.y, item.position.z);
        this.ui.showSubtitle(
          'ගුවන්විදුලි විකාශනය (Dr. Senanayake)',
          '...අවධානය යොමු කරන්න... කිසිවෙකුත් එළියට නොයන්න... අඳුරේ සිටින ජීවියා ආලෝකයට සහ ශබ්දයට සංවේදීයි... වහලයේ ඇති SOS ඇන්ටෙනාව ක්‍රියාත්මක කරන්න...'
        );
        this.network.sendInteract({ targetId: item.id, action: 'PICKUP_RECORDER' });
        break;

      case 'ROOFTOP_RADIO':
        if (!this.isClimaxActive) {
          this.isClimaxActive = true;
          this.climaxTimer = 90;
          this.sounds.playHorrorStinger();
          this.sounds.playRadioBroadcast(item.position.x, item.position.y, item.position.z);
          this.ui.showSubtitle(
            'හදිසි අනතුරු ඇඟවීම (SOS Beacon Active)',
            'හදිසි SOS සංඥාව විකාශනය විය! ගලවාගැනීමේ හෙලිකොප්ටරය තත්පර 90කින් පැමිණේ. දිවි ගලවා ගන්න!'
          );
          this.network.sendInteract({ targetId: item.id, action: 'TRANSMIT_RADIO' });
          // Wake monster to rooftop
          this.creature.mesh.position.set(0, 4.0, -8);
          this.creature.setState('CHASE');
          this.sounds.playMonsterChaseScream(0, 4.0, -8);
        }
        break;
    }
  }

  public handleSafeCode(code: string) {
    if (code === '739') {
      this.sounds.playKeypadBeep(true);
      this.ui.closePuzzleModal();
      if (this.scene.safeDoor) {
        this.scene.safeDoor.rotation.y = Math.PI / 2;
      }
      this.ui.showSubtitle('පද්ධතිය', 'කේතය නිවැරදියි! සේප්පුව විවෘත විය. හඬ පටය (Audio Recorder) අසන්න.');
      this.network.sendInteract({ targetId: 'doctor_safe', action: 'SOLVE_PUZZLE', puzzleCode: '739' });
    } else {
      this.sounds.playKeypadBeep(false);
      this.ui.showSubtitle('පද්ධතිය', 'කේතය වැරදියි! බිත්තියේ සටහන නැවත පරීක්ෂා කරන්න (Code 739).');
    }
  }

  public update(delta: number) {
    if (this.isGameOver) return;

    // Objective text updates
    const currentObj = this.network.state.objectives[this.network.state.currentObjectiveIndex];
    if (currentObj) {
      this.ui.updateObjective(currentObj.titleSi, currentObj.descriptionSi);
    }

    // Climax Rooftop Countdown
    if (this.isClimaxActive) {
      this.climaxTimer -= delta;
      this.ui.showClimaxTimer(true, Math.max(0, this.climaxTimer));

      if (this.climaxTimer <= 0) {
        // VICTORY!
        this.isGameOver = true;
        this.ui.showClimaxTimer(false, 0);
        this.ui.showScreen('victory');
        const statsEl = document.getElementById('victory-stats')!;
        statsEl.innerHTML = `
          <div>දිවි ගැලවීම: සාර්ථකයි</div>
          <div>සාමාජිකයින්: 1 - 4</div>
          <div>පරිච්ඡේදය: 1 (අඳුරු සායනය) සම්පූර්ණයි</div>
        `;
      }
    }

    // Creature Proximity and Attack check
    const distToCreature = this.player.position.distanceTo(this.creature.mesh.position);
    this.ui.updateProximityTension(distToCreature, this.network.state.enemy.alertLevel);
    this.sounds.updateHeartbeatTension(Math.max(0, (25 - distToCreature) / 25), this.network.state.enemy.state === 'CHASE');

    if (distToCreature < 1.6 && !this.isGameOver) {
      // Monster caught player!
      this.isGameOver = true;
      this.creature.setState('ATTACK');
      this.sounds.playMonsterChaseScream(this.creature.mesh.position.x, this.creature.mesh.position.y, this.creature.mesh.position.z);
      setTimeout(() => {
        this.ui.showScreen('defeat');
        const statsEl = document.getElementById('defeat-stats')!;
        statsEl.innerHTML = `
          <div>ජීවියාගේ දුර: 0.0 m</div>
          <div>මෙහෙයුම: ${currentObj ? currentObj.titleSi : 'අසාර්ථකයි'}</div>
        `;
      }, 1200);
    }
  }
}
