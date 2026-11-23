import * as THREE from 'three';
import { EnemyAIState } from '@the-last-signal/shared';

export class CreatureModel {
  public mesh: THREE.Group;
  
  // Limbs and joints for procedural animation
  private torso: THREE.Mesh;
  private head: THREE.Group;
  private jaw: THREE.Mesh;
  private leftArmUpper: THREE.Group;
  private leftArmLower: THREE.Mesh;
  private rightArmUpper: THREE.Group;
  private rightArmLower: THREE.Mesh;
  private leftLegUpper: THREE.Group;
  private leftLegLower: THREE.Mesh;
  private rightLegUpper: THREE.Group;
  private rightLegLower: THREE.Mesh;
  private eyeGlintLeft: THREE.Mesh;
  private eyeGlintRight: THREE.Mesh;
  private eyeLight: THREE.PointLight;
  private hospitalShroud: THREE.Mesh;
  private spineBones: THREE.Mesh[] = [];

  // Dark Miasma Particles
  private miasmaParticles: THREE.Points;
  private miasmaPositions: Float32Array;

  // Animation state
  private currentState: EnemyAIState = 'PATROL';
  private animTime = 0;
  private twitchCooldown = 0;
  private targetHeadJerk = new THREE.Euler();
  private currentHeadJerk = new THREE.Euler();
  private isAttacking = false;
  private attackProgress = 0;

  constructor() {
    this.mesh = new THREE.Group();
    this.mesh.name = 'creature_root';

    // PBR Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x6e7874, // necrotized pale gray-green
      roughness: 0.9,
      metalness: 0.05,
    });

    const darkBoneMat = new THREE.MeshStandardMaterial({
      color: 0x1c1f20,
      roughness: 0.95,
    });

    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff1111,
    });

    const mouthVoidMat = new THREE.MeshBasicMaterial({
      color: 0x050202,
    });

    const shroudMat = new THREE.MeshStandardMaterial({
      color: 0x2e3532, // torn dirty hospital shroud
      roughness: 0.95,
      side: THREE.DoubleSide,
    });

    // --- TORSO (Elongated emaciated torso, 2.4m tall) ---
    const torsoGeo = new THREE.CylinderGeometry(0.26, 0.17, 1.35, 8);
    this.torso = new THREE.Mesh(torsoGeo, skinMat);
    this.torso.position.y = 1.45;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Visible exposed ribcage
    for (let i = 0; i < 6; i++) {
      const ribGeo = new THREE.TorusGeometry(0.24 - i * 0.015, 0.025, 6, 12, Math.PI * 1.3);
      const rib = new THREE.Mesh(ribGeo, darkBoneMat);
      rib.rotation.x = Math.PI / 2;
      rib.rotation.z = Math.PI * 0.35;
      rib.position.set(0, 0.42 - i * 0.14, 0.03);
      this.torso.add(rib);
      this.spineBones.push(rib);
    }

    // Torn Hospital Gown / Shroud draped over back and waist
    const shroudGeo = new THREE.CylinderGeometry(0.28, 0.45, 1.2, 8, 1, true);
    this.hospitalShroud = new THREE.Mesh(shroudGeo, shroudMat);
    this.hospitalShroud.position.set(0, -0.3, 0);
    this.torso.add(this.hospitalShroud);

    // --- HEAD & VISAGE ---
    this.head = new THREE.Group();
    this.head.position.set(0, 0.85, 0.1);
    this.torso.add(this.head);

    // Elongated distorted skull
    const craniumGeo = new THREE.BoxGeometry(0.3, 0.46, 0.36);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.position.y = 0.12;
    this.head.add(cranium);

    // Sunken eye sockets
    const socketGeo = new THREE.BoxGeometry(0.09, 0.09, 0.05);
    const socketL = new THREE.Mesh(socketGeo, mouthVoidMat);
    socketL.position.set(-0.08, 0.14, 0.18);
    this.head.add(socketL);

    const socketR = new THREE.Mesh(socketGeo, mouthVoidMat);
    socketR.position.set(0.08, 0.14, 0.18);
    this.head.add(socketR);

    // Glowing Eyes
    const eyeGeo = new THREE.SphereGeometry(0.025, 8, 8);
    this.eyeGlintLeft = new THREE.Mesh(eyeGeo, eyeGlowMat);
    this.eyeGlintLeft.position.set(-0.08, 0.14, 0.2);
    this.head.add(this.eyeGlintLeft);

    this.eyeGlintRight = new THREE.Mesh(eyeGeo, eyeGlowMat.clone());
    this.eyeGlintRight.position.set(0.08, 0.14, 0.2);
    this.head.add(this.eyeGlintRight);

    // Terrifying Ominous Red Face Light (illuminates surroundings when stalking/chasing)
    this.eyeLight = new THREE.PointLight(0xff2222, 2.5, 8, 1.8);
    this.eyeLight.position.set(0, 0.15, 0.35);
    this.head.add(this.eyeLight);

    // Dislocated gaping lower jaw
    const jawGeo = new THREE.BoxGeometry(0.24, 0.25, 0.3);
    this.jaw = new THREE.Mesh(jawGeo, skinMat);
    this.jaw.position.set(0, -0.18, 0.1);
    this.head.add(this.jaw);

    // Void mouth cavity
    const cavity = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.25), mouthVoidMat);
    cavity.position.set(0, -0.06, 0.12);
    this.head.add(cavity);

    // --- ARMS (Long reaching spider-like arms) ---
    const upperArmGeo = new THREE.CylinderGeometry(0.055, 0.045, 0.8, 6);
    const lowerArmGeo = new THREE.CylinderGeometry(0.045, 0.03, 0.95, 6);
    const clawGeo = new THREE.ConeGeometry(0.025, 0.3, 4);

    // Left Arm
    this.leftArmUpper = new THREE.Group();
    this.leftArmUpper.position.set(-0.35, 0.5, 0);
    this.torso.add(this.leftArmUpper);

    const leftUpperArm = new THREE.Mesh(upperArmGeo, skinMat);
    leftUpperArm.position.y = -0.4;
    this.leftArmUpper.add(leftUpperArm);

    this.leftArmLower = new THREE.Mesh(lowerArmGeo, skinMat);
    this.leftArmLower.position.y = -0.9;
    this.leftArmUpper.add(this.leftArmLower);

    for (let c = -1; c <= 1; c++) {
      const claw = new THREE.Mesh(clawGeo, darkBoneMat);
      claw.rotation.x = Math.PI;
      claw.position.set(c * 0.04, -0.55, 0);
      this.leftArmLower.add(claw);
    }

    // Right Arm
    this.rightArmUpper = new THREE.Group();
    this.rightArmUpper.position.set(0.35, 0.5, 0);
    this.torso.add(this.rightArmUpper);

    const rightUpperArm = new THREE.Mesh(upperArmGeo, skinMat);
    rightUpperArm.position.y = -0.4;
    this.rightArmUpper.add(rightUpperArm);

    this.rightArmLower = new THREE.Mesh(lowerArmGeo, skinMat);
    this.rightArmLower.position.y = -0.9;
    this.rightArmUpper.add(this.rightArmLower);

    for (let c = -1; c <= 1; c++) {
      const claw = new THREE.Mesh(clawGeo, darkBoneMat);
      claw.rotation.x = Math.PI;
      claw.position.set(c * 0.04, -0.55, 0);
      this.rightArmLower.add(claw);
    }

    // --- LEGS (Digitigrade joints) ---
    const thighGeo = new THREE.CylinderGeometry(0.075, 0.055, 0.85, 6);
    const shinGeo = new THREE.CylinderGeometry(0.055, 0.035, 0.9, 6);

    // Left Leg
    this.leftLegUpper = new THREE.Group();
    this.leftLegUpper.position.set(-0.18, -0.65, 0);
    this.torso.add(this.leftLegUpper);

    const leftThigh = new THREE.Mesh(thighGeo, skinMat);
    leftThigh.position.y = -0.4;
    leftThigh.rotation.x = 0.25;
    this.leftLegUpper.add(leftThigh);

    this.leftLegLower = new THREE.Mesh(shinGeo, skinMat);
    this.leftLegLower.position.set(0, -0.9, -0.15);
    this.leftLegLower.rotation.x = -0.3;
    this.leftLegUpper.add(this.leftLegLower);

    // Right Leg
    this.rightLegUpper = new THREE.Group();
    this.rightLegUpper.position.set(0.18, -0.65, 0);
    this.torso.add(this.rightLegUpper);

    const rightThigh = new THREE.Mesh(thighGeo, skinMat);
    rightThigh.position.y = -0.4;
    rightThigh.rotation.x = 0.25;
    this.rightLegUpper.add(rightThigh);

    this.rightLegLower = new THREE.Mesh(shinGeo, skinMat);
    this.rightLegLower.position.set(0, -0.9, -0.15);
    this.rightLegLower.rotation.x = -0.3;
    this.rightLegUpper.add(this.rightLegLower);

    // --- DARK MIASMA PARTICLE AURA ---
    const miasmaCount = 120;
    this.miasmaPositions = new Float32Array(miasmaCount * 3);
    for (let i = 0; i < miasmaCount; i++) {
      this.miasmaPositions[i * 3 + 0] = (Math.random() - 0.5) * 1.5;
      this.miasmaPositions[i * 3 + 1] = Math.random() * 2.5;
      this.miasmaPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    const miasmaGeo = new THREE.BufferGeometry();
    miasmaGeo.setAttribute('position', new THREE.BufferAttribute(this.miasmaPositions, 3));
    const miasmaMat = new THREE.PointsMaterial({
      color: 0x110202,
      size: 0.25,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    this.miasmaParticles = new THREE.Points(miasmaGeo, miasmaMat);
    this.mesh.add(this.miasmaParticles);
  }

  public setState(state: EnemyAIState) {
    this.currentState = state;
    if (state === 'CHASE') {
      this.eyeLight.color.setHex(0xff0000);
      this.eyeLight.intensity = 4.5;
      (this.eyeGlintLeft.material as THREE.MeshBasicMaterial).color.setHex(0xff0000);
      (this.eyeGlintRight.material as THREE.MeshBasicMaterial).color.setHex(0xff0000);
    } else {
      this.eyeLight.color.setHex(0xffaa55);
      this.eyeLight.intensity = 1.2;
      (this.eyeGlintLeft.material as THREE.MeshBasicMaterial).color.setHex(0xffaa55);
      (this.eyeGlintRight.material as THREE.MeshBasicMaterial).color.setHex(0xffaa55);
    }

    if (state === 'ATTACK') {
      this.isAttacking = true;
      this.attackProgress = 0;
    }
  }

  public update(delta: number, isMoving: boolean) {
    this.animTime += delta;
    this.twitchCooldown -= delta;

    // --- SPASMS & HEAD TWITCHES ---
    if (this.twitchCooldown <= 0) {
      this.twitchCooldown = 0.2 + Math.random() * 0.7;
      const jerkX = (Math.random() - 0.5) * 0.75;
      const jerkY = (Math.random() - 0.5) * 0.95;
      const jerkZ = (Math.random() - 0.5) * 0.65;
      this.targetHeadJerk.set(jerkX, jerkY, jerkZ);
    }

    this.currentHeadJerk.x = THREE.MathUtils.lerp(this.currentHeadJerk.x, this.targetHeadJerk.x, delta * 20);
    this.currentHeadJerk.y = THREE.MathUtils.lerp(this.currentHeadJerk.y, this.targetHeadJerk.y, delta * 20);
    this.currentHeadJerk.z = THREE.MathUtils.lerp(this.currentHeadJerk.z, this.targetHeadJerk.z, delta * 20);

    // Gaping jaw vibration
    const jawTremor = Math.sin(this.animTime * 50) * 0.06 + 0.14;
    this.jaw.position.y = -0.18 - jawTremor;

    // Shroud cloth swaying
    this.hospitalShroud.rotation.z = Math.sin(this.animTime * 4) * 0.08;

    // Miasma particle rise
    const pArr = this.miasmaPositions;
    for (let i = 0; i < pArr.length / 3; i++) {
      pArr[i * 3 + 1] += delta * 0.8;
      if (pArr[i * 3 + 1] > 2.8) {
        pArr[i * 3 + 1] = 0.2;
      }
    }
    this.miasmaParticles.geometry.attributes.position.needsUpdate = true;

    // --- LOCOMOTION ANIMATION ---
    const speed = this.currentState === 'CHASE' ? 14 : 6;
    const walkCycle = Math.sin(this.animTime * speed);

    if (isMoving) {
      this.leftLegUpper.rotation.x = walkCycle * 0.7;
      this.rightLegUpper.rotation.x = -walkCycle * 0.7;

      if (this.currentState === 'CHASE') {
        // Horrifying predatory hunched sprint
        this.torso.rotation.x = 0.6 + Math.sin(this.animTime * speed * 2) * 0.1;
        this.leftArmUpper.rotation.x = -1.3 + Math.cos(this.animTime * speed) * 0.9;
        this.rightArmUpper.rotation.x = -1.3 - Math.cos(this.animTime * speed) * 0.9;
      } else {
        // Creeping stalking patrol
        this.torso.rotation.x = 0.25;
        this.leftArmUpper.rotation.x = -walkCycle * 0.45;
        this.rightArmUpper.rotation.x = walkCycle * 0.45;
      }
    } else {
      this.leftLegUpper.rotation.x = 0;
      this.rightLegUpper.rotation.x = 0;
      this.torso.rotation.x = 0.18 + Math.sin(this.animTime * 2.5) * 0.04;
      this.leftArmUpper.rotation.x = Math.sin(this.animTime * 3) * 0.12;
      this.rightArmUpper.rotation.x = -Math.sin(this.animTime * 3) * 0.12;
    }

    this.head.rotation.set(
      this.currentHeadJerk.x,
      this.currentHeadJerk.y,
      this.currentHeadJerk.z
    );

    // --- ATTACK LUNGE ANIMATION ---
    if (this.isAttacking) {
      this.attackProgress += delta * 4;
      const lunge = Math.sin(Math.min(Math.PI, this.attackProgress));
      this.leftArmUpper.rotation.x = -1.8 * lunge;
      this.rightArmUpper.rotation.x = -1.8 * lunge;
      this.torso.position.z = lunge * 0.4;
      if (this.attackProgress >= Math.PI) {
        this.isAttacking = false;
        this.torso.position.z = 0;
      }
    }
  }
}
