import { GamePhase, GameRoomState, PlayerData } from '@the-last-signal/shared';

export interface UICallbacks {
  onStartSolo: (name: string) => void;
  onCreateRoom: (name: string) => void;
  onJoinRoom: (code: string, name: string) => void;
  onToggleReady: () => void;
  onStartGame: () => void;
  onLeaveLobby: () => void;
  onQualityChange: (quality: 'low' | 'medium' | 'high') => void;
  onTouchModeChange: (mode: 'auto' | 'on' | 'off') => void;
  onSensitivityChange: (val: number) => void;
  onVolumeChange: (vol: number) => void;
  onSafeCodeSubmit: (code: string) => void;
  onRestart: () => void;
}

export class UIManager {
  private callbacks: UICallbacks;

  // Screens
  private screenMenu: HTMLElement;
  private screenLobby: HTMLElement;
  private screenGameover: HTMLElement;
  private screenVictory: HTMLElement;
  private hudRoot: HTMLElement;

  // Modals
  private modalJoin: HTMLElement;
  private modalSettings: HTMLElement;
  private modalPuzzle: HTMLElement;

  // HUD elements
  private batteryBar: HTMLElement;
  private batteryLabel: HTMLElement;
  private staminaBar: HTMLElement;
  private staminaLabel: HTMLElement;
  private crosshair: HTMLElement;
  private interactionPrompt: HTMLElement;
  private promptKeyLabel: HTMLElement;
  private promptTextLabel: HTMLElement;
  private objectiveText: HTMLElement;
  private objectiveSubText: HTMLElement;
  private climaxBanner: HTMLElement;
  private climaxCountdown: HTMLElement;
  private subtitleBox: HTMLElement;
  private subtitleSpeaker: HTMLElement;
  private subtitleContent: HTMLElement;
  private vignetteOverlay: HTMLElement;
  private heartbeatOverlay: HTMLElement;

  // Safe keypad state
  private enteredCode: string[] = [];

  constructor(callbacks: UICallbacks) {
    this.callbacks = callbacks;

    // Element bindings
    this.screenMenu = document.getElementById('screen-menu')!;
    this.screenLobby = document.getElementById('screen-lobby')!;
    this.screenGameover = document.getElementById('screen-gameover')!;
    this.screenVictory = document.getElementById('screen-victory')!;
    this.hudRoot = document.getElementById('hud-root')!;

    this.modalJoin = document.getElementById('modal-join')!;
    this.modalSettings = document.getElementById('modal-settings')!;
    this.modalPuzzle = document.getElementById('puzzle-modal')!;

    this.batteryBar = document.getElementById('battery-bar')!;
    this.batteryLabel = document.getElementById('battery-label')!;
    this.staminaBar = document.getElementById('stamina-bar')!;
    this.staminaLabel = document.getElementById('stamina-label')!;
    this.crosshair = document.getElementById('hud-crosshair')!;
    this.interactionPrompt = document.getElementById('interaction-prompt')!;
    this.promptKeyLabel = document.getElementById('prompt-key-label')!;
    this.promptTextLabel = document.getElementById('prompt-text-label')!;
    this.objectiveText = document.getElementById('objective-current-text')!;
    this.objectiveSubText = document.getElementById('objective-sub-text')!;
    this.climaxBanner = document.getElementById('climax-timer-banner')!;
    this.climaxCountdown = document.getElementById('climax-countdown')!;
    this.subtitleBox = document.getElementById('subtitle-box')!;
    this.subtitleSpeaker = document.getElementById('subtitle-speaker')!;
    this.subtitleContent = document.getElementById('subtitle-content')!;
    this.vignetteOverlay = document.getElementById('vignette-overlay')!;
    this.heartbeatOverlay = document.getElementById('heartbeat-overlay')!;

    // Initial state: Show ONLY main menu, hide all HUD & modals
    this.showScreen('menu');
    this.modalJoin.classList.add('hidden');
    this.modalSettings.classList.add('hidden');
    this.modalPuzzle.classList.add('hidden');
    this.climaxBanner.classList.add('hidden');
    this.subtitleBox.classList.add('hidden');

    this.initEventListeners();
  }

  private initEventListeners() {
    const playerNameInput = document.getElementById('player-name-input') as HTMLInputElement;

    // Main Menu Buttons
    document.getElementById('btn-solo')?.addEventListener('click', () => {
      const name = playerNameInput.value.trim() || 'ක්‍රීඩකයා 1';
      this.callbacks.onStartSolo(name);
    });

    document.getElementById('btn-create-room')?.addEventListener('click', () => {
      const name = playerNameInput.value.trim() || 'ක්‍රීඩකයා 1';
      this.callbacks.onCreateRoom(name);
    });

    document.getElementById('btn-join-dialog')?.addEventListener('click', () => {
      this.modalJoin.classList.remove('hidden');
    });

    document.getElementById('btn-join-cancel')?.addEventListener('click', () => {
      this.modalJoin.classList.add('hidden');
    });

    document.getElementById('btn-join-confirm')?.addEventListener('click', () => {
      const input = document.getElementById('join-code-input') as HTMLInputElement;
      const code = input.value.trim().toUpperCase();
      const name = playerNameInput.value.trim() || 'ක්‍රීඩකයා';
      if (code.length === 5) {
        this.callbacks.onJoinRoom(code, name);
      } else {
        const err = document.getElementById('join-error-msg')!;
        err.textContent = 'අක්ෂර 5ක නිවැරදි කේතයක් ඇතුළත් කරන්න (Must be 5 characters)';
        err.classList.remove('hidden');
      }
    });

    // Lobby Buttons
    document.getElementById('btn-toggle-ready')?.addEventListener('click', () => {
      this.callbacks.onToggleReady();
    });

    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.callbacks.onStartGame();
    });

    document.getElementById('btn-leave-lobby')?.addEventListener('click', () => {
      this.callbacks.onLeaveLobby();
      this.showScreen('menu');
    });

    document.getElementById('btn-copy-code')?.addEventListener('click', () => {
      const code = document.getElementById('lobby-room-code')?.textContent || '';
      navigator.clipboard?.writeText(code);
      alert(`කාමර කේතය පිටපත් කරන ලදී: ${code}`);
    });

    // Settings Modal
    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.modalSettings.classList.remove('hidden');
    });

    document.getElementById('touch-btn-pause')?.addEventListener('click', () => {
      this.modalSettings.classList.remove('hidden');
    });

    document.getElementById('btn-close-settings')?.addEventListener('click', () => {
      this.modalSettings.classList.add('hidden');
    });

    // Preset Buttons
    document.querySelectorAll('#graphics-preset-selector .seg-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#graphics-preset-selector .seg-btn').forEach(b => b.classList.remove('active'));
        (e.target as HTMLElement).classList.add('active');
        const q = (e.target as HTMLElement).getAttribute('data-quality') as 'low' | 'medium' | 'high';
        this.callbacks.onQualityChange(q);
      });
    });

    // Touch Mode Selector
    document.querySelectorAll('#touch-mode-selector .seg-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#touch-mode-selector .seg-btn').forEach(b => b.classList.remove('active'));
        (e.target as HTMLElement).classList.add('active');
        const mode = (e.target as HTMLElement).getAttribute('data-touch') as 'auto' | 'on' | 'off';
        this.callbacks.onTouchModeChange(mode);
      });
    });

    // Sensitivity & Volume
    const sensSlider = document.getElementById('mouse-sens-slider') as HTMLInputElement;
    sensSlider?.addEventListener('input', () => {
      const val = parseFloat(sensSlider.value);
      document.getElementById('sens-value')!.textContent = val.toFixed(1);
      this.callbacks.onSensitivityChange(val);
    });

    const volSlider = document.getElementById('master-volume-slider') as HTMLInputElement;
    volSlider?.addEventListener('input', () => {
      const val = parseInt(volSlider.value, 10);
      document.getElementById('vol-value')!.textContent = `${val}%`;
      this.callbacks.onVolumeChange(val / 100);
    });

    // Safe Keypad Grid
    document.querySelectorAll('.keypad-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const key = (e.target as HTMLElement).getAttribute('data-key');
        if (key === 'C') {
          this.enteredCode = [];
        } else if (key === 'E') {
          this.callbacks.onSafeCodeSubmit(this.enteredCode.join(''));
        } else if (key && this.enteredCode.length < 3) {
          this.enteredCode.push(key);
        }
        this.updateKeypadDisplay();
      });
    });

    document.getElementById('btn-close-puzzle')?.addEventListener('click', () => {
      this.modalPuzzle.classList.add('hidden');
    });

    // Endgame buttons
    document.getElementById('btn-restart-defeat')?.addEventListener('click', () => {
      this.callbacks.onRestart();
    });

    document.getElementById('btn-menu-defeat')?.addEventListener('click', () => {
      this.showScreen('menu');
    });

    document.getElementById('btn-menu-victory')?.addEventListener('click', () => {
      this.showScreen('menu');
    });
  }

  public showScreen(screen: 'menu' | 'lobby' | 'game' | 'defeat' | 'victory') {
    this.screenMenu.classList.add('hidden');
    this.screenLobby.classList.add('hidden');
    this.hudRoot.classList.add('hidden');
    this.screenGameover.classList.add('hidden');
    this.screenVictory.classList.add('hidden');
    document.getElementById('mobile-controls')?.classList.add('hidden');

    if (screen === 'menu') this.screenMenu.classList.remove('hidden');
    if (screen === 'lobby') this.screenLobby.classList.remove('hidden');
    if (screen === 'game') {
      this.hudRoot.classList.remove('hidden');
      const isMobile = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
      if (isMobile) {
        document.getElementById('mobile-controls')?.classList.remove('hidden');
      } else {
        document.getElementById('canvas-container')?.requestPointerLock?.();
      }
    }
    if (screen === 'defeat') this.screenGameover.classList.remove('hidden');
    if (screen === 'victory') this.screenVictory.classList.remove('hidden');
  }

  public updateServerStatus(isOnline: boolean) {
    const badge = document.getElementById('server-status-badge');
    const dot = badge?.querySelector('.status-dot');
    const text = document.getElementById('status-text');

    if (dot && text) {
      if (isOnline) {
        dot.className = 'status-dot online';
        text.textContent = 'සේවාදායකය සූදානම් (Server Online)';
      } else {
        dot.className = 'status-dot pinging';
        text.textContent = 'සේවාදායකය සූදානම් වෙමින් පවතී... (Cold Start)';
      }
    }
  }

  public updateLobby(state: GameRoomState, isHost: boolean) {
    document.getElementById('lobby-room-code')!.textContent = state.roomCode;
    const playerEntries = Object.values(state.players);
    document.getElementById('lobby-capacity-tag')!.textContent = `${playerEntries.length} / 4 ක්‍රීඩකයින්`;

    const playerList = document.getElementById('lobby-player-list')!;
    playerList.innerHTML = '';

    for (let i = 0; i < 4; i++) {
      const p = playerEntries[i];
      const card = document.createElement('div');
      if (p) {
        card.className = `player-card ${p.isReady ? 'ready' : ''}`;
        card.innerHTML = `
          <div class="player-avatar">${p.isHost ? '👑' : '👤'}</div>
          <div class="player-name">${p.name}</div>
          <div class="player-badge ${p.isHost ? 'host' : p.isReady ? 'status-ready' : ''}">
            ${p.isHost ? 'ප්‍රධානියා (Host)' : p.isReady ? 'සූදානම් (Ready)' : 'රැඳී සිටින්න'}
          </div>
        `;
      } else {
        card.className = 'player-card empty';
        card.innerHTML = `
          <div class="player-avatar">➕</div>
          <div class="player-name">හිස් ආසනයක්</div>
          <div class="player-badge">සම්බන්ධ වීමට විවෘතයි</div>
        `;
      }
      playerList.appendChild(card);
    }

    const btnStart = document.getElementById('btn-start-game');
    if (btnStart) {
      if (isHost && playerEntries.length >= 1) {
        btnStart.classList.remove('hidden');
      } else {
        btnStart.classList.add('hidden');
      }
    }
  }

  public updateHUD(batteryPercent: number, staminaPercent: number) {
    this.batteryBar.style.width = `${batteryPercent}%`;
    this.batteryLabel.textContent = `${Math.round(batteryPercent)}%`;

    this.staminaBar.style.width = `${staminaPercent}%`;
    this.staminaLabel.textContent = `${Math.round(staminaPercent)}%`;
  }

  public setInteractionPrompt(visible: boolean, promptSi: string, isMobile: boolean) {
    if (visible) {
      this.crosshair.classList.add('hovered');
      this.interactionPrompt.classList.remove('hidden');
      this.promptKeyLabel.textContent = isMobile ? '[TAP]' : '[E]';
      this.promptTextLabel.textContent = promptSi;
    } else {
      this.crosshair.classList.remove('hovered');
      this.interactionPrompt.classList.add('hidden');
    }
  }

  public updateObjective(titleSi: string, subSi: string) {
    this.objectiveText.textContent = titleSi;
    this.objectiveSubText.textContent = subSi;
  }

  public showClimaxTimer(show: boolean, secondsRemaining: number) {
    if (show) {
      this.climaxBanner.classList.remove('hidden');
      const mins = Math.floor(secondsRemaining / 60);
      const secs = Math.floor(secondsRemaining % 60);
      this.climaxCountdown.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      this.climaxBanner.classList.add('hidden');
    }
  }

  public showSubtitle(speaker: string, textSi: string, durationMs = 4500) {
    this.subtitleSpeaker.textContent = speaker;
    this.subtitleContent.textContent = textSi;
    this.subtitleBox.classList.remove('hidden');

    setTimeout(() => {
      this.subtitleBox.classList.add('hidden');
    }, durationMs);
  }

  public updateProximityTension(monsterDist: number, alertLevel: number) {
    // Proximity tension: 0 to 1
    const tension = Math.max(0, Math.min(1, (25 - monsterDist) / 25));
    if (tension > 0.4 || alertLevel > 60) {
      this.heartbeatOverlay.style.opacity = `${(tension - 0.2) * 1.2}`;
    } else {
      this.heartbeatOverlay.style.opacity = '0';
    }
  }

  public openPuzzleModal() {
    this.enteredCode = [];
    this.updateKeypadDisplay();
    this.modalPuzzle.classList.remove('hidden');
  }

  public closePuzzleModal() {
    this.modalPuzzle.classList.add('hidden');
  }

  private updateKeypadDisplay() {
    const d1 = document.getElementById('keypad-digit-1')!;
    const d2 = document.getElementById('keypad-digit-2')!;
    const d3 = document.getElementById('keypad-digit-3')!;

    d1.textContent = this.enteredCode[0] || '-';
    d2.textContent = this.enteredCode[1] || '-';
    d3.textContent = this.enteredCode[2] || '-';
  }
}
