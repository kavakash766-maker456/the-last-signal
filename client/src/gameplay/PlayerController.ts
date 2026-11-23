import * as THREE from 'three';
import { InputManager } from '../input/InputManager';
import { ClinicScene, InteractableObject } from '../graphics/ClinicScene';
import { SoundSystem } from '../audio/SoundSystem';

export class PlayerController {
  public camera: THREE.PerspectiveCamera;
  public input: InputManager;
  public scene: ClinicScene;
  public sounds: SoundSystem;

  public position = new THREE.Vector3(0, 1.7, 34); // Starting on the wet rainy highway approach
  public rotationY = 0; // Face North directly toward ambulance, checkpoint & clinic gates
  public pitch = 0;

  // Speeds
  public walkSpeed = 3.5;
  public sprintSpeed = 6.2;
  public crouchSpeed = 1.8;

  // Vitals
  public stamina = 100; // 0 - 100
  public isExhausted = false;
  public eyeHeight = 1.7;

  // Collision
  private playerRadius = 0.4;
  private velocity = new THREE.Vector3();

  // Footsteps
  private stepDistanceTravelled = 0;
  private readonly stepInterval = 1.8;

  // Interactable raycaster
  private raycaster = new THREE.Raycaster();
  public hoveredInteractable: InteractableObject | null = null;

  constructor(camera: THREE.PerspectiveCamera, input: InputManager, scene: ClinicScene, sounds: SoundSystem) {
    this.camera = camera;
    this.input = input;
    this.scene = scene;
    this.sounds = sounds;

    this.camera.position.copy(this.position);
    this.camera.rotation.order = 'YXZ';
  }

  public update(delta: number) {
    // 1. Consume Look rotation
    const { yaw, pitch } = this.input.consumeDeltas();
    this.rotationY += yaw;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch + pitch));

    this.camera.rotation.y = this.rotationY;
    this.camera.rotation.x = this.pitch;

    // 2. Crouch Eye Height
    const targetHeight = this.input.state.isCrouching ? 1.05 : 1.7;
    this.eyeHeight = THREE.MathUtils.lerp(this.eyeHeight, targetHeight, delta * 12);

    // 3. Sprint & Stamina Mechanics
    let canSprint = this.input.state.isSprinting && !this.input.state.isCrouching && !this.isExhausted;
    const isMoving = Math.abs(this.input.state.forward) > 0.1 || Math.abs(this.input.state.strafe) > 0.1;

    if (canSprint && isMoving) {
      this.stamina = Math.max(0, this.stamina - delta * 22);
      if (this.stamina <= 0) {
        this.isExhausted = true;
        canSprint = false;
      }
    } else {
      this.stamina = Math.min(100, this.stamina + delta * 14);
      if (this.stamina > 25) {
        this.isExhausted = false;
      }
    }

    const currentSpeed = this.input.state.isCrouching
      ? this.crouchSpeed
      : canSprint
      ? this.sprintSpeed
      : this.walkSpeed;

    // 4. Movement vector calculation
    const moveDir = new THREE.Vector3();
    const inputForward = this.input.state.forward;
    const inputStrafe = this.input.state.strafe;

    if (isMoving) {
      // Forward direction in Three.js (when rotationY = 0) is (0, 0, -1)
      const forwardVec = new THREE.Vector3(-Math.sin(this.rotationY), 0, -Math.cos(this.rotationY));
      const rightVec = new THREE.Vector3(Math.cos(this.rotationY), 0, -Math.sin(this.rotationY));

      moveDir.addScaledVector(forwardVec, inputForward);
      moveDir.addScaledVector(rightVec, inputStrafe);
      moveDir.normalize();

      this.velocity.x = moveDir.x * currentSpeed;
      this.velocity.z = moveDir.z * currentSpeed;
    } else {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }

    // 5. Apply Movement with Wall Collisions
    const nextX = this.position.x + this.velocity.x * delta;
    const nextZ = this.position.z + this.velocity.z * delta;

    // Check X collision
    if (!this.checkWallCollision(nextX, this.position.z)) {
      this.position.x = nextX;
    }
    // Check Z collision
    if (!this.checkWallCollision(this.position.x, nextZ)) {
      this.position.z = nextZ;
    }

    // Y height logic: check if on stairs or rooftop
    let targetFloorY = 0;
    if (this.position.z < -10 && Math.abs(this.position.x) < 2) {
      // Climbing stairs to roof
      const stairProgress = Math.max(0, Math.min(1, (-10 - this.position.z) / 2));
      targetFloorY = stairProgress * 4.0;
    } else if (this.position.y > 2.0 && this.position.z < 11 && this.position.z > -11) {
      // On rooftop
      targetFloorY = 4.0;
    }

    this.position.y = THREE.MathUtils.lerp(this.position.y, targetFloorY + this.eyeHeight, delta * 15);
    this.camera.position.copy(this.position);

    // 6. Audio footsteps
    if (isMoving) {
      const stepDist = Math.hypot(this.velocity.x, this.velocity.z) * delta;
      this.stepDistanceTravelled += stepDist;
      const interval = canSprint ? 1.2 : this.input.state.isCrouching ? 2.4 : 1.7;

      if (this.stepDistanceTravelled >= interval) {
        this.stepDistanceTravelled = 0;
        const isPuddle = (this.position.y < 1.0 && (Math.abs(this.position.x) < 4 && Math.abs(this.position.z - 3) < 3));
        this.sounds.playFootstep(this.input.state.isCrouching, canSprint, isPuddle);
      }
    }

    // 7. Raycast for interactables
    this.updateInteractableHover();
  }

  private checkWallCollision(x: number, z: number): boolean {
    const playerBox = new THREE.Box3(
      new THREE.Vector3(x - this.playerRadius, this.position.y - 0.5, z - this.playerRadius),
      new THREE.Vector3(x + this.playerRadius, this.position.y + 0.5, z + this.playerRadius)
    );

    for (const wall of this.scene.walls) {
      if (playerBox.intersectsBox(wall)) {
        return true;
      }
    }
    return false;
  }

  private updateInteractableHover() {
    this.raycaster.set(this.camera.position, this.camera.getWorldDirection(new THREE.Vector3()));
    
    let closest: InteractableObject | null = null;
    let minDist = 2.6; // Max interaction reach

    for (const item of this.scene.interactables) {
      if (item.interacted && item.type !== 'GATE' && item.type !== 'DOCTOR_SAFE') continue;

      const dist = this.camera.position.distanceTo(item.position);
      if (dist < minDist) {
        // Dot product check to verify player is looking in direction of object
        const toObj = item.position.clone().sub(this.camera.position).normalize();
        const lookDir = this.camera.getWorldDirection(new THREE.Vector3());
        if (toObj.dot(lookDir) > 0.8) {
          minDist = dist;
          closest = item;
        }
      }
    }

    this.hoveredInteractable = closest;
  }
}
