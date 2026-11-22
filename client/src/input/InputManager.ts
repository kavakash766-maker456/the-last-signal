export interface InputState {
  forward: number; // -1 to 1
  strafe: number;  // -1 to 1
  yawDelta: number;
  pitchDelta: number;
  isSprinting: boolean;
  isCrouching: boolean;
  interactPressed: boolean;
  flashlightToggled: boolean;
}

export class InputManager {
  public state: InputState = {
    forward: 0,
    strafe: 0,
    yawDelta: 0,
    pitchDelta: 0,
    isSprinting: false,
    isCrouching: false,
    interactPressed: false,
    flashlightToggled: false,
  };

  public isPointerLocked = false;
  public sensitivity = 1.0;
  public invertY = false;
  public isMobile = false;

  // Keyboard map
  private keys: Record<string, boolean> = {};

  // Touch tracking
  private joystickTouchId: number | null = null;
  private joystickCenter = { x: 0, y: 0 };
  private joystickRadius = 50;
  private joystickBaseEl: HTMLElement | null = null;
  private joystickThumbEl: HTMLElement | null = null;

  private lookTouchId: number | null = null;
  private lastLookPos = { x: 0, y: 0 };

  // Callbacks
  public onInteract?: () => void;
  public onFlashlightToggle?: () => void;

  constructor() {
    this.detectDevice();
    this.setupKeyboardListeners();
    this.setupMouseListeners();
    this.setupTouchListeners();
  }

  private detectDevice() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const mobileLayer = document.getElementById('mobile-controls');
    if (mobileLayer) {
      if (this.isMobile) {
        mobileLayer.classList.remove('hidden');
      } else {
        mobileLayer.classList.add('hidden');
      }
    }
  }

  public setTouchMode(mode: 'auto' | 'on' | 'off') {
    const mobileLayer = document.getElementById('mobile-controls');
    if (!mobileLayer) return;

    if (mode === 'auto') {
      this.detectDevice();
    } else if (mode === 'on') {
      this.isMobile = true;
      mobileLayer.classList.remove('hidden');
    } else {
      this.isMobile = false;
      mobileLayer.classList.add('hidden');
    }
  }

  private setupKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      if (e.code === 'KeyE') {
        this.state.interactPressed = true;
        this.onInteract?.();
      }
      if (e.code === 'KeyF') {
        this.state.flashlightToggled = true;
        this.onFlashlightToggle?.();
      }
      if (e.code === 'KeyC') {
        this.state.isCrouching = !this.state.isCrouching;
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'KeyE') {
        this.state.interactPressed = false;
      }
    });
  }

  private setupMouseListeners() {
    const canvas = document.getElementById('canvas-container');

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === canvas;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked) return;
      const factor = 0.002 * this.sensitivity;
      this.state.yawDelta -= e.movementX * factor;
      const pitchDelta = e.movementY * factor * (this.invertY ? -1 : 1);
      this.state.pitchDelta -= pitchDelta;
    });

    // Request pointer lock on canvas click if not mobile
    canvas?.addEventListener('click', () => {
      if (!this.isMobile && !this.isPointerLocked) {
        canvas.requestPointerLock?.();
      }
    });
  }

  private setupTouchListeners() {
    const joystickZone = document.getElementById('joystick-zone');
    const lookZone = document.getElementById('look-zone');
    this.joystickBaseEl = document.getElementById('joystick-base');
    this.joystickThumbEl = document.getElementById('joystick-thumb');

    // Action button elements
    const btnInteract = document.getElementById('touch-btn-interact');
    const btnFlashlight = document.getElementById('touch-btn-flashlight');
    const btnSprint = document.getElementById('touch-btn-sprint');
    const btnCrouch = document.getElementById('touch-btn-crouch');

    btnInteract?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.state.interactPressed = true;
      this.onInteract?.();
    });
    btnInteract?.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.state.interactPressed = false;
    });

    btnFlashlight?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.state.flashlightToggled = true;
      this.onFlashlightToggle?.();
    });

    btnSprint?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.state.isSprinting = !this.state.isSprinting;
      btnSprint.classList.toggle('touch-btn-primary', this.state.isSprinting);
    });

    btnCrouch?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.state.isCrouching = !this.state.isCrouching;
      btnCrouch.classList.toggle('touch-btn-primary', this.state.isCrouching);
    });

    // Virtual Joystick on Left Zone
    joystickZone?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.joystickTouchId !== null) return;
      const touch = e.changedTouches[0];
      this.joystickTouchId = touch.identifier;
      this.joystickCenter = { x: touch.clientX, y: touch.clientY };

      if (this.joystickBaseEl && this.joystickThumbEl) {
        this.joystickBaseEl.style.left = `${touch.clientX}px`;
        this.joystickBaseEl.style.top = `${touch.clientY}px`;
        this.joystickBaseEl.classList.remove('hidden');
        this.joystickThumbEl.style.transform = `translate(-50%, -50%)`;
      }
    }, { passive: false });

    joystickZone?.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.joystickTouchId) {
          const dx = touch.clientX - this.joystickCenter.x;
          const dy = touch.clientY - this.joystickCenter.y;
          const dist = Math.hypot(dx, dy);
          const clampedDist = Math.min(dist, this.joystickRadius);
          const angle = Math.atan2(dy, dx);

          const thumbX = Math.cos(angle) * clampedDist;
          const thumbY = Math.sin(angle) * clampedDist;

          if (this.joystickThumbEl) {
            this.joystickThumbEl.style.transform = `translate(calc(-50% + ${thumbX}px), calc(-50% + ${thumbY}px))`;
          }

          // Normalized input
          this.state.strafe = thumbX / this.joystickRadius;
          this.state.forward = -thumbY / this.joystickRadius;
        }
      }
    }, { passive: false });

    const endJoystick = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.joystickTouchId) {
          this.joystickTouchId = null;
          this.state.forward = 0;
          this.state.strafe = 0;
          if (this.joystickBaseEl) {
            this.joystickBaseEl.classList.add('hidden');
          }
        }
      }
    };
    joystickZone?.addEventListener('touchend', endJoystick);
    joystickZone?.addEventListener('touchcancel', endJoystick);

    // Look Drag Zone on Right
    lookZone?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.lookTouchId !== null) return;
      const touch = e.changedTouches[0];
      this.lookTouchId = touch.identifier;
      this.lastLookPos = { x: touch.clientX, y: touch.clientY };
    }, { passive: false });

    lookZone?.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.lookTouchId) {
          const dx = touch.clientX - this.lastLookPos.x;
          const dy = touch.clientY - this.lastLookPos.y;
          this.lastLookPos = { x: touch.clientX, y: touch.clientY };

          const factor = 0.004 * this.sensitivity;
          this.state.yawDelta -= dx * factor;
          this.state.pitchDelta -= dy * factor * (this.invertY ? -1 : 1);
        }
      }
    }, { passive: false });

    const endLook = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.lookTouchId) {
          this.lookTouchId = null;
        }
      }
    };
    lookZone?.addEventListener('touchend', endLook);
    lookZone?.addEventListener('touchcancel', endLook);
  }

  public updateKeyboardInput() {
    if (this.joystickTouchId === null) {
      let forward = 0;
      let strafe = 0;
      if (this.keys['KeyW'] || this.keys['ArrowUp']) forward += 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) forward -= 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) strafe -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) strafe += 1;

      this.state.forward = forward;
      this.state.strafe = strafe;
      this.state.isSprinting = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    }
  }

  public consumeDeltas() {
    const yaw = this.state.yawDelta;
    const pitch = this.state.pitchDelta;
    this.state.yawDelta = 0;
    this.state.pitchDelta = 0;
    this.state.flashlightToggled = false;
    return { yaw, pitch };
  }
}
