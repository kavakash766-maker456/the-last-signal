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
  private spineBones: THREE.Mesh[] = [];

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

    // Materials
    // Pale grimy ash skin
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x8a928e,
      roughness: 0.85,
      metalness: 0.1,
    });

    const darkBoneMat = new THREE.MeshStandardMaterial({
      color: 0x2d3436,
      roughness: 0.9,
    });

    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff3b30,
    });

    const mouthVoidMat = new THREE.MeshBasicMaterial({
      color: 0x0a0505,
    });

    // --- TORSO (Elongated emaciated torso) ---
    const torsoGeo = new THREE.CylinderGeometry(0.24, 0.16, 1.2, 8);
    this.torso = new THREE.Mesh(torsoGeo, skinMat);
    this.torso.position.y = 1.35;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Visible spine ribs
    for (let i = 0; i < 5; i++) {
      const ribGeo = new THREE.TorusGeometry(0.22 - i * 0.015, 0.02, 6, 12, Math.PI * 1.3);
      const rib = new THREE.Mesh(ribGeo, darkBoneMat);
      rib.rotation.x = Math.PI / 2;
      rib.rotation.z = Math.PI * 0.35;
      rib.position.set(0, 0.35 - i * 0.15, 0.02);
      this.torso.add(rib);
      this.spineBones.push(rib);
    }

    // --- HEAD & VISAGE ---
    this.head = new THREE.Group();
    this.head.position.set(0, 0.75, 0.08); // on top of torso, slightly hunched forward
    this.torso.add(this.head);

    // Pale elongated skull
    const craniumGeo = new THREE.BoxGeometry(0.28, 0.42, 0.32);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.position.y = 0.1;
    this.head.add(cranium);

    // Sunken eye sockets
    const socketGeo = new THREE.BoxGeometry(0.08, 0.08, 0.05);
    const socketL = new THREE.Mesh(socketGeo, mouthVoidMat);
    socketL.position.set(-0.07, 0.12, 0.16);
    this.head.add(socketL);

    const socketR = new THREE.Mesh(socketGeo, mouthVoidMat);
    socketR.position.set(0.07, 0.12, 0.16);
    this.head.add(socketR);

    // Terrifying pinpoint glowing eyes inside sockets
    const eyeGeo = new THREE.SphereGeometry(0.018, 6, 6);
    this.eyeGlintLeft = new THREE.Mesh(eyeGeo, eyeGlowMat);
    this.eyeGlintLeft.position.set(-0.07, 0.12, 0.18);
    this.head.add(this.eyeGlintLeft);

    this.eyeGlintRight = new THREE.Mesh(eyeGeo, eyeGlowMat);
    this.eyeGlintRight.position.set(0.07, 0.12, 0.18);
    this.head.add(this.eyeGlintRight);

    // Gaping dislocated lower jaw
    const jawGeo = new THREE.BoxGeometry(0.22, 0.22, 0.28);
    this.jaw = new THREE.Mesh(jawGeo, skinMat);
    this.jaw.position.set(0, -0.16, 0.08);
    this.head.add(this.jaw);

    // Mouth cavity void
    const cavityGeo = new THREE.BoxGeometry(0.18, 0.16, 0.22);
    const cavity = new THREE.Mesh(cavityGeo, mouthVoidMat);
    cavity.position.set(0, -0.05, 0.09);
    this.head.add(cavity);

    // --- ARMS (Unnaturally long, reaching below knees) ---
    // Left Arm
    this.leftArmUpper = new THREE.Group();
    this.leftArmUpper.position.set(-0.32, 0.45, 0);
    this.torso.add(this.leftArmUpper);

    const upperArmGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.7, 6);
    const leftUpperArmMesh = new THREE.Mesh(upperArmGeo, skinMat);
    leftUpperArmMesh.position.y = -0.35;
    this.leftArmUpper.add(leftUpperArmMesh);

    const lowerArmGeo = new THREE.CylinderGeometry(0.04, 0.025, 0.85, 6);
    this.leftArmLower = new THREE.Mesh(lowerArmGeo, skinMat);
    this.leftArmLower.position.y = -0.8;
    this.leftArmUpper.add(this.leftArmLower);

    // Spidery Claws Left
    const clawGeo = new THREE.ConeGeometry(0.02, 0.25, 4);
    for (let c = -1; c <= 1; c++) {
      const claw = new THREE.Mesh(clawGeo, darkBoneMat);
      claw.rotation.x = Math.PI;
      claw.position.set(c * 0.035, -0.5, 0);
      this.leftArmLower.add(claw);
    }

    // Right Arm
    this.rightArmUpper = new THREE.Group();
    this.rightArmUpper.position.set(0.32, 0.45, 0);
    this.torso.add(this.rightArmUpper);

    const rightUpperArmMesh = new THREE.Mesh(upperArmGeo, skinMat);
    rightUpperArmMesh.position.y = -0.35;
    this.rightArmUpper.add(rightUpperArmMesh);

    this.rightArmLower = new THREE.Mesh(lowerArmGeo, skinMat);
    this.rightArmLower.position.y = -0.8;
    this.rightArmUpper.add(this.rightArmLower);

    // Spidery Claws Right
    for (let c = -1; c <= 1; c++) {
      const claw = new THREE.Mesh(clawGeo, darkBoneMat);
      claw.rotation.x = Math.PI;
      claw.position.set(c * 0.035, -0.5, 0);
      this.rightArmLower.add(claw);
    }

    // --- LEGS (Digitigrade bent backward) ---
    // Left Leg
    this.leftLegUpper = new THREE.Group();
    this.leftLegUpper.position.set(-0.16, -0.6, 0);
    this.torso.add(this.leftLegUpper);

    const thighGeo = new THREE.CylinderGeometry(0.07, 0.05, 0.75, 6);
    const leftThigh = new THREE.Mesh(thighGeo, skinMat);
    leftThigh.position.y = -0.35;
    leftThigh.rotation.x = 0.25;
    this.leftLegUpper.add(leftThigh);

    const shinGeo = new THREE.CylinderGeometry(0.05, 0.03, 0.8, 6);
    this.leftLegLower = new THREE.Mesh(shinGeo, skinMat);
    this.leftLegLower.position.set(0, -0.8, -0.15);
    this.leftLegLower.rotation.x = -0.3;
    this.leftLegUpper.add(this.leftLegLower);

    // Right Leg
    this.rightLegUpper = new THREE.Group();
    this.rightLegUpper.position.set(0.16, -0.6, 0);
    this.torso.add(this.rightLegUpper);

    const rightThigh = new THREE.Mesh(thighGeo, skinMat);
    rightThigh.position.y = -0.35;
    rightThigh.rotation.x = 0.25;
    this.rightLegUpper.add(rightThigh);

    this.rightLegLower = new THREE.Mesh(shinGeo, skinMat);
    this.rightLegLower.position.set(0, -0.8, -0.15);
    this.rightLegLower.rotation.x = -0.3;
    this.rightLegUpper.add(this.rightLegLower);
  }

  public setState(state: EnemyAIState) {
    this.currentState = state;
    if (state === 'ATTACK') {
      this.isAttacking = true;
      this.attackProgress = 0;
    }
  }

  public update(delta: number, isMoving: boolean) {
    this.animTime += delta;
    this.twitchCooldown -= delta;

    // --- ERATIC MICRO-SPASMS & HEAD JERKS ---
    if (this.twitchCooldown <= 0) {
      this.twitchCooldown = 0.25 + Math.random() * 0.9;
      // Snapping head angle
      const jerkX = (Math.random() - 0.5) * 0.7;
      const jerkY = (Math.random() - 0.5) * 0.9;
      const jerkZ = (Math.random() - 0.5) * 0.6;
      this.targetHeadJerk.set(jerkX, jerkY, jerkZ);
    }

    // Smooth lerp to snap jerk, then back
    this.currentHeadJerk.x = THREE.MathUtils.lerp(this.currentHeadJerk.x, this.targetHeadJerk.x, delta * 18);
    this.currentHeadJerk.y = THREE.MathUtils.lerp(this.currentHeadJerk.y, this.targetHeadJerk.y, delta * 18);
    this.currentHeadJerk.z = THREE.MathUtils.lerp(this.currentHeadJerk.z, this.targetHeadJerk.z, delta * 18);

    // Jaw shuddering tremor
    const jawTremor = Math.sin(this.animTime * 45) * 0.05 + 0.12;
    this.jaw.position.y = -0.16 - jawTremor;

    // Eye flickering intensity
    const eyeFlicker = Math.random() > 0.92 ? 0.3 : 1.0;
    (this.eyeGlintLeft.material as THREE.MeshBasicMaterial).color.setRGB(eyeFlicker, 0.1, 0.1);
    (this.eyeGlintRight.material as THREE.MeshBasicMaterial).color.setRGB(eyeFlicker, 0.1, 0.1);

    // Spine breathing pulse
    const breathe = Math.sin(this.animTime * 3) * 0.04;
    this.torso.scale.set(1 + breathe, 1, 1 + breathe);

    // --- LOCOMOTION ANIMATION ---
    const speed = this.currentState === 'CHASE' ? 14 : 6;
    const walkCycle = Math.sin(this.animTime * speed);

    if (isMoving) {
      // Upper legs swing
      this.leftLegUpper.rotation.x = walkCycle * 0.65;
      this.rightLegUpper.rotation.x = -walkCycle * 0.65;

      // Upper torso sway & hunch
      if (this.currentState === 'CHASE') {
        // Terrifying forward hunching sprint
        this.torso.rotation.x = 0.55 + Math.sin(this.animTime * speed * 2) * 0.08;
        this.leftArmUpper.rotation.x = -1.2 + Math.cos(this.animTime * speed) * 0.8;
        this.rightArmUpper.rotation.x = -1.2 - Math.cos(this.animTime * speed) * 0.8;
      } else {
        // Creeping stalking patrol
        this.torso.rotation.x = 0.25;
        this.leftArmUpper.rotation.x = -walkCycle * 0.4;
        this.rightArmUpper.rotation.x = walkCycle * 0.4;
      }
    } else {
      // Idle twitching
      this.leftLegUpper.rotation.x = 0;
      this.rightLegUpper.rotation.x = 0;
      this.torso.rotation.x = 0.15 + Math.sin(this.animTime * 2) * 0.03;
      this.leftArmUpper.rotation.x = Math.sin(this.animTime * 3) * 0.1;
      this.rightArmUpper.rotation.x = -Math.sin(this.animTime * 3) * 0.1;
    }

    // Apply head jerk
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
