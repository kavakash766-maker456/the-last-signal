import * as THREE from 'three';
import { Atmosphere } from './Atmosphere';

export interface InteractableObject {
  id: string;
  type: 'GATE_KEY' | 'CLINIC_FUSE' | 'GENERATOR' | 'DOCTOR_SAFE' | 'AUDIO_RECORDER' | 'ROOFTOP_RADIO' | 'GATE';
  mesh: THREE.Object3D;
  promptSi: string;
  promptEn: string;
  position: THREE.Vector3;
  interacted: boolean;
}

export class ClinicScene {
  public root: THREE.Group;
  public walls: THREE.Box3[] = [];
  public interactables: InteractableObject[] = [];
  public atmosphere: Atmosphere;

  // Key Scene Meshes for Dynamic State Updates
  public gateDoor: THREE.Mesh | null = null;
  public generatorLight: THREE.PointLight | null = null;
  public radioTowerLight: THREE.PointLight | null = null;
  public safeDoor: THREE.Mesh | null = null;

  constructor(scene: THREE.Scene, camera: THREE.Camera) {
    this.root = new THREE.Group();
    this.root.name = 'clinic_environment';
    scene.add(this.root);

    this.atmosphere = new Atmosphere(scene, camera);

    this.buildClinic();
  }

  private buildClinic() {
    // --- TEXTURES (Procedurally Generated for 0-dependency robustness) ---
    const tileFloorMat = this.createTileFloorMaterial();
    const concreteWallMat = this.createConcreteWallMaterial();
    const rustedMetalMat = new THREE.MeshStandardMaterial({ color: 0x473d31, roughness: 0.9, metalness: 0.4 });
    const woodDeskMat = new THREE.MeshStandardMaterial({ color: 0x3d291a, roughness: 0.8 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.2, transparent: true, opacity: 0.35 });

    // 1. OUTSIDE GROUND & COURTYARD (Wet ground with puddles)
    const groundGeo = new THREE.PlaneGeometry(80, 80);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f1512,
      roughness: 0.95,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.root.add(ground);

    // Exterior Perimeter Fence
    this.createFence(-35, 0, 70, false);
    this.createFence(35, 0, 70, false);
    this.createFence(0, -35, 70, true);

    // Exterior Jungle Trees (Creepy silhouettes)
    for (let i = 0; i < 35; i++) {
      const angle = (i / 35) * Math.PI * 2;
      const dist = 32 + Math.random() * 8;
      const tx = Math.cos(angle) * dist;
      const tz = Math.sin(angle) * dist;
      this.createJungleTree(tx, tz);
    }

    // 2. CLINIC BUILDING STRUCTURE
    // Ground Floor: 26m wide, 24m deep, 4m ceiling height
    // Room Layout:
    // - Courtyard (z: 10 to 25)
    // - Front Porch & Gate (z: 10)
    // - Reception Lobby (x: -5 to 8, z: 0 to 10)
    // - Main Corridor (x: -2 to 2, z: -12 to 0)
    // - Pharmacy & Safe Room (x: 2 to 11, z: -12 to 0)
    // - Electrical & Generator Room (x: -11 to -2, z: -12 to 0)
    // - Rooftop (y: 4.0, z: -12 to 10)

    // Clinic Foundation & Floor
    const clinicFloorGeo = new THREE.PlaneGeometry(24, 24);
    const clinicFloor = new THREE.Mesh(clinicFloorGeo, tileFloorMat);
    clinicFloor.rotation.x = -Math.PI / 2;
    clinicFloor.position.set(0, 0.02, 0);
    clinicFloor.receiveShadow = true;
    this.root.add(clinicFloor);

    // Reflective Puddles on Clinic Floor
    this.createPuddle(0, 0.03, 3, 2.5, 1.8);
    this.createPuddle(-5, 0.03, -4, 2.0, 1.5);
    this.createPuddle(4, 0.03, -8, 1.8, 2.2);

    // Blood Splatters
    this.createBloodSplatter(0.5, 0.04, 2.5, 1.4);
    this.createBloodSplatter(5.5, 0.04, -6.5, 1.8);
    this.createBloodWallDecal(7.9, 1.6, -7.0, 0, -Math.PI / 2, 0);

    // Clinic Ceiling (Ground Floor)
    const ceilingGeo = new THREE.PlaneGeometry(24, 24);
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x1a211e, roughness: 0.9 });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 4.0, 0);
    this.root.add(ceiling);

    // --- WALLS & ROOM PARTITIONS ---
    // Exterior Walls (North, South, East, West)
    this.addWall(0, 2, -12, 24, 4, 0.4, concreteWallMat); // Back Wall (North)
    this.addWall(-12, 2, 0, 0.4, 4, 24, concreteWallMat); // Left Wall (West)
    this.addWall(12, 2, 0, 0.4, 4, 24, concreteWallMat);  // Right Wall (East)

    // Front Wall (South) with Gate Opening at center
    this.addWall(-7, 2, 10, 10, 4, 0.4, concreteWallMat);
    this.addWall(7, 2, 10, 10, 4, 0.4, concreteWallMat);
    this.addWall(0, 3.5, 10, 4, 1, 0.4, concreteWallMat); // Arch over gate

    // Front Security Gate (Locked by default)
    const gateGeo = new THREE.BoxGeometry(3.6, 3.0, 0.1);
    this.gateDoor = new THREE.Mesh(gateGeo, rustedMetalMat);
    this.gateDoor.position.set(0, 1.5, 10);
    this.gateDoor.castShadow = true;
    this.root.add(this.gateDoor);
    this.walls.push(new THREE.Box3().setFromObject(this.gateDoor));

    this.interactables.push({
      id: 'clinic_gate',
      type: 'GATE',
      mesh: this.gateDoor,
      promptSi: 'ගේට්ටුව අගුළු හැරීමට යතුර අවශ්‍යයි (Locked)',
      promptEn: 'Clinic Gate (Locked - Requires Key)',
      position: new THREE.Vector3(0, 1.5, 10),
      interacted: false,
    });

    // Interior Walls
    // Wall separating Lobby from Corridor (z = 0)
    this.addWall(-7, 2, 0, 10, 4, 0.3, concreteWallMat);
    this.addWall(7, 2, 0, 10, 4, 0.3, concreteWallMat);
    // Opening at (0, 0, 0) allows entering corridor

    // Corridor Partition Walls
    this.addWall(-2.5, 2, -6, 0.3, 4, 12, concreteWallMat); // Left corridor wall
    this.addWall(2.5, 2, -6, 0.3, 4, 12, concreteWallMat);  // Right corridor wall

    // Doors to Pharmacy (x: 2.5, z: -5) and Generator room (x: -2.5, z: -5)
    // Left doorway opening at z = -3, Right doorway opening at z = -5

    // --- LIGHT FIXTURES ---
    // Flickering fluorescent light in Lobby
    const lobbyLight = new THREE.PointLight(0xa5c4d4, 1.8, 14, 1.8);
    lobbyLight.position.set(0, 3.6, 5);
    this.root.add(lobbyLight);
    this.atmosphere.registerFlickeringLight(lobbyLight);

    const lightFixtureMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.1, 1.5),
      new THREE.MeshStandardMaterial({ emissive: 0xa5c4d4, emissiveIntensity: 0.8, color: 0x222222 })
    );
    lightFixtureMesh.position.set(0, 3.9, 5);
    this.root.add(lightFixtureMesh);

    // Flickering light in Corridor
    const corridorLight = new THREE.PointLight(0x8cb6a2, 1.5, 12, 1.8);
    corridorLight.position.set(0, 3.6, -6);
    this.root.add(corridorLight);
    this.atmosphere.registerFlickeringLight(corridorLight);

    // --- RECEPTION LOBBY PROPS ---
    // Reception Counter Desk
    const desk = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.1, 1.2), woodDeskMat);
    desk.position.set(3, 0.55, 6);
    desk.castShadow = true;
    this.root.add(desk);
    this.walls.push(new THREE.Box3().setFromObject(desk));

    // Glass partition on desk (shattered/cracked)
    const glass = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.8, 0.05), glassMat);
    glass.position.set(3, 1.5, 6);
    this.root.add(glass);

    // Medical Gurney / Stretcher
    this.createGurney(-4, 0, 5, 0.4);
    this.createGurney(-1, 0, -8, -0.2);

    // Overturned Chairs
    this.createChair(1.5, 0, 4.5, 1.2);
    this.createChair(-2.5, 0, 7.5, -0.8);

    // --- INTERACTABLE OBJECT 1: GATE KEY (In Reception desk drawer / surface) ---
    const keyGeo = new THREE.TorusGeometry(0.08, 0.02, 6, 12);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xfacc15,
      emissiveIntensity: 0.4,
    });
    const keyMesh = new THREE.Mesh(keyGeo, keyMat);
    keyMesh.position.set(2.8, 1.15, 6.0);
    this.root.add(keyMesh);

    this.interactables.push({
      id: 'gate_key',
      type: 'GATE_KEY',
      mesh: keyMesh,
      promptSi: 'ප්‍රධාන ගේට්ටුවේ යතුර ගන්න (Take Gate Key)',
      promptEn: 'Pick up Main Gate Key [E]',
      position: keyMesh.position.clone(),
      interacted: false,
    });

    // --- PHARMACY & DOCTOR'S RECORDS OFFICE (East Room) ---
    // Wall Safe (Symbol / 3-digit Code: 739)
    const safeBox = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.5), rustedMetalMat);
    safeBox.position.set(11.6, 1.5, -7);
    this.root.add(safeBox);
    this.walls.push(new THREE.Box3().setFromObject(safeBox));

    const safeDoorGeo = new THREE.BoxGeometry(0.7, 0.7, 0.08);
    this.safeDoor = new THREE.Mesh(safeDoorGeo, new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.3 }));
    this.safeDoor.position.set(11.35, 1.5, -7);
    this.root.add(this.safeDoor);

    this.interactables.push({
      id: 'doctor_safe',
      type: 'DOCTOR_SAFE',
      mesh: this.safeDoor,
      promptSi: 'සේප්පුව විවෘත කරන්න (Unlock Safe Code)',
      promptEn: 'Doctor\'s Safe (Enter Code) [E]',
      position: this.safeDoor.position.clone(),
      interacted: false,
    });

    // Sinhala Blood Note on wall above safe: "කේතය: 7 - 3 - 9"
    this.createWallNote(11.8, 2.2, -5.5, 'කේතය: 739');

    // Medicine Shelves in Pharmacy
    this.createShelves(7, 0, -11.5, 4, 3);

    // Audio Recorder Cassette Player inside Doctor's room
    const recorderGeo = new THREE.BoxGeometry(0.35, 0.12, 0.25);
    const recorderMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });
    const recorderMesh = new THREE.Mesh(recorderGeo, recorderMat);
    recorderMesh.position.set(8.5, 0.85, -6.5);
    this.root.add(recorderMesh);

    this.interactables.push({
      id: 'audio_recorder',
      type: 'AUDIO_RECORDER',
      mesh: recorderMesh,
      promptSi: 'හඬ පටය අසන්න (Play Emergency Tape)',
      promptEn: 'Audio Recorder (Listen Tape) [E]',
      position: recorderMesh.position.clone(),
      interacted: false,
    });

    // --- ELECTRICAL & GENERATOR ROOM (West Room) ---
    // Diesel Generator Mesh
    const genGeo = new THREE.BoxGeometry(2.0, 1.5, 1.6);
    const genMat = new THREE.MeshStandardMaterial({ color: 0x223028, metalness: 0.6, roughness: 0.7 });
    const generator = new THREE.Mesh(genGeo, genMat);
    generator.position.set(-8, 0.75, -8);
    generator.castShadow = true;
    this.root.add(generator);
    this.walls.push(new THREE.Box3().setFromObject(generator));

    // Generator Status Light (Red until fuse placed)
    this.generatorLight = new THREE.PointLight(0xff2222, 1.2, 5);
    this.generatorLight.position.set(-8, 1.7, -7.2);
    this.root.add(this.generatorLight);

    this.interactables.push({
      id: 'generator',
      type: 'GENERATOR',
      mesh: generator,
      promptSi: 'උත්පාදක යන්ත්‍රය: ෆියුස් එකක් අවශ්‍යයි (Needs Fuse)',
      promptEn: 'Backup Generator (Insert Fuse) [E]',
      position: generator.position.clone(),
      interacted: false,
    });

    // CLINIC FUSE (Located in the morgue/storage corner of electrical room)
    const fuseGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.25, 8);
    const fuseMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xf59e0b, emissiveIntensity: 0.5 });
    const fuseMesh = new THREE.Mesh(fuseGeo, fuseMat);
    fuseMesh.position.set(-10.5, 0.9, -3.5);
    this.root.add(fuseMesh);

    this.interactables.push({
      id: 'clinic_fuse',
      type: 'CLINIC_FUSE',
      mesh: fuseMesh,
      promptSi: 'විදුලි ෆියුස් එක ගන්න (Take Clinic Fuse)',
      promptEn: 'Clinic Industrial Fuse [E]',
      position: fuseMesh.position.clone(),
      interacted: false,
    });

    // --- STAIRCASE TO ROOFTOP ---
    // Located at end of corridor (z = -10 to -12, x = -1 to 1)
    this.createStaircase(0, 0, -11, 4.0);

    // --- ROOFTOP (CLIMAX ESCAPE ARENA) ---
    // Concrete Rooftop Floor (y = 4.0, 24x24m)
    const roofFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.MeshStandardMaterial({ color: 0x181e22, roughness: 0.95 })
    );
    roofFloor.rotation.x = -Math.PI / 2;
    roofFloor.position.set(0, 4.02, 0);
    roofFloor.receiveShadow = true;
    this.root.add(roofFloor);

    // Rooftop Safety Parapet Walls
    this.addWall(0, 4.6, -12, 24, 1.2, 0.4, concreteWallMat);
    this.addWall(0, 4.6, 12, 24, 1.2, 0.4, concreteWallMat);
    this.addWall(-12, 4.6, 0, 0.4, 1.2, 24, concreteWallMat);
    this.addWall(12, 4.6, 0, 0.4, 1.2, 24, concreteWallMat);

    // Emergency Radio Tower Mast
    this.createRadioTower(0, 4.0, 2);
  }

  // Helper Methods
  private addWall(x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    wall.position.set(x, y, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    this.root.add(wall);
    this.walls.push(new THREE.Box3().setFromObject(wall));
  }

  private createRadioTower(x: number, y: number, z: number) {
    // Steel lattice mast
    const mastGeo = new THREE.CylinderGeometry(0.3, 0.8, 10, 4);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.3 });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.set(x, y + 5, z);
    this.root.add(mast);

    // Blinking red aviation warning beacon on top
    this.radioTowerLight = new THREE.PointLight(0xff0000, 3.0, 20);
    this.radioTowerLight.position.set(x, y + 10.2, z);
    this.root.add(this.radioTowerLight);

    // Transmitter Console Base
    const consoleMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 1.2, 1.0),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 })
    );
    consoleMesh.position.set(x, y + 0.6, z + 1.2);
    this.root.add(consoleMesh);
    this.walls.push(new THREE.Box3().setFromObject(consoleMesh));

    this.interactables.push({
      id: 'rooftop_radio',
      type: 'ROOFTOP_RADIO',
      mesh: consoleMesh,
      promptSi: 'හදිසි SOS සංඥාව විකාශනය කරන්න (Send SOS Signal)',
      promptEn: 'Transmit Rooftop SOS Emergency [E]',
      position: consoleMesh.position.clone(),
      interacted: false,
    });
  }

  private createStaircase(x: number, baseY: number, z: number, totalHeight: number) {
    const steps = 14;
    const stepDepth = 0.35;
    const stepHeight = totalHeight / steps;

    for (let i = 0; i < steps; i++) {
      const stepMesh = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, stepHeight, stepDepth),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.5 })
      );
      stepMesh.position.set(x, baseY + (i + 0.5) * stepHeight, z + i * stepDepth);
      stepMesh.castShadow = true;
      stepMesh.receiveShadow = true;
      this.root.add(stepMesh);
      this.walls.push(new THREE.Box3().setFromObject(stepMesh));
    }
  }

  private createGurney(x: number, y: number, z: number, rotY: number) {
    const gurneyGroup = new THREE.Group();
    gurneyGroup.position.set(x, y, z);
    gurneyGroup.rotation.y = rotY;

    // Mattress with stained cloth
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.15, 2.0),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 })
    );
    pad.position.y = 0.85;
    gurneyGroup.add(pad);

    // Metal legs and wheels
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    for (let lx of [-0.35, 0.35]) {
      for (let lz of [-0.85, 0.85]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 6), metalMat);
        leg.position.set(lx, 0.4, lz);
        gurneyGroup.add(leg);
      }
    }
    this.root.add(gurneyGroup);
    this.walls.push(new THREE.Box3().setFromObject(gurneyGroup));
  }

  private createChair(x: number, y: number, z: number, rotZ: number) {
    const chair = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.6 })
    );
    chair.position.set(x, y + 0.25, z);
    chair.rotation.z = rotZ;
    this.root.add(chair);
  }

  private createShelves(x: number, y: number, z: number, w: number, h: number) {
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.7 });
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.5), shelfMat);
    shelf.position.set(x, y + h / 2, z);
    this.root.add(shelf);
    this.walls.push(new THREE.Box3().setFromObject(shelf));
  }

  private createPuddle(x: number, y: number, z: number, rx: number, rz: number) {
    const puddleGeo = new THREE.CircleGeometry(1, 16);
    const puddleMat = new THREE.MeshStandardMaterial({
      color: 0x0b1318,
      roughness: 0.05,
      metalness: 0.9,
    });
    const puddle = new THREE.Mesh(puddleGeo, puddleMat);
    puddle.rotation.x = -Math.PI / 2;
    puddle.position.set(x, y, z);
    puddle.scale.set(rx, rz, 1);
    this.root.add(puddle);
  }

  private createBloodSplatter(x: number, y: number, z: number, scale: number) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#660505';
    ctx.beginPath();
    ctx.arc(64, 64, 35, 0, Math.PI * 2);
    ctx.fill();

    // Splatter droplets
    for (let i = 0; i < 18; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = 25 + Math.random() * 32;
      ctx.beginPath();
      ctx.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, 3 + Math.random() * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.85 });
    const splatter = new THREE.Mesh(new THREE.PlaneGeometry(scale, scale), mat);
    splatter.rotation.x = -Math.PI / 2;
    splatter.position.set(x, y, z);
    this.root.add(splatter);
  }

  private createBloodWallDecal(x: number, y: number, z: number, rx: number, ry: number, rz: number) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#540303';
    // Smear trail down
    ctx.fillRect(45, 20, 38, 70);
    ctx.beginPath();
    ctx.arc(64, 25, 25, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.8 });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), mat);
    decal.position.set(x, y, z);
    decal.rotation.set(rx, ry, rz);
    this.root.add(decal);
  }

  private createWallNote(x: number, y: number, z: number, text: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#8b0000';
    ctx.font = 'bold 36px "Noto Sans Sinhala", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 64);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.9 });
    const note = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.7), mat);
    note.position.set(x - 0.05, y, z);
    note.rotation.y = -Math.PI / 2;
    this.root.add(note);
  }

  private createJungleTree(x: number, z: number) {
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.45, 9, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x141a13, roughness: 0.95 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(x, 4.5, z);

    const foliageGeo = new THREE.ConeGeometry(3.5, 6, 6);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x0a140d, roughness: 0.9 });
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.set(x, 8.5, z);

    this.root.add(trunk);
    this.root.add(foliage);
    this.walls.push(new THREE.Box3().setFromObject(trunk));
  }

  private createFence(startX: number, startZ: number, len: number, isHorizontal: boolean) {
    const postGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.8, 6);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x242e38, metalness: 0.8, roughness: 0.5 });
    const posts = Math.floor(len / 3.5);

    for (let i = 0; i <= posts; i++) {
      const px = isHorizontal ? startX - len / 2 + i * 3.5 : startX;
      const pz = isHorizontal ? startZ : startZ - len / 2 + i * 3.5;
      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(px, 1.4, pz);
      this.root.add(post);
      this.walls.push(new THREE.Box3().setFromObject(post));
    }
  }

  // Texture Helpers
  private createTileFloorMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#22292f';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#11171d';
    ctx.lineWidth = 4;
    for (let i = 0; i <= 256; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 256);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(256, i);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.45,
      metalness: 0.3,
    });
  }

  private createConcreteWallMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#313936';
    ctx.fillRect(0, 0, 128, 128);

    // Grime stains
    ctx.fillStyle = 'rgba(20, 25, 20, 0.4)';
    for (let i = 0; i < 40; i++) {
      ctx.fillRect(Math.random() * 128, Math.random() * 128, Math.random() * 12, Math.random() * 12);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 2);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.1,
    });
  }

  public update(delta: number, playerPos: THREE.Vector3) {
    this.atmosphere.update(delta, playerPos);

    // Radio beacon red rotation on roof
    if (this.radioTowerLight) {
      this.radioTowerLight.intensity = Math.sin(Date.now() * 0.005) > 0.2 ? 3.5 : 0.2;
    }
  }
}
