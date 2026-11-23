import * as THREE from 'three';

export class ProceduralTextures {
  // 1. WET ASPHALT ROAD TEXTURE (with yellow centerline and road edges)
  public static createRoadMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base dark asphalt
    ctx.fillStyle = '#181c20';
    ctx.fillRect(0, 0, 512, 512);

    // Aggregate gravel noise
    for (let i = 0; i < 15000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const gray = Math.floor(20 + Math.random() * 45);
      ctx.fillStyle = `rgb(${gray}, ${gray + 2}, ${gray + 5})`;
      ctx.fillRect(x, y, Math.random() * 2 + 1, Math.random() * 2 + 1);
    }

    // Asphalt cracks
    ctx.strokeStyle = '#0d1013';
    ctx.lineWidth = 1.5;
    for (let c = 0; c < 12; c++) {
      ctx.beginPath();
      let cx = Math.random() * 512;
      let cy = Math.random() * 512;
      ctx.moveTo(cx, cy);
      for (let s = 0; s < 6; s++) {
        cx += (Math.random() - 0.5) * 40;
        cy += (Math.random() - 0.5) * 40;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    // Yellow double center line (vertical down center)
    ctx.fillStyle = '#d4a311';
    ctx.fillRect(246, 0, 8, 512);
    ctx.fillRect(258, 0, 8, 512);

    // Weathered white edge lines
    ctx.fillStyle = 'rgba(210, 220, 230, 0.75)';
    ctx.fillRect(24, 0, 6, 512);
    ctx.fillRect(482, 0, 6, 512);

    // Oil slick & water puddle glisten
    ctx.fillStyle = 'rgba(10, 15, 20, 0.5)';
    ctx.beginPath();
    ctx.ellipse(180, 260, 45, 80, 0.3, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 8);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.6,
      metalness: 0.25,
    });
  }

  // 2. DILAPIDATED HOSPITAL CONCRETE WALL TEXTURE
  public static createDecayingWallMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Faded hospital greenish-gray concrete
    ctx.fillStyle = '#2b3330';
    ctx.fillRect(0, 0, 512, 512);

    // Concrete porosity
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const tone = Math.floor(35 + Math.random() * 25);
      ctx.fillStyle = `rgb(${tone}, ${tone + 4}, ${tone + 2})`;
      ctx.fillRect(x, y, 2, 2);
    }

    // Water leaks & mildew streaks running down
    ctx.fillStyle = 'rgba(12, 18, 14, 0.55)';
    for (let i = 0; i < 25; i++) {
      const rx = Math.random() * 512;
      const width = Math.random() * 18 + 6;
      const height = Math.random() * 300 + 150;
      ctx.fillRect(rx, 0, width, height);
    }

    // Moss / black mold patches at the bottom
    ctx.fillStyle = 'rgba(15, 28, 18, 0.85)';
    for (let m = 0; m < 50; m++) {
      const mx = Math.random() * 512;
      const my = 400 + Math.random() * 112;
      const rad = Math.random() * 30 + 10;
      ctx.beginPath();
      ctx.arc(mx, my, rad, 0, Math.PI * 2);
      ctx.fill();
    }

    // Deep wall fissures
    ctx.strokeStyle = '#121614';
    ctx.lineWidth = 2;
    for (let f = 0; f < 8; f++) {
      ctx.beginPath();
      let fx = Math.random() * 512;
      let fy = Math.random() * 200;
      ctx.moveTo(fx, fy);
      for (let s = 0; s < 7; s++) {
        fx += (Math.random() - 0.5) * 50;
        fy += Math.random() * 50 + 10;
        ctx.lineTo(fx, fy);
      }
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 2);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.88,
      metalness: 0.08,
    });
  }

  // 3. GRUNGE CERAMIC HOSPITAL TILE FLOOR
  public static createHospitalTileMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Dirty tile background
    ctx.fillStyle = '#3a4442';
    ctx.fillRect(0, 0, 512, 512);

    const tileSize = 64;
    // Draw tiles with dark grout lines
    for (let x = 0; x < 512; x += tileSize) {
      for (let y = 0; y < 512; y += tileSize) {
        const shade = Math.floor(55 + Math.random() * 15);
        ctx.fillStyle = `rgb(${shade}, ${shade + 6}, ${shade + 4})`;
        ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
      }
    }

    // Blood stains & dragging trails
    ctx.fillStyle = 'rgba(90, 10, 10, 0.7)';
    ctx.beginPath();
    ctx.ellipse(220, 200, 70, 35, 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(65, 8, 8, 0.85)';
    for (let b = 0; b < 20; b++) {
      const bx = 180 + Math.random() * 100;
      const by = 170 + Math.random() * 80;
      ctx.beginPath();
      ctx.arc(bx, by, Math.random() * 12 + 2, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.35,
      metalness: 0.3,
    });
  }

  // 4. RUSTED CORRUGATED METAL & SHEET IRON
  public static createRustedIronMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#3a342d';
    ctx.fillRect(0, 0, 256, 256);

    // Rust noise
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const r = Math.floor(90 + Math.random() * 55);
      const g = Math.floor(40 + Math.random() * 30);
      const b = 15;
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 3, 3);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.55,
    });
  }

  // 5. CAUTION & WARNING ROAD SIGNS (Sri Lanka Horror Setting)
  public static createHazardSignMaterial(textSi: string, textEn: string): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Yellow hazard reflective plate
    ctx.fillStyle = '#ffb703';
    ctx.fillRect(0, 0, 512, 256);

    // Black border with diagonal hazard stripes
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#05070a';
    ctx.strokeRect(7, 7, 498, 242);

    // Corner bolts
    ctx.fillStyle = '#333';
    ctx.fillRect(16, 16, 12, 12);
    ctx.fillRect(484, 16, 12, 12);
    ctx.fillRect(16, 228, 12, 12);
    ctx.fillRect(484, 228, 12, 12);

    // Biohazard / Warning symbol
    ctx.fillStyle = '#d90429';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('⚠️', 256, 68);

    // Sinhala Text
    ctx.fillStyle = '#05070a';
    ctx.font = 'bold 32px "Noto Sans Sinhala", sans-serif';
    ctx.fillText(textSi, 256, 130);

    // English Text
    ctx.font = 'bold 22px "Share Tech Mono", monospace';
    ctx.fillStyle = '#1e293b';
    ctx.fillText(textEn, 256, 180);

    // Grime & blood splatter over sign
    ctx.fillStyle = 'rgba(70, 10, 10, 0.45)';
    ctx.beginPath();
    ctx.arc(380, 140, 45, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.2,
    });
  }

  // 6. AMBULANCE MEDICAL DECAL MATERIAL
  public static createAmbulanceDecalMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Weathered off-white metal
    ctx.fillStyle = '#d8dfdf';
    ctx.fillRect(0, 0, 512, 256);

    // Red emergency stripe
    ctx.fillStyle = '#b7094c';
    ctx.fillRect(0, 80, 512, 60);

    // Faded Red Cross
    ctx.fillStyle = '#b7094c';
    ctx.fillRect(60, 20, 24, 80);
    ctx.fillRect(32, 48, 80, 24);

    // Text: AMBULANCE / හදිසි ගිලන්රථය
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px "Noto Sans Sinhala", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('හදිසි ප්‍රතිකාර (AMBULANCE)', 150, 124);

    // Grime & scratches
    ctx.fillStyle = 'rgba(30, 30, 30, 0.4)';
    for (let i = 0; i < 50; i++) {
      ctx.fillRect(Math.random() * 512, Math.random() * 256, Math.random() * 8, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.35,
    });
  }

  // 7. WET EARTH & MUDDY GRASS MATERIAL
  public static createWetEarthMaterial(): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Dark marshy soil
    ctx.fillStyle = '#1c241e';
    ctx.fillRect(0, 0, 512, 512);

    // Mud blotches & dark grass tufts
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const g = Math.floor(25 + Math.random() * 30);
      ctx.fillStyle = `rgb(${g - 8}, ${g + 6}, ${g - 4})`;
      ctx.fillRect(x, y, 3, 3);
    }

    // Mud pools
    ctx.fillStyle = 'rgba(12, 16, 14, 0.7)';
    for (let p = 0; p < 15; p++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * 512, Math.random() * 512, Math.random() * 60 + 20, Math.random() * 40 + 15, Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 12);

    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.7,
      metalness: 0.15,
    });
  }
}
