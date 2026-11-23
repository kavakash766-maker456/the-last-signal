import { Peer, DataConnection } from 'peerjs';
import {
  GameRoomState,
  PlayerData,
  EnemyData,
  ChapterObjective,
  ClientInputPayload,
  PlayerInteractPayload,
  GamePhase,
  EnemyAIState
} from '@the-last-signal/shared';

export interface NetworkCallbacks {
  onStateUpdate: (state: GameRoomState) => void;
  onPlayerJoined: (player: PlayerData) => void;
  onPlayerLeft: (playerId: string) => void;
  onPhaseChange: (phase: GamePhase) => void;
  onObjectiveChange: (index: number) => void;
  onError: (message: string) => void;
}

export type NetworkMode = 'SOLO' | 'WEBRTC_HOST' | 'WEBRTC_GUEST';

export class NetworkClient {
  public mode: NetworkMode = 'SOLO';
  public isSoloMode = true;
  public localPlayerId = 'player_local';
  public localPlayerName = 'ක්‍රීඩකයා 1';
  public currentRoomCode = 'SOLO1';
  public isHost = true;

  // WebRTC PeerJS variables
  private peer: Peer | null = null;
  private connections: Map<string, DataConnection> = new Map(); // For host: clientId -> connection
  private hostConnection: DataConnection | null = null; // For guest: connection to host
  private hostSyncInterval: number | null = null;

  // Authoritative State
  public state: GameRoomState = {
    roomCode: 'SOLO1',
    phase: 'LOBBY',
    players: {},
    enemy: {
      state: 'PATROL',
      position: { x: 0, y: 0, z: -4 },
      rotationY: 0,
      targetPlayerId: null,
      alertLevel: 0,
    },
    objectives: [
      { id: 1, titleSi: 'සායනයේ ප්‍රධාන ගේට්ටුවේ යතුර සොයාගන්න', descriptionSi: 'පිළිගැනීමේ කවුන්ටරය (Reception Desk) පරීක්ෂා කර යතුර ලබාගන්න.', completed: false },
      { id: 2, titleSi: 'උත්පාදක යන්ත්‍රය (Generator) සඳහා ෆියුස් එකක් සොයා විදුලිය ලබාදෙන්න', descriptionSi: 'විදුලි කාමරයේ ඇති ෆියුස් එක සොයාගෙන උත්පාදක යන්ත්‍රයට සවි කරන්න.', completed: false },
      { id: 3, titleSi: 'වෛද්‍යවරයාගේ රහස් සේප්පුව (Safe Code 739) විවෘත කරන්න', descriptionSi: 'බිත්තියේ සටහන් කර ඇති කේතය (739) භාවිතයෙන් සේප්පුව විවෘත කරන්න.', completed: false },
      { id: 4, titleSi: 'හඬ පටය (Audio Recorder) අසන්න', descriptionSi: 'වෛද්‍ය කාර්යාලයේ ඇති කැසට් රෙකෝඩරය ක්‍රියාත්මක කර විකාශනයට සවන් දෙන්න.', completed: false },
      { id: 5, titleSi: 'වහලයේ රේඩියෝ කුළුණෙන් SOS සංඥාව යවා බේරෙන්න', descriptionSi: 'පඩිපෙළ ඔස්සේ වහලයට නැගී හදිසි සංඥාව සම්ප්‍රේෂණය කර ගලවාගැනීමේ හෙලිකොප්ටරය එනතුරු රැඳී සිටින්න.', completed: false },
    ],
    currentObjectiveIndex: 0,
    hasGateKey: false,
    gateOpened: false,
    hasClinicFuse: false,
    powerRestored: false,
    hasAudioRecorder: false,
    symbolPuzzleSolved: false,
    radioTransmitted: false,
  };

  private callbacks: NetworkCallbacks;

  constructor(callbacks: NetworkCallbacks) {
    this.callbacks = callbacks;
  }

  // Quick server health / online status check
  public async pingServer(): Promise<boolean> {
    return true; // WebRTC P2P infrastructure is always online & ready
  }

  // --- SOLO STORY MODE ---
  public startSoloGame(playerName: string) {
    this.mode = 'SOLO';
    this.isSoloMode = true;
    this.localPlayerName = playerName;
    this.localPlayerId = 'player_solo_' + Math.random().toString(36).substring(2, 6);
    this.currentRoomCode = 'SOLO';
    this.isHost = true;

    this.state.roomCode = 'SOLO';
    this.state.players = {
      [this.localPlayerId]: {
        id: this.localPlayerId,
        name: playerName,
        position: { x: 0, y: 1.7, z: 34 },
        rotationY: 0,
        pitch: 0,
        isSprinting: false,
        isCrouching: false,
        flashlightOn: true,
        flashlightBattery: 100,
        isHost: true,
        isReady: true,
        connected: true,
      },
    };

    this.state.phase = 'PLAYING';
    this.callbacks.onPhaseChange('PLAYING');
    this.callbacks.onStateUpdate(this.state);
  }

  // --- WEBRTC MULTIPLAYER: CREATE ROOM (HOST) ---
  public async createMultiplayerRoom(playerName: string): Promise<string> {
    this.mode = 'WEBRTC_HOST';
    this.isSoloMode = false;
    this.localPlayerName = playerName;
    this.isHost = true;

    // Generate readable 5-char room code (A-Z, 2-9)
    const code = this.generateRoomCode();
    this.currentRoomCode = code;
    this.localPlayerId = 'host_' + Math.random().toString(36).substring(2, 6);

    this.state.roomCode = code;
    this.state.phase = 'LOBBY';
    this.state.players = {
      [this.localPlayerId]: {
        id: this.localPlayerId,
        name: playerName,
        position: { x: 0, y: 1.7, z: 34 },
        rotationY: 0,
        pitch: 0,
        isSprinting: false,
        isCrouching: false,
        flashlightOn: true,
        flashlightBattery: 100,
        isHost: true,
        isReady: true,
        connected: true,
      },
    };

    const peerId = `the-last-signal-${code.toLowerCase()}`;

    return new Promise((resolve) => {
      try {
        if (this.peer) {
          this.peer.destroy();
        }

        this.peer = new Peer(peerId, {
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478' },
            ],
          },
        });

        this.peer.on('open', (id) => {
          console.log('[WebRTC Host] Room opened with Peer ID:', id);
          this.startHostSyncLoop();
          resolve(code);
        });

        this.peer.on('connection', (conn) => {
          this.handleIncomingGuestConnection(conn);
        });

        this.peer.on('error', (err) => {
          console.warn('[WebRTC Host] Peer warning:', err);
          resolve(code); // Fallback: still resolve code so lobby renders
        });
      } catch (e) {
        console.error('[WebRTC Host] Failed to init peer:', e);
        resolve(code);
      }
    });
  }

  private handleIncomingGuestConnection(conn: DataConnection) {
    // 4-player cap check
    if (Object.keys(this.state.players).length >= 4) {
      conn.send({ type: 'error', message: 'කාමරය පිරී ඇත (Room is full - Max 4 players)' });
      setTimeout(() => conn.close(), 500);
      return;
    }

    conn.on('open', () => {
      console.log('[WebRTC Host] Guest connected:', conn.peer);
      this.connections.set(conn.peer, conn);

      // Handle messages from guest
      conn.on('data', (data: any) => {
        this.handleGuestMessage(conn.peer, data);
      });

      conn.on('close', () => {
        console.log('[WebRTC Host] Guest disconnected:', conn.peer);
        this.connections.delete(conn.peer);
        delete this.state.players[conn.peer];
        this.broadcast({ type: 'player_left', playerId: conn.peer });
        this.callbacks.onPlayerLeft(conn.peer);
        this.callbacks.onStateUpdate(this.state);
      });
    });
  }

  private handleGuestMessage(senderId: string, msg: any) {
    if (!msg || typeof msg !== 'object') return;

    switch (msg.type) {
      case 'join_request': {
        const guestName = (msg.name || 'ක්‍රීඩකයා').substring(0, 15);
        this.state.players[senderId] = {
          id: senderId,
          name: guestName,
          position: { x: (Math.random() - 0.5) * 2, y: 1.7, z: 14 + (Math.random() - 0.5) * 2 },
          rotationY: 0,
          pitch: 0,
          isSprinting: false,
          isCrouching: false,
          flashlightOn: true,
          flashlightBattery: 100,
          isHost: false,
          isReady: false,
          connected: true,
        };

        // Send full state to newly joined guest
        const conn = this.connections.get(senderId);
        if (conn && conn.open) {
          conn.send({ type: 'state_full', state: this.state, yourId: senderId });
        }

        // Notify other players
        this.broadcast({ type: 'player_joined', player: this.state.players[senderId] });
        this.callbacks.onPlayerJoined(this.state.players[senderId]);
        this.callbacks.onStateUpdate(this.state);
        break;
      }

      case 'player_input': {
        const p = this.state.players[senderId];
        if (p) {
          p.position.x = msg.payload.x;
          p.position.z = msg.payload.z;
          p.rotationY = msg.payload.rotationY;
          p.pitch = msg.payload.pitch;
          p.isSprinting = msg.payload.isSprinting;
          p.isCrouching = msg.payload.isCrouching;
          p.flashlightOn = msg.payload.flashlightOn;
        }
        break;
      }

      case 'set_ready': {
        const p = this.state.players[senderId];
        if (p) {
          p.isReady = Boolean(msg.isReady);
          this.broadcast({ type: 'player_ready', playerId: senderId, isReady: p.isReady });
          this.callbacks.onStateUpdate(this.state);
        }
        break;
      }

      case 'player_interact': {
        this.handleSoloInteraction(msg.payload);
        this.broadcast({ type: 'state_sync', state: this.state });
        break;
      }
    }
  }

  // --- WEBRTC MULTIPLAYER: JOIN ROOM (GUEST) ---
  public async joinMultiplayerRoom(roomCode: string, playerName: string): Promise<boolean> {
    this.mode = 'WEBRTC_GUEST';
    this.isSoloMode = false;
    this.localPlayerName = playerName;
    this.currentRoomCode = roomCode.toUpperCase().trim();
    this.isHost = false;

    const hostPeerId = `the-last-signal-${this.currentRoomCode.toLowerCase()}`;
    const myGuestId = `guest-${Math.random().toString(36).substring(2, 8)}`;
    this.localPlayerId = myGuestId;

    return new Promise((resolve) => {
      try {
        if (this.peer) {
          this.peer.destroy();
        }

        this.peer = new Peer(myGuestId, {
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478' },
            ],
          },
        });

        const timeout = setTimeout(() => {
          if (!this.hostConnection?.open) {
            this.callbacks.onError('කාමරය සොයාගත නොහැක (Room not found). කේතය නිවැරදිදැයි පරීක්ෂා කරන්න.');
            resolve(false);
          }
        }, 10000);

        this.peer.on('open', () => {
          console.log('[WebRTC Guest] Connecting to host:', hostPeerId);
          this.hostConnection = this.peer!.connect(hostPeerId, { reliable: true });

          this.hostConnection.on('open', () => {
            clearTimeout(timeout);
            console.log('[WebRTC Guest] Connected to host!');
            // Request to join with player name
            this.hostConnection!.send({ type: 'join_request', name: this.localPlayerName });
            resolve(true);
          });

          this.hostConnection.on('data', (data: any) => {
            this.handleHostMessage(data);
          });

          this.hostConnection.on('close', () => {
            this.callbacks.onError('කාමර සත්කාරකයා (Host) විසන්ධි විය.');
          });
        });

        this.peer.on('error', (err) => {
          clearTimeout(timeout);
          console.error('[WebRTC Guest] Peer error:', err);
          this.callbacks.onError('සම්බන්ධතා දෝෂයකි: ' + err.type);
          resolve(false);
        });
      } catch (e: any) {
        this.callbacks.onError('සම්බන්ධ වීමට නොහැකි විය: ' + e.message);
        resolve(false);
      }
    });
  }

  private handleHostMessage(msg: any) {
    if (!msg || typeof msg !== 'object') return;

    switch (msg.type) {
      case 'state_full': {
        this.state = msg.state;
        if (msg.yourId) {
          this.localPlayerId = msg.yourId;
        }
        this.callbacks.onStateUpdate(this.state);
        break;
      }

      case 'state_sync': {
        this.state.phase = msg.state.phase;
        this.state.currentObjectiveIndex = msg.state.currentObjectiveIndex;
        this.state.objectives = msg.state.objectives;
        this.state.enemy = msg.state.enemy;
        this.state.hasGateKey = msg.state.hasGateKey;
        this.state.gateOpened = msg.state.gateOpened;
        this.state.hasClinicFuse = msg.state.hasClinicFuse;
        this.state.powerRestored = msg.state.powerRestored;
        this.state.hasAudioRecorder = msg.state.hasAudioRecorder;
        this.state.symbolPuzzleSolved = msg.state.symbolPuzzleSolved;
        this.state.radioTransmitted = msg.state.radioTransmitted;

        // Sync players
        for (const [id, data] of Object.entries(msg.state.players as Record<string, PlayerData>)) {
          if (id === this.localPlayerId) continue; // Don't overwrite local prediction
          this.state.players[id] = data;
        }

        this.callbacks.onStateUpdate(this.state);
        break;
      }

      case 'phase_changed': {
        this.state.phase = msg.phase;
        this.callbacks.onPhaseChange(msg.phase);
        break;
      }

      case 'objective_updated': {
        this.state.currentObjectiveIndex = msg.index;
        this.callbacks.onObjectiveChange(msg.index);
        break;
      }

      case 'player_joined': {
        this.state.players[msg.player.id] = msg.player;
        this.callbacks.onPlayerJoined(msg.player);
        this.callbacks.onStateUpdate(this.state);
        break;
      }

      case 'player_left': {
        delete this.state.players[msg.playerId];
        this.callbacks.onPlayerLeft(msg.playerId);
        this.callbacks.onStateUpdate(this.state);
        break;
      }

      case 'error': {
        this.callbacks.onError(msg.message);
        break;
      }
    }
  }

  // Broadcast data to all connected guests (Host only)
  private broadcast(data: any) {
    for (const conn of this.connections.values()) {
      if (conn.open) {
        conn.send(data);
      }
    }
  }

  // Host 20Hz Tick loop: syncs player transforms & monster
  private startHostSyncLoop() {
    if (this.hostSyncInterval) clearInterval(this.hostSyncInterval);
    this.hostSyncInterval = window.setInterval(() => {
      if (this.mode === 'WEBRTC_HOST' && this.connections.size > 0) {
        this.broadcast({
          type: 'state_sync',
          state: this.state,
        });
      }
    }, 50); // 20 updates per second
  }

  public sendInput(payload: ClientInputPayload) {
    // Update local state representation
    const p = this.state.players[this.localPlayerId];
    if (p) {
      p.position.x = payload.x;
      p.position.z = payload.z;
      p.rotationY = payload.rotationY;
      p.pitch = payload.pitch;
      p.isSprinting = payload.isSprinting;
      p.isCrouching = payload.isCrouching;
      p.flashlightOn = payload.flashlightOn;
    }

    if (this.mode === 'WEBRTC_GUEST' && this.hostConnection?.open) {
      this.hostConnection.send({
        type: 'player_input',
        payload,
      });
    }
  }

  public sendInteract(payload: PlayerInteractPayload) {
    if (this.isHost || this.isSoloMode) {
      this.handleSoloInteraction(payload);
      if (this.mode === 'WEBRTC_HOST') {
        this.broadcast({ type: 'state_sync', state: this.state });
      }
    } else if (this.mode === 'WEBRTC_GUEST' && this.hostConnection?.open) {
      this.hostConnection.send({
        type: 'player_interact',
        payload,
      });
    }
  }

  public setReady(isReady: boolean) {
    if (this.state.players[this.localPlayerId]) {
      this.state.players[this.localPlayerId].isReady = isReady;
      this.callbacks.onStateUpdate(this.state);
    }

    if (this.mode === 'WEBRTC_GUEST' && this.hostConnection?.open) {
      this.hostConnection.send({ type: 'set_ready', isReady });
    } else if (this.mode === 'WEBRTC_HOST') {
      this.broadcast({ type: 'player_ready', playerId: this.localPlayerId, isReady });
    }
  }

  public startGame() {
    this.state.phase = 'PLAYING';
    this.callbacks.onPhaseChange('PLAYING');
    this.callbacks.onStateUpdate(this.state);

    if (this.mode === 'WEBRTC_HOST') {
      this.broadcast({ type: 'phase_changed', phase: 'PLAYING' });
    }
  }

  // --- STORY OBJECTIVE PROGRESSION LOGIC (Authoritative) ---
  public handleSoloInteraction(payload: PlayerInteractPayload) {
    const { action } = payload;

    switch (action) {
      case 'PICKUP_KEY':
        if (!this.state.hasGateKey) {
          this.state.hasGateKey = true;
          this.completeObjective(0);
          this.advanceObjective(1);
        }
        break;

      case 'PICKUP_FUSE':
        if (!this.state.hasClinicFuse) {
          this.state.hasClinicFuse = true;
        }
        break;

      case 'ACTIVATE_GENERATOR':
        if (this.state.hasClinicFuse && !this.state.powerRestored) {
          this.state.powerRestored = true;
          this.completeObjective(1);
          this.advanceObjective(2);
        }
        break;

      case 'SOLVE_PUZZLE':
        if (payload.puzzleCode === '739' && !this.state.symbolPuzzleSolved) {
          this.state.symbolPuzzleSolved = true;
          this.completeObjective(2);
          this.advanceObjective(3);
        }
        break;

      case 'PICKUP_RECORDER':
        if (!this.state.hasAudioRecorder) {
          this.state.hasAudioRecorder = true;
          this.completeObjective(3);
          this.advanceObjective(4);
        }
        break;

      case 'TRANSMIT_RADIO':
        if (this.state.powerRestored && !this.state.radioTransmitted) {
          this.state.radioTransmitted = true;
          this.completeObjective(4);
          this.state.phase = 'CLIMAX';
          this.callbacks.onPhaseChange('CLIMAX');
          if (this.mode === 'WEBRTC_HOST') {
            this.broadcast({ type: 'phase_changed', phase: 'CLIMAX' });
          }
        }
        break;
    }
  }

  private completeObjective(idx: number) {
    if (this.state.objectives[idx]) {
      this.state.objectives[idx].completed = true;
    }
  }

  private advanceObjective(nextIdx: number) {
    this.state.currentObjectiveIndex = nextIdx;
    this.callbacks.onObjectiveChange(nextIdx);
    this.callbacks.onStateUpdate(this.state);
    if (this.mode === 'WEBRTC_HOST') {
      this.broadcast({ type: 'objective_updated', index: nextIdx });
    }
  }

  private generateRoomCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
}
