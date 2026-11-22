import * as THREE from 'three';
import { PlayerData } from '@the-last-signal/shared';

export class RemotePlayerModel {
  public mesh: THREE.Group;
  public id: string;
  private head: THREE.Mesh;
  private torso: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private flashlightMesh: THREE.Mesh;
  private spotlight: THREE.SpotLight;
  private lightCone: THREE.Mesh;
  private nameSprite: THREE.Sprite;
  private animTime = 0;

  // Smoothing buffers for network interpolation
  public targetPosition = new THREE.Vector3();
  public targetRotationY = 0;
  public targetPitch = 0;

  constructor(player: PlayerData) {
    this.id = player.id;
    this.mesh = new THREE.Group();
    this.mesh.name = `player_${player.id}`;

    // Survivor raincoat / utility jacket material
    const jacketMat = new THREE.MeshStandardMaterial({
      color: 0x3d4b3d,
      roughness: 0.7,
    });
    const jeansMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.8,
    });
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xb58a6f,
      roughness: 0.6,
    });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.5, 0.75, 0.3);
    this.torso = new THREE.Mesh(torsoGeo, jacketMat);
    this.torso.position.y = 1.1;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Head
    const headGeo = new THREE.BoxGeometry(0.3, 0.32, 0.3);
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 0.55, 0);
    this.torso.add(this.head);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.18, 0.75, 0.2);
    this.leftLeg = new THREE.Mesh(legGeo, jeansMat);
    this.leftLeg.position.set(-0.14, 0.4, 0);
    this.leftLeg.castShadow = true;
    this.mesh.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, jeansMat);
    this.rightLeg.position.set(0.14, 0.4, 0);
    this.rightLeg.castShadow = true;
    this.mesh.add(this.rightLeg);

    // Flashlight prop on chest/shoulder
    const flGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.2, 8);
    const flMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    this.flashlightMesh = new THREE.Mesh(flGeo, flMat);
    this.flashlightMesh.rotation.x = Math.PI / 2;
    this.flashlightMesh.position.set(0.18, 0.2, 0.18);
    this.torso.add(this.flashlightMesh);

    // SpotLight beam
    this.spotlight = new THREE.SpotLight(0xfff3d6, 4.0, 18, Math.PI / 6, 0.4, 1.5);
    this.spotlight.position.set(0.18, 0.2, 0.25);
    const targetObject = new THREE.Object3D();
    targetObject.position.set(0.18, 0.2, 5);
    this.torso.add(targetObject);
    this.spotlight.target = targetObject;
    this.torso.add(this.spotlight);

    // Soft volumetric light cone mesh
    const coneGeo = new THREE.ConeGeometry(1.6, 6.0, 16, 1, true);
    coneGeo.translate(0, -3.0, 0);
    coneGeo.rotateX(-Math.PI / 2);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xfff0bb,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.lightCone = new THREE.Mesh(coneGeo, coneMat);
    this.lightCone.position.set(0.18, 0.2, 0.25);
    this.torso.add(this.lightCone);

    // Name tag in Sinhala
    this.nameSprite = this.createNameSprite(player.name);
    this.nameSprite.position.set(0, 2.05, 0);
    this.mesh.add(this.nameSprite);

    this.updateState(player);
  }

  private createNameSprite(name: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.roundRect ? ctx.roundRect(10, 10, 236, 44, 8) : ctx.rect(10, 10, 236, 44);
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.roundRect ? ctx.roundRect(10, 10, 236, 44, 8) : ctx.strokeRect(10, 10, 236, 44);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Noto Sans Sinhala", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(1.4, 0.35, 1);
    return sprite;
  }

  public updateState(player: PlayerData) {
    this.targetPosition.set(player.position.x, player.position.y, player.position.z);
    this.targetRotationY = player.rotationY;
    this.targetPitch = player.pitch;

    // Flashlight toggle
    this.spotlight.visible = player.flashlightOn;
    this.lightCone.visible = player.flashlightOn;

    // Crouch scaling
    if (player.isCrouching) {
      this.torso.position.y = 0.75;
      this.leftLeg.scale.y = 0.6;
      this.rightLeg.scale.y = 0.6;
      this.leftLeg.position.y = 0.25;
      this.rightLeg.position.y = 0.25;
      this.nameSprite.position.y = 1.6;
    } else {
      this.torso.position.y = 1.1;
      this.leftLeg.scale.y = 1.0;
      this.rightLeg.scale.y = 1.0;
      this.leftLeg.position.y = 0.4;
      this.rightLeg.position.y = 0.4;
      this.nameSprite.position.y = 2.05;
    }
  }

  public update(delta: number) {
    this.animTime += delta;

    // Smooth position and rotation interpolation
    this.mesh.position.lerp(this.targetPosition, Math.min(1, delta * 15));
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.targetRotationY, Math.min(1, delta * 15));
    this.head.rotation.x = THREE.MathUtils.lerp(this.head.rotation.x, this.targetPitch, Math.min(1, delta * 15));

    // Leg walk cycle if distance moving
    const distToTarget = this.mesh.position.distanceTo(this.targetPosition);
    if (distToTarget > 0.05) {
      const walk = Math.sin(this.animTime * 10);
      this.leftLeg.rotation.x = walk * 0.5;
      this.rightLeg.rotation.x = -walk * 0.5;
    } else {
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
    }
  }

  public dispose() {
    this.mesh.traverse((child) => {
      if ((child as THREE.Mesh).geometry) {
        (child as THREE.Mesh).geometry.dispose();
      }
    });
  }
}
