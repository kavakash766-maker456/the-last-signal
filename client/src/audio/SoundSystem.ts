// Procedural 3D Web Audio System for THE LAST SIGNAL
// Zero external audio files required - 100% synthesized via Web Audio API

export class SoundSystem {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private isInitialized = false;

  // Ambience nodes
  private rainSource: AudioBufferSourceNode | null = null;
  private rainFilter: BiquadFilterNode | null = null;

  // Heartbeat nodes
  private heartbeatInterval: number | null = null;
  private currentHeartRate = 60; // BPM

  // Radio static
  private radioPanner: PannerNode | null = null;
  private radioGain: GainNode | null = null;
  private isRadioPlaying = false;

  // Monster audio nodes
  private monsterPanner: PannerNode | null = null;
  private monsterGroanTimeout: number | null = null;

  constructor() {}

  public init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.ambienceGain = this.ctx.createGain();
      this.ambienceGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      this.ambienceGain.connect(this.masterGain);

      this.isInitialized = true;
      this.startRainAmbience();
      this.startHeartbeatLoop();
    } catch (e) {
      console.warn('AudioContext initialization deferred until user gesture:', e);
    }
  }

  public ensureContext() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMasterVolume(vol0to1: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol0to1)), this.ctx.currentTime);
    }
  }

  public updateListenerPosition(x: number, y: number, z: number, forwardX: number, forwardY: number, forwardZ: number) {
    if (!this.ctx) return;
    const listener = this.ctx.listener;
    const now = this.ctx.currentTime;
    if (listener.positionX) {
      listener.positionX.setValueAtTime(x, now);
      listener.positionY.setValueAtTime(y, now);
      listener.positionZ.setValueAtTime(z, now);
      listener.forwardX.setValueAtTime(forwardX, now);
      listener.forwardY.setValueAtTime(forwardY, now);
      listener.forwardZ.setValueAtTime(forwardZ, now);
    } else {
      // Legacy Web Audio API fallback
      listener.setPosition(x, y, z);
      listener.setOrientation(forwardX, forwardY, forwardZ, 0, 1, 0);
    }
  }

  // --- FOOTSTEPS ---
  public playFootstep(isCrouching: boolean, isSprinting: boolean, isPuddle: boolean) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();

    const now = this.ctx.currentTime;
    const mult = isCrouching ? 0.35 : isSprinting ? 1.3 : 0.8;

    // Sub-thud (shoe impact)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isPuddle ? 120 : 80, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

    oscGain.gain.setValueAtTime(0.4 * mult, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.1);

    // Friction / splash noise
    const bufferSize = this.ctx.sampleRate * 0.08;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = isPuddle ? 'bandpass' : 'lowpass';
    filter.frequency.setValueAtTime(isPuddle ? 2200 : 700, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime((isPuddle ? 0.5 : 0.25) * mult, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.sfxGain);

    noiseSource.start(now);
  }

  // --- FLASHLIGHT CLICK ---
  public playFlashlightToggle(turnedOn: boolean) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(turnedOn ? 900 : 600, now);
    osc.frequency.setValueAtTime(turnedOn ? 1400 : 400, now + 0.02);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  // --- INTERACTION SOUNDS ---
  public playItemPickup() {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const notes = [440, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0, now);
      gain.gain.setValueAtTime(0.3, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.26);
    });
  }

  public playKeypadBeep(isValid: boolean) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = isValid ? 'sine' : 'sawtooth';
    osc.frequency.setValueAtTime(isValid ? 1046.5 : 180, now);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isValid ? 0.2 : 0.35));

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  public playDoorCreak() {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(220, now + 0.4);
    osc.frequency.linearRampToValueAtTime(110, now + 0.8);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, now);
    filter.Q.setValueAtTime(6, now);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.9);
  }

  // --- RADIO STATIC & EMERGENCY BROADCAST ---
  public playRadioBroadcast(x: number, y: number, z: number) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    if (this.isRadioPlaying) return;
    this.isRadioPlaying = true;

    this.radioPanner = this.ctx.createPanner();
    this.radioPanner.panningModel = 'HRTF';
    this.radioPanner.distanceModel = 'inverse';
    this.radioPanner.refDistance = 2;
    this.radioPanner.maxDistance = 25;
    this.radioPanner.rolloffFactor = 1.2;
    this.radioPanner.positionX.setValueAtTime(x, this.ctx.currentTime);
    this.radioPanner.positionY.setValueAtTime(y, this.ctx.currentTime);
    this.radioPanner.positionZ.setValueAtTime(z, this.ctx.currentTime);

    this.radioGain = this.ctx.createGain();
    this.radioGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
    this.radioGain.connect(this.radioPanner);
    this.radioPanner.connect(this.sfxGain);

    // Eerie morse / synthetic speech-like transmission
    const freqs = [350, 420, 280, 520, 310, 480, 260];
    let timeOffset = 0;
    for (let i = 0; i < 28; i++) {
      const f = freqs[i % freqs.length];
      const dur = (i % 3 === 0) ? 0.22 : 0.09;
      const t = this.ctx.currentTime + timeOffset;

      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, t);

      // Formant filtering
      const bq = this.ctx.createBiquadFilter();
      bq.type = 'bandpass';
      bq.frequency.setValueAtTime(800 + (i % 5) * 150, t);
      bq.Q.setValueAtTime(8, t);

      g.gain.setValueAtTime(0.3, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(bq);
      bq.connect(g);
      g.connect(this.radioGain);

      osc.start(t);
      osc.stop(t + dur + 0.05);

      timeOffset += dur + 0.05;
    }

    // Static overlay
    const bufferSize = this.ctx.sampleRate * 2.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.15;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.connect(this.radioGain);
    noise.start(this.ctx.currentTime);

    setTimeout(() => {
      this.isRadioPlaying = false;
    }, timeOffset * 1000 + 500);
  }

  // --- MONSTER SOUNDS (Groan, Chase Scream, Stinger) ---
  public playMonsterGroan(posX: number, posY: number, posZ: number) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const panner = this.ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 3;
    panner.maxDistance = 40;
    panner.positionX.setValueAtTime(posX, now);
    panner.positionY.setValueAtTime(posY, now);
    panner.positionZ.setValueAtTime(posZ, now);

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 1.2);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(67.5, now); // slight detune for sinister beating
    osc2.frequency.exponentialRampToValueAtTime(43, now + 1.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);
    filter.Q.setValueAtTime(5, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.7, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(panner);
    panner.connect(this.sfxGain);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + 1.5);
    osc2.stop(now + 1.5);
  }

  public playMonsterChaseScream(posX: number, posY: number, posZ: number) {
    if (!this.ctx || !this.sfxGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const panner = this.ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.positionX.setValueAtTime(posX, now);
    panner.positionY.setValueAtTime(posY, now);
    panner.positionZ.setValueAtTime(posZ, now);

    // Shriek frequency sweep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const dist = this.ctx.createWaveShaper();

    // Distortion curve
    const n_samples = 256;
    const curve = new Float32Array(n_samples);
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((Math.PI + 10) * x) / (Math.PI + 10 * Math.abs(x));
    }
    dist.curve = curve;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(2200, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(380, now + 1.8);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(1.0, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.9);

    osc.connect(dist);
    dist.connect(gain);
    gain.connect(panner);
    panner.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 2.0);

    // Stinger brass chord
    this.playHorrorStinger();
  }

  public playHorrorStinger() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const chords = [130.81, 138.59, 174.61, 233.08]; // dissonant augmented cluster
    chords.forEach((f) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      g.gain.setValueAtTime(0.35, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
      osc.connect(g);
      g.connect(this.sfxGain!);
      osc.start(now);
      osc.stop(now + 1.6);
    });
  }

  // --- THUNDER CLAP ---
  public playThunder() {
    if (!this.ctx || !this.ambienceGain) return;
    this.ensureContext();
    const now = this.ctx.currentTime;

    const bufferSize = this.ctx.sampleRate * 3.0;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(90, now + 2.8);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.9, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.9);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambienceGain);

    noise.start(now);
  }

  // --- HEARTBEAT TENSION ---
  public updateHeartbeatTension(proximity0to1: number, isChasing: boolean) {
    if (isChasing) {
      this.currentHeartRate = 145;
    } else {
      this.currentHeartRate = Math.round(65 + proximity0to1 * 60);
    }
  }

  private startHeartbeatLoop() {
    const tick = () => {
      if (this.ctx && this.currentHeartRate > 75) {
        this.playHeartbeatThump();
      }
      const intervalMs = (60 / this.currentHeartRate) * 1000;
      this.heartbeatInterval = window.setTimeout(tick, intervalMs);
    };
    tick();
  }

  private playHeartbeatThump() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    // Lub
    const osc1 = this.ctx.createOscillator();
    const g1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(75, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
    g1.gain.setValueAtTime(0.5, now);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    osc1.connect(g1);
    g1.connect(this.sfxGain);
    osc1.start(now);
    osc1.stop(now + 0.14);

    // Dub
    const osc2 = this.ctx.createOscillator();
    const g2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(65, now + 0.18);
    osc2.frequency.exponentialRampToValueAtTime(35, now + 0.32);
    g2.gain.setValueAtTime(0.4, now + 0.18);
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.33);
    osc2.connect(g2);
    g2.connect(this.sfxGain);
    osc2.start(now + 0.18);
    osc2.stop(now + 0.34);
  }

  // --- RAIN & DRONE AMBIENCE ---
  private startRainAmbience() {
    if (!this.ctx || !this.ambienceGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    // Pink noise filter approximation
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = buffer;
    this.rainSource.loop = true;

    this.rainFilter = this.ctx.createBiquadFilter();
    this.rainFilter.type = 'lowpass';
    this.rainFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    this.rainSource.connect(this.rainFilter);
    this.rainFilter.connect(this.ambienceGain);

    this.rainSource.start();
  }

  public dispose() {
    if (this.heartbeatInterval) {
      clearTimeout(this.heartbeatInterval);
    }
    if (this.monsterGroanTimeout) {
      clearTimeout(this.monsterGroanTimeout);
    }
    if (this.ctx) {
      this.ctx.close();
    }
  }
}
