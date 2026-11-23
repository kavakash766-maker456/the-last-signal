import * as THREE from 'three';

export interface QualityPreset {
  shadows: boolean;
  rainCount: number;
  volumetricSteps: number;
  bloom: boolean;
}

export class Atmosphere {
  public scene: THREE.Scene;
  public camera: THREE.Camera;
  
  // Fog
  public fog: THREE.FogExp2;

  // Flashlight
  public flashlight: THREE.SpotLight;
  public flashlightCone: THREE.Mesh;
  public flashlightOn = true;
  public batteryLevel = 100; // 0-100

  // Flickering lights
  private flickeringLights: { light: THREE.PointLight; baseIntensity: number; phase: number }[] = [];

  // Lightning
  private lightningLight: THREE.DirectionalLight;
  private lightningTimer = 0;
  private isLightningFlashing = false;
  private flashStep = 0;
  public onThunder?: () => void;

  // Rain particle system
  private rainCount = 1800;
  private rainGeo!: THREE.BufferGeometry;
  private rainMaterial!: THREE.PointsMaterial;
  private rainParticles!: THREE.Points;
  private rainPositions!: Float32Array;
  private rainVelocities!: Float32Array;

  // Puddles and water splash particles
  private splashGeo!: THREE.BufferGeometry;
  private splashParticles!: THREE.Points;

  constructor(scene: THREE.Scene, camera: THREE.Camera) {
    this.scene = scene;
    this.camera = camera;

    // Atmospheric dark blue distance fog
    this.fog = new THREE.FogExp2(0x0a1626, 0.018);
    this.scene.fog = this.fog;
    this.scene.background = new THREE.Color(0x0a1626);

    // Ambient moonlight - clear base visibility so nothing is ever pitch black
    const ambient = new THREE.AmbientLight(0x354d68, 2.5);
    this.scene.add(ambient);

    // Directional moonlight breaking through storm clouds
    const moon = new THREE.DirectionalLight(0x7ea5cc, 2.2);
    moon.position.set(10, 30, 20);
    this.scene.add(moon);

    // Lightning light
    this.lightningLight = new THREE.DirectionalLight(0xbdd8ff, 0);
    this.lightningLight.position.set(10, 30, 10);
    this.scene.add(this.lightningLight);

    // --- PLAYER FLASHLIGHT (SpotLight + Camera Ambient Glow) ---
    // 1. Omnidirectional camera glow (guarantees player always sees immediate surroundings)
    const playerGlow = new THREE.PointLight(0xfffaea, 3.0, 18, 1.2);
    playerGlow.position.set(0, 0, 0.1);
    this.camera.add(playerGlow);

    // 2. Focused long-range flashlight beam
    this.flashlight = new THREE.SpotLight(0xffffff, 8.0, 40, Math.PI / 4, 0.5, 1.0);
    this.flashlight.position.set(0, 0, 0);
    this.flashlight.castShadow = true;
    this.flashlight.shadow.mapSize.width = 1024;
    this.flashlight.shadow.mapSize.height = 1024;
    this.flashlight.shadow.camera.near = 0.2;
    this.flashlight.shadow.camera.far = 40;

    // Target placed in front of camera (must remain child of camera so flashlight points where player looks)
    const lightTarget = new THREE.Object3D();
    lightTarget.position.set(0, 0, -15);
    this.camera.add(lightTarget);
    this.flashlight.target = lightTarget;
    this.camera.add(this.flashlight);

    // Soft volumetric light cone mesh attached to camera
    const coneGeo = new THREE.ConeGeometry(2.4, 10.0, 20, 1, true);
    coneGeo.translate(0, -5.0, 0);
    coneGeo.rotateX(-Math.PI / 2);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xfff4cb,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.flashlightCone = new THREE.Mesh(coneGeo, coneMat);
    this.flashlightCone.position.set(0.2, -0.15, 0);
    this.camera.add(this.flashlightCone);

    // Initialize rain system
    this.initRain();
  }

  public registerFlickeringLight(light: THREE.PointLight) {
    this.flickeringLights.push({
      light,
      baseIntensity: light.intensity,
      phase: Math.random() * 100,
    });
  }

  public setQuality(preset: 'low' | 'medium' | 'high') {
    if (preset === 'low') {
      this.flashlight.castShadow = false;
      this.rainCount = 600;
      this.flashlightCone.visible = false;
    } else if (preset === 'medium') {
      this.flashlight.castShadow = true;
      this.flashlight.shadow.mapSize.set(512, 512);
      this.rainCount = 1200;
      this.flashlightCone.visible = this.flashlightOn;
    } else {
      this.flashlight.castShadow = true;
      this.flashlight.shadow.mapSize.set(1024, 1024);
      this.rainCount = 2200;
      this.flashlightCone.visible = this.flashlightOn;
    }
  }

  public toggleFlashlight(): boolean {
    if (this.batteryLevel <= 0) {
      this.flashlightOn = false;
    } else {
      this.flashlightOn = !this.flashlightOn;
    }
    this.flashlight.visible = this.flashlightOn;
    this.flashlightCone.visible = this.flashlightOn;
    return this.flashlightOn;
  }

  private initRain() {
    this.rainPositions = new Float32Array(this.rainCount * 3);
    this.rainVelocities = new Float32Array(this.rainCount);

    for (let i = 0; i < this.rainCount; i++) {
      this.rainPositions[i * 3 + 0] = (Math.random() - 0.5) * 50;
      this.rainPositions[i * 3 + 1] = Math.random() * 25;
      this.rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      this.rainVelocities[i] = 16 + Math.random() * 10;
    }

    this.rainGeo = new THREE.BufferGeometry();
    this.rainGeo.setAttribute('position', new THREE.BufferAttribute(this.rainPositions, 3));

    this.rainMaterial = new THREE.PointsMaterial({
      color: 0x8ba6c1,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    this.rainParticles = new THREE.Points(this.rainGeo, this.rainMaterial);
    this.scene.add(this.rainParticles);
  }

  public update(delta: number, playerPos: THREE.Vector3) {
    // 1. Flashlight battery drain & jitter
    if (this.flashlightOn) {
      this.batteryLevel = Math.max(0, this.batteryLevel - delta * 0.4); // lasts ~4 mins of continuous use
      if (this.batteryLevel <= 0) {
        this.flashlightOn = false;
        this.flashlight.visible = false;
        this.flashlightCone.visible = false;
      } else if (this.batteryLevel < 20) {
        // Dying battery flicker
        const flicker = Math.random() > 0.3 ? 1.0 : 0.2;
        this.flashlight.intensity = 4.5 * (this.batteryLevel / 20) * flicker;
        (this.flashlightCone.material as THREE.MeshBasicMaterial).opacity = 0.08 * flicker;
      } else {
        this.flashlight.intensity = 4.5;
        (this.flashlightCone.material as THREE.MeshBasicMaterial).opacity = 0.08;
      }
    }

    // 2. Flickering clinic fluorescent lights
    for (const item of this.flickeringLights) {
      item.phase += delta * 15;
      // Irregular stutter pattern
      const noise = Math.sin(item.phase) * Math.cos(item.phase * 2.3);
      if (noise > 0.75) {
        item.light.intensity = 0.05; // blackout flicker
      } else {
        item.light.intensity = item.baseIntensity * (0.85 + Math.random() * 0.25);
      }
    }

    // 3. Lightning flash system
    this.lightningTimer += delta;
    if (!this.isLightningFlashing && this.lightningTimer > 18 + Math.random() * 20) {
      this.isLightningFlashing = true;
      this.lightningTimer = 0;
      this.flashStep = 0;
      if (this.onThunder) {
        setTimeout(() => this.onThunder?.(), 600);
      }
    }

    if (this.isLightningFlashing) {
      this.flashStep += delta * 12;
      if (this.flashStep < 0.2) {
        this.lightningLight.intensity = 6.0;
        this.scene.background = new THREE.Color(0x304258);
      } else if (this.flashStep < 0.35) {
        this.lightningLight.intensity = 0.4;
      } else if (this.flashStep < 0.6) {
        this.lightningLight.intensity = 8.5;
        this.scene.background = new THREE.Color(0x405570);
      } else {
        this.lightningLight.intensity = 0;
        this.scene.background = new THREE.Color(0x04080d);
        this.isLightningFlashing = false;
      }
    }

    // 4. Rain particles follow player with wind velocity
    const pos = this.rainGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < this.rainCount; i++) {
      pos[i * 3 + 1] -= this.rainVelocities[i] * delta;
      pos[i * 3 + 0] -= delta * 3.5; // wind drift

      // Recycle rain drops above player
      if (pos[i * 3 + 1] < 0) {
        pos[i * 3 + 1] = 22;
        pos[i * 3 + 0] = playerPos.x + (Math.random() - 0.5) * 40;
        pos[i * 3 + 2] = playerPos.z + (Math.random() - 0.5) * 40;
      }
    }
    this.rainGeo.attributes.position.needsUpdate = true;
  }
}
