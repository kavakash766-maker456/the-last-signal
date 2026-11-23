import * as THREE from 'three';
import { Atmosphere } from './Atmosphere';
import { ProceduralTextures } from './ProceduralTextures';

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

  // Key Dynamic Objects
  public gateDoor: THREE.Mesh | null = null;
  public generatorLight: THREE.PointLight | null = null;
  public radioTowerLight: THREE.PointLight | null = null;
  public safeDoor: THREE.Mesh | null = null;
  public ambulanceLight: THREE.PointLight | null = null;

  constructor(scene: THREE.Scene, camera: THREE.Camera) {
    this.root = new THREE.Group();
    this.root.name = 'clinic_master_environment';
    scene.add(this.root);

    this.atmosphere = new Atmosphere(scene, camera);

    this.buildWorld();
  }

  private buildWorld() {
    // PBR Materials
    const roadMat = ProceduralTextures.createRoadMaterial();
    const wallMat = ProceduralTextures.createDecayingWallMaterial();
    const tileMat = ProceduralTextures.createHospitalTileMaterial();
    const ironMat = ProceduralTextures.createRustedIronMaterial();
    const groundMat = ProceduralTextures.createWetEarthMaterial();
    const ambuDecalMat = ProceduralTextures.createAmbulanceDecalMaterial();

    // 1. TERRAIN & JUNGLE SURROUNDINGS (160m x 160m)
    const terrainGeo = new THREE.PlaneGeometry(160, 160, 16, 16);
    const terrain = new THREE.Mesh(terrainGeo, groundMat);
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.set(0, 0, 15);
    terrain.receiveShadow = true;
    this.root.add(terrain);

    // 2. WET ASPHALT HIGHWAY ROAD (From z = 12 to z = 75, x = -5 to 5)
    const roadGeo = new THREE.PlaneGeometry(10, 65);
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.rotation.x = -Math.PI / 2;
    roadMesh.position.set(0, 0.03, 44.5);
    roadMesh.receiveShadow = true;
    this.root.add(roadMesh);

    // Roadside Guardrails (Left and right side of road)
    this.createGuardrails(-5.2, 12, 72);
    this.createGuardrails(5.2, 12, 72);

    // Roadside Street Poles with Amber Lights
    this.createStreetPole(-6.5, 20, true);
    this.createStreetPole(6.5, 36, true);
    this.createStreetPole(-6.5, 52, true);
    this.createStreetPole(6.5, 68, true);

    // 3. ABANDONED VEHICLES ON ROAD
    this.createAbandonedAmbulance(-2.6, 26, ambuDecalMat, ironMat);
    this.createAbandonedJeep(3.4, 46, ironMat);

    // Road Hazard Warning Signs
    this.createRoadSign(-3.5, 58, 'අවවාදයයි: මාර්ගය අවහිරයි', 'ROAD BLOCKED - QUARANTINE');
    this.createRoadSign(3.8, 16, 'සායන පිවිසුම: ප්‍රවේශම් වන්න', 'CLINIC COMPOUND - DANGER');

    // Dense Jungle Trees along road and surrounding clinic
    this.createJungleFoliage();

    // 4. CHECKPOINT & SECURITY GATE (z = 10 to 14)
    this.createCheckpointGuardShack(wallMat, ironMat);

    // 5. THE MULTI-WING CLINIC BUILDING (z = -14 to 10)
    this.buildClinicStructure(wallMat, tileMat, ironMat);
  }

  // --- VEHICLE 1: ABANDONED DETAILED AMBULANCE ---
  private createAbandonedAmbulance(x: number, z: number, decalMat: THREE.Material, metalMat: THREE.Material) {
    const ambuGroup = new THREE.Group();
    ambuGroup.position.set(x, 0, z);
    ambuGroup.rotation.y = -0.25; // slightly skewed on road

    // Ambulance Body (Boxy emergency van)
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xdde4e4, roughness: 0.5, metalness: 0.2 });
    const bodyGeo = new THREE.BoxGeometry(2.4, 2.2, 5.2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 1.4, 0);
    body.castShadow = true;
    ambuGroup.add(body);

    // Ambulance Side Decals (Both sides)
    const decalGeo = new THREE.PlaneGeometry(4.8, 1.6);
    const decalRight = new THREE.Mesh(decalGeo, decalMat);
    decalRight.position.set(1.21, 1.4, 0);
    decalRight.rotation.y = Math.PI / 2;
    ambuGroup.add(decalRight);

    const decalLeft = new THREE.Mesh(decalGeo, decalMat);
    decalLeft.position.set(-1.21, 1.4, 0);
    decalLeft.rotation.y = -Math.PI / 2;
    ambuGroup.add(decalLeft);

    // Windshield (Shattered dark glass)
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x111e22, roughness: 0.1, transparent: true, opacity: 0.65 });
    const windGeo = new THREE.BoxGeometry(2.1, 0.9, 0.1);
    const windshield = new THREE.Mesh(windGeo, glassMat);
    windshield.position.set(0, 1.7, -2.55);
    windshield.rotation.x = 0.25;
    ambuGroup.add(windshield);

    // 4 Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.35, 12);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
    const wheelPositions = [
      [-1.15, 0.45, -1.6],
      [1.15, 0.45, -1.6],
      [-1.15, 0.45, 1.6],
      [1.15, 0.45, 1.6],
    ];
    for (const wp of wheelPositions) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wp[0], wp[1], wp[2]);
      ambuGroup.add(wheel);
    }

    // Emergency Flashing Blue Roof Light Bar
    const lightBarGeo = new THREE.BoxGeometry(1.4, 0.25, 0.4);
    const lightBarMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, emissive: 0x0033aa });
    const lightBar = new THREE.Mesh(lightBarGeo, lightBarMat);
    lightBar.position.set(0, 2.6, -0.6);
    ambuGroup.add(lightBar);

    this.ambulanceLight = new THREE.PointLight(0x1e88e5, 3.0, 15, 1.5);
    this.ambulanceLight.position.set(0, 2.8, -0.6);
    ambuGroup.add(this.ambulanceLight);
    this.atmosphere.registerFlickeringLight(this.ambulanceLight);

    // Smashed Headlights (one faint yellow beam shining onto road)
    const headBeam = new THREE.SpotLight(0xfffaaa, 4.0, 18, Math.PI / 6, 0.6);
    headBeam.position.set(-0.7, 0.9, -2.6);
    const target = new THREE.Object3D();
    target.position.set(-0.7, 0, -12);
    ambuGroup.add(target);
    headBeam.target = target;
    ambuGroup.add(headBeam);

    this.root.add(ambuGroup);
    this.walls.push(new THREE.Box3().setFromObject(body));
  }

  // --- VEHICLE 2: ABANDONED POLICE / DEFENSE JEEP ---
  private createAbandonedJeep(x: number, z: number, metalMat: THREE.Material) {
    const jeepGroup = new THREE.Group();
    jeepGroup.position.set(x, 0, z);
    jeepGroup.rotation.y = 0.55;
    jeepGroup.rotation.z = 0.12; // tilted in ditch

    const jeepMat = new THREE.MeshStandardMaterial({ color: 0x28332a, roughness: 0.8, metalness: 0.3 });
    const bodyGeo = new THREE.BoxGeometry(2.1, 1.5, 4.2);
    const body = new THREE.Mesh(bodyGeo, jeepMat);
    body.position.set(0, 1.0, 0);
    body.castShadow = true;
    jeepGroup.add(body);

    // Roll cage
    const cageGeo = new THREE.BoxGeometry(2.0, 1.2, 2.2);
    const cage = new THREE.Mesh(cageGeo, metalMat);
    cage.position.set(0, 2.0, 0.5);
    jeepGroup.add(cage);

    this.root.add(jeepGroup);
    this.walls.push(new THREE.Box3().setFromObject(body));
  }

  // --- STREET POLES WITH POWER LINES ---
  private createStreetPole(x: number, z: number, hasLight: boolean) {
    const poleGroup = new THREE.Group();
    poleGroup.position.set(x, 0, z);

    // Concrete utility pole (7m high)
    const poleGeo = new THREE.CylinderGeometry(0.18, 0.22, 7.5, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a4242, roughness: 0.9 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(0, 3.75, 0);
    pole.castShadow = true;
    poleGroup.add(pole);

    // Crossarm on top
    const crossGeo = new THREE.BoxGeometry(1.6, 0.15, 0.15);
    const cross = new THREE.Mesh(crossGeo, poleMat);
    cross.position.set(0, 7.0, 0);
    poleGroup.add(cross);

    if (hasLight) {
      // Sodium Vapor Street Light Arm
      const armGeo = new THREE.BoxGeometry(0.1, 0.1, 1.8);
      const arm = new THREE.Mesh(armGeo, poleMat);
      arm.position.set(x < 0 ? 0.8 : -0.8, 6.6, 0);
      poleGroup.add(arm);

      // Amber street lamp cone
      const lampLight = new THREE.PointLight(0xffb74d, 3.8, 22, 1.4);
      lampLight.position.set(x < 0 ? 1.6 : -1.6, 6.4, 0);
      lampLight.castShadow = true;
      poleGroup.add(lampLight);
      this.atmosphere.registerFlickeringLight(lampLight);
    }

    this.root.add(poleGroup);
    this.walls.push(new THREE.Box3().setFromObject(pole));
  }

  // --- ROAD GUARDRAILS ---
  private createGuardrails(x: number, startZ: number, endZ: number) {
    const length = Math.abs(endZ - startZ);
    const railMat = new THREE.MeshStandardMaterial({ color: 0x5a6566, metalness: 0.6, roughness: 0.6 });
    
    // Rail beam
    const railGeo = new THREE.BoxGeometry(0.12, 0.35, length);
    const rail = new THREE.Mesh(railGeo, railMat);
    rail.position.set(x, 0.7, (startZ + endZ) / 2);
    rail.castShadow = true;
    this.root.add(rail);

    // Posts every 4m
    const postGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.0, 6);
    for (let z = startZ; z <= endZ; z += 4) {
      const post = new THREE.Mesh(postGeo, railMat);
      post.position.set(x, 0.5, z);
      this.root.add(post);
    }
  }

  // --- HAZARD ROAD SIGN BOARDS ---
  private createRoadSign(x: number, z: number, textSi: string, textEn: string) {
    const signGroup = new THREE.Group();
    signGroup.position.set(x, 0, z);

    // Iron pole
    const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.2, 6);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x222, metalness: 0.8, roughness: 0.4 });
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.set(0, 1.1, 0);
    signGroup.add(post);

    // Warning plate
    const signMat = ProceduralTextures.createHazardSignMaterial(textSi, textEn);
    const signGeo = new THREE.BoxGeometry(1.8, 0.9, 0.05);
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 1.8, 0);
    sign.rotation.y = Math.PI; // Face incoming road players
    signGroup.add(sign);

    this.root.add(signGroup);
  }

  // --- CHECKPOINT & BOOM GATE AT CLINIC ENTRANCE (z = 10 to 14) ---
  private createCheckpointGuardShack(wallMat: THREE.Material, metalMat: THREE.Material) {
    // Guard Shack (x: -5 to -2, z: 10 to 14)
    this.addWall(-3.5, 1.5, 12, 3.0, 3.0, 4.0, wallMat);

    // Boom barrier across road entrance
    const barrierPole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 8), metalMat);
    barrierPole.position.set(-1.8, 0.8, 11);
    this.root.add(barrierPole);

    // Broken boom barrier tilted upwards (open for entry)
    const barrierArm = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.15, 0.15), metalMat);
    barrierArm.position.set(1.5, 2.4, 11);
    barrierArm.rotation.z = 0.65; // bent upwards allowing player entry
    this.root.add(barrierArm);
  }

  // --- MULTI-WING CLINIC BUILDING STRUCTURE ---
  private buildClinicStructure(wallMat: THREE.Material, tileMat: THREE.Material, ironMat: THREE.Material) {
    // 1. Foundation & Hospital Tile Floor (Ground Floor: 26m wide x 24m deep)
    const floorGeo = new THREE.PlaneGeometry(26, 26);
    const floor = new THREE.Mesh(floorGeo, tileMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0.04, -1);
    floor.receiveShadow = true;
    this.root.add(floor);

    // 2. Concrete Ceiling / Roof Slab (y = 4.2)
    const ceilingGeo = new THREE.PlaneGeometry(26, 26);
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x1b2024, roughness: 0.9 });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 4.2, -1);
    this.root.add(ceiling);

    // Rooftop Surface (y = 4.22) with Helipad "H"
    this.createRooftopHelipad();

    // External Iron Fire Escape Stairs leading to Roof (x: -12.5, z: -8 to -1)
    this.createRooftopStairs(ironMat);

    // 3. EXTERIOR WALLS
    this.addWall(0, 2.1, -14, 26, 4.2, 0.5, wallMat); // Back Wall (North)
    this.addWall(-13, 2.1, -1, 0.5, 4.2, 26, wallMat); // Left Wall (West)
    this.addWall(13, 2.1, -1, 0.5, 4.2, 26, wallMat);  // Right Wall (East)

    // Front Wall (South, z = 10) with main gate opening
    this.addWall(-7.5, 2.1, 10, 11, 4.2, 0.5, wallMat);
    this.addWall(7.5, 2.1, 10, 11, 4.2, 0.5, wallMat);
    this.addWall(0, 3.6, 10, 4, 1.2, 0.5, wallMat); // Arch above gate

    // Main Security Entrance Gate (Interactive Gate)
    const gateGeo = new THREE.BoxGeometry(3.6, 3.0, 0.15);
    this.gateDoor = new THREE.Mesh(gateGeo, ironMat);
    this.gateDoor.position.set(0, 1.5, 10);
    this.gateDoor.castShadow = true;
    this.root.add(this.gateDoor);
    this.walls.push(new THREE.Box3().setFromObject(this.gateDoor));

    // Porch Amber Lantern directly illuminating gate
    const porchLight = new THREE.PointLight(0xffb74d, 5.0, 22, 1.3);
    porchLight.position.set(0, 3.4, 10.6);
    porchLight.castShadow = true;
    this.root.add(porchLight);
    this.atmosphere.registerFlickeringLight(porchLight);

    this.interactables.push({
      id: 'clinic_gate',
      type: 'GATE',
      mesh: this.gateDoor,
      promptSi: 'ගේට්ටුව අගුළු හැරීමට යතුර අවශ්‍යයි (Locked)',
      promptEn: 'Clinic Gate (Locked - Key required)',
      position: new THREE.Vector3(0, 1.5, 10),
      interacted: false,
    });

    // 4. INTERIOR ROOM PARTITIONS
    // Wall separating Lobby from Corridor (z = 0)
    this.addWall(-7.5, 2.1, 0, 11, 4.2, 0.4, wallMat);
    this.addWall(7.5, 2.1, 0, 11, 4.2, 0.4, wallMat);
    // Opening at center (x: -2 to 2)

    // Corridor Partition Walls (x = -2 and x = 2, from z = 0 to z = -14)
    this.addWall(-2.2, 2.1, -7, 0.4, 4.2, 14, wallMat);
    this.addWall(2.2, 2.1, -7, 0.4, 4.2, 14, wallMat);

    // 5. WING 1: RECEPTION LOBBY & COUNTER (z = 0 to 10, x = -7 to 7)
    this.buildReceptionLobby(ironMat);

    // 6. WING 2: PHARMACY & DOCTOR'S OFFICE (z = -12 to 0, x = 3 to 12)
    this.buildPharmacyOffice(ironMat);

    // 7. WING 3: ELECTRICAL & DIESEL GENERATOR ROOM (z = -12 to 0, x = -12 to -3)
    this.buildGeneratorRoom(ironMat);
  }

  // --- RECEPTION LOBBY WITH KEY ITEM ---
  private buildReceptionLobby(metalMat: THREE.Material) {
    // Reception Counter Desk (x: 4, z: 5)
    const deskMat = new THREE.MeshStandardMaterial({ color: 0x3d291a, roughness: 0.8 });
    const deskGeo = new THREE.BoxGeometry(3.2, 1.1, 1.2);
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(4, 0.55, 5);
    desk.castShadow = true;
    this.root.add(desk);
    this.walls.push(new THREE.Box3().setFromObject(desk));

    // KEYPAD / KEY ITEM: Reception Gate Key (Objective 1)
    const keyGeo = new THREE.BoxGeometry(0.35, 0.1, 0.15);
    const keyMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffaa00, metalness: 0.9, roughness: 0.2 });
    const keyMesh = new THREE.Mesh(keyGeo, keyMat);
    keyMesh.position.set(3.8, 1.15, 5.0);
    this.root.add(keyMesh);

    // Golden glow light over key
    const keyLight = new THREE.PointLight(0xffcc00, 2.0, 4, 1.5);
    keyLight.position.set(3.8, 1.4, 5.0);
    this.root.add(keyLight);

    this.interactables.push({
      id: 'gate_key',
      type: 'GATE_KEY',
      mesh: keyMesh,
      promptSi: 'ගේට්ටුවේ යතුර ගන්න [E] (Pick up Gate Key)',
      promptEn: 'Pick up Gate Key [E]',
      position: new THREE.Vector3(3.8, 1.15, 5.0),
      interacted: false,
    });

    // Flickering fluorescent tube over lobby
    const tubeLight = new THREE.PointLight(0xaaddee, 2.8, 14, 1.5);
    tubeLight.position.set(0, 3.8, 4.5);
    this.root.add(tubeLight);
    this.atmosphere.registerFlickeringLight(tubeLight);
  }

  // --- PHARMACY & DOCTOR'S OFFICE (Safe Code 739, Audio Recorder) ---
  private buildPharmacyOffice(ironMat: THREE.Material) {
    // Medical Table with Safe (x: 7.5, z: -6)
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.6 });
    const tableGeo = new THREE.BoxGeometry(2.4, 1.0, 1.2);
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(7.5, 0.5, -6);
    this.root.add(table);
    this.walls.push(new THREE.Box3().setFromObject(table));

    // DOCTOR'S SAFE (Objective 3)
    const safeGeo = new THREE.BoxGeometry(0.9, 0.9, 0.8);
    this.safeDoor = new THREE.Mesh(safeGeo, ironMat);
    this.safeDoor.position.set(7.2, 1.45, -6);
    this.safeDoor.castShadow = true;
    this.root.add(this.safeDoor);

    this.interactables.push({
      id: 'doctor_safe',
      type: 'DOCTOR_SAFE',
      mesh: this.safeDoor,
      promptSi: 'සේප්පුව විවෘත කරන්න [E] (Doctor\'s Safe - Code 739)',
      promptEn: 'Doctor\'s Safe [E] (Code required)',
      position: new THREE.Vector3(7.2, 1.45, -6),
      interacted: false,
    });

    // AUDIO CASSETTE RECORDER (Objective 4)
    const recorderGeo = new THREE.BoxGeometry(0.4, 0.2, 0.3);
    const recMat = new THREE.MeshStandardMaterial({ color: 0x222, roughness: 0.4 });
    const recorder = new THREE.Mesh(recorderGeo, recMat);
    recorder.position.set(8.1, 1.1, -6);
    this.root.add(recorder);

    this.interactables.push({
      id: 'audio_recorder',
      type: 'AUDIO_RECORDER',
      mesh: recorder,
      promptSi: 'හඬ පටය අසන්න [E] (Play Audio Tape)',
      promptEn: 'Play Audio Tape [E]',
      position: new THREE.Vector3(8.1, 1.1, -6),
      interacted: false,
    });

    // Blood graffiti on wall: "CODE 739"
    this.createWallGraffiti(12.7, 2.2, -6, 'කේතය: 739 (CODE 739)');
  }

  // --- ELECTRICAL & GENERATOR ROOM (Fuse & Generator) ---
  private buildGeneratorRoom(ironMat: THREE.Material) {
    // Diesel Generator (Objective 2) (x: -7.5, z: -6)
    const genMat = new THREE.MeshStandardMaterial({ color: 0x223328, roughness: 0.7, metalness: 0.5 });
    const genGeo = new THREE.BoxGeometry(2.4, 1.8, 2.0);
    const generator = new THREE.Mesh(genGeo, genMat);
    generator.position.set(-7.5, 0.9, -6);
    generator.castShadow = true;
    this.root.add(generator);
    this.walls.push(new THREE.Box3().setFromObject(generator));

    // Generator status light (Red until powered, then bright Green)
    this.generatorLight = new THREE.PointLight(0xff2222, 2.5, 8, 1.5);
    this.generatorLight.position.set(-7.5, 2.1, -6);
    this.root.add(this.generatorLight);

    this.interactables.push({
      id: 'clinic_generator',
      type: 'GENERATOR',
      mesh: generator,
      promptSi: 'උත්පාදක යන්ත්‍රය ක්‍රියාත්මක කරන්න [E] (Generator)',
      promptEn: 'Start Generator [E]',
      position: new THREE.Vector3(-7.5, 1.2, -6),
      interacted: false,
    });

    // CLINIC FUSE on wall electrical box (x: -12.5, z: -3)
    const fuseBoxGeo = new THREE.BoxGeometry(0.3, 0.6, 0.4);
    const fuseBox = new THREE.Mesh(fuseBoxGeo, ironMat);
    fuseBox.position.set(-12.7, 1.8, -3);
    this.root.add(fuseBox);

    this.interactables.push({
      id: 'clinic_fuse',
      type: 'CLINIC_FUSE',
      mesh: fuseBox,
      promptSi: 'ෆියුස් එක ගන්න [E] (Pick up Generator Fuse)',
      promptEn: 'Pick up Clinic Fuse [E]',
      position: new THREE.Vector3(-12.7, 1.8, -3),
      interacted: false,
    });
  }

  // --- ROOFTOP HELIPAD & RADIO TRANSMISSION TOWER ---
  private createRooftopHelipad() {
    // Helipad "H" Decal on roof (x: 0, y: 4.22, z: -3)
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#1e2428';
    ctx.fillRect(0, 0, 256, 256);

    // White circle
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(128, 128, 100, 0, Math.PI * 2);
    ctx.stroke();

    // White "H" letter
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 120px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('H', 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    const heliPadMat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.7 });
    const heliPad = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), heliPadMat);
    heliPad.rotation.x = -Math.PI / 2;
    heliPad.position.set(0, 4.22, -3);
    this.root.add(heliPad);

    // Radio Transmission Antenna (Objective 5) (x: 8, y: 4.2, z: 2)
    const towerGeo = new THREE.CylinderGeometry(0.15, 0.35, 6.0, 6);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xaa2222, metalness: 0.8 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(8, 7.2, 2);
    this.root.add(tower);

    // Flashing Red Beacon Light on Antenna Top
    this.radioTowerLight = new THREE.PointLight(0xff0000, 4.0, 25, 1.2);
    this.radioTowerLight.position.set(8, 10.3, 2);
    this.root.add(this.radioTowerLight);

    // Radio Console Console
    const consoleGeo = new THREE.BoxGeometry(1.2, 1.0, 0.8);
    const consoleMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const consoleMesh = new THREE.Mesh(consoleGeo, consoleMat);
    consoleMesh.position.set(7.5, 4.7, 2);
    this.root.add(consoleMesh);

    this.interactables.push({
      id: 'rooftop_radio',
      type: 'ROOFTOP_RADIO',
      mesh: consoleMesh,
      promptSi: 'SOS සංඥාව සම්ප්‍රේෂණය කරන්න [E] (Send SOS Radio Signal)',
      promptEn: 'Send SOS Radio Signal [E]',
      position: new THREE.Vector3(7.5, 4.7, 2),
      interacted: false,
    });
  }

  // --- ROOFTOP EXTERNAL FIRE ESCAPE STAIRS ---
  private createRooftopStairs(ironMat: THREE.Material) {
    const stairSteps = 14;
    const startY = 0;
    const endY = 4.2;
    const startZ = -10.5;
    const endZ = -12.5;

    for (let i = 0; i < stairSteps; i++) {
      const prog = i / stairSteps;
      const y = startY + prog * (endY - startY);
      const z = startZ + prog * (endZ - startZ);
      const step = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.15, 0.4), ironMat);
      step.position.set(0, y, z);
      this.root.add(step);
    }
  }

  // --- WALL GRAFFITI TEXTURE DECAL ---
  private createWallGraffiti(x: number, y: number, z: number, text: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 512, 128);

    // Dripping blood red text
    ctx.fillStyle = '#8a0a0a';
    ctx.font = 'bold 36px "Noto Sans Sinhala", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 70);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 0.9), mat);
    decal.position.set(x - 0.22, y, z);
    decal.rotation.y = -Math.PI / 2;
    this.root.add(decal);
  }

  // --- DENSE TROPICAL JUNGLE SILHOUETTES ---
  private createJungleFoliage() {
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x111c15, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x221812, roughness: 0.9 });

    // Trees encircling compound and lining road
    for (let i = 0; i < 65; i++) {
      const angle = (i / 65) * Math.PI * 2;
      const dist = 38 + Math.random() * 25;
      const tx = Math.cos(angle) * dist;
      const tz = Math.sin(angle) * dist + 15;

      const tree = new THREE.Group();
      tree.position.set(tx, 0, tz);

      // Trunk
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 6, 6), trunkMat);
      trunk.position.set(0, 3, 0);
      tree.add(trunk);

      // Foliage layers
      const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.5, 7.5, 6), treeMat);
      foliage.position.set(0, 7.5, 0);
      tree.add(foliage);

      this.root.add(tree);
    }
  }

  public addWall(x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.root.add(mesh);

    const box = new THREE.Box3().setFromObject(mesh);
    this.walls.push(box);
  }

  public update(delta: number, playerPos: THREE.Vector3) {
    this.atmosphere.update(delta, playerPos);

    // Radio beacon red flash
    if (this.radioTowerLight) {
      this.radioTowerLight.intensity = Math.sin(Date.now() * 0.006) > 0 ? 5.0 : 0.2;
    }

    // Ambulance emergency light flash
    if (this.ambulanceLight) {
      this.ambulanceLight.intensity = Math.sin(Date.now() * 0.012) > 0 ? 4.5 : 0.3;
    }
  }
}
