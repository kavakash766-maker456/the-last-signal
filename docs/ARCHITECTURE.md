# System Architecture Plan - THE LAST SIGNAL

## 1. System Overview & Topology

```
+-------------------------------------------------------+
|                Android / PC Browsers                  |
|  - Three.js WebGL Renderer (Low / Medium / High)       |
|  - Dual Input: Keyboard/Mouse + Multi-touch Virtual   |
|  - Web Audio API (Ambience, 3D Spatial Audio, Radio)  |
|  - Sinhala UI & Subtitle System (Noto Sans Sinhala)   |
+---------------------------^---------------------------+
                            |
           Secure WebSockets (WSS) / State Sync
                            |
+---------------------------v---------------------------+
|              Persistent Colyseus Server               |
|            (Hosted Free on Render.com)                |
|  - Authoritative 4-Player Room Manager                |
|  - 5-Character Secure Room Codes                      |
|  - Authoritative Puzzle & Key Inventory Validation    |
|  - Server-Authoritative Enemy AI State Machine        |
+-------------------------------------------------------+
```

## 2. Component Breakdown

### 2.1 Frontend Client (`/client`)
- **Engine**: Three.js (r160+) with Vite and TypeScript (strict mode).
- **Physics**: Rapier 3D WebAssembly (`@dimforge/rapier3d-compat`) for player character controller, wall collisions, and raycast line-of-sight checks.
- **Controls**:
  - **Desktop**: Mouse pointer lock (sensitivity, invert option), WASD movement, Shift sprint, C crouch, F flashlight, E interact, Esc pause.
  - **Android Touch**: Dynamic floating virtual thumbstick (left screen half), drag-look zone (right screen half), dedicated action buttons for Interact, Flashlight, Crouch, Sprint. Overlapping UI prevented; scale setting provided.
- **Atmosphere & Visuals**:
  - Forward rendering with baked lighting cues, atmospheric distance fog, and dynamic flashlight spotlight.
  - Three graphics tiers (Low: no shadows, simplified shaders; Medium: soft directional shadow; High: full shadows & bloom).
- **Audio System**:
  - Web Audio API for zero-external-dependency positional audio, radio static, and procedural atmospheric cues.

### 2.2 Authoritative Game Server (`/server`)
- **Framework**: Node.js + Colyseus (`@colyseus/core`, `@colyseus/ws-transport`).
- **Tick Rate**: 20 Hz (50ms interval) for state synchronization and AI ticks; remote client interpolation buffers smooth motion to 60fps.
- **Room Lifecycle**:
  - Private rooms with 5-character alphanumeric room codes (e.g. `H9KZ2`).
  - Strict maximum of 4 players per room; 5th player rejected with `ROOM_FULL` error.
  - Host migration: If the room host disconnects, leadership transfers to the next connected player.
  - Reconnect grace period: 30 seconds for transient mobile disconnections before slot cleanup.
- **Authoritative Rules**:
  - Key items (Gate Key, Clinic Fuse, Audio Recorder) can only be picked up once.
  - Puzzle combinations verified strictly on server before unlocking doors.
  - Enemy AI calculations and damage application computed on server.

### 2.3 Shared Contract (`/shared`)
- **State Schema**:
  - `PlayerState`: id, name, position (x, y, z), rotation (yaw, pitch), isSprinting, isCrouching, flashlightOn, isHost, isReady.
  - `GameState`: phase (`LOBBY`, `BRIEFING`, `PLAYING`, `CLIMAX`, `COMPLETED`, `FAILED`), chapterObjectiveIndex, puzzleUnlocked, powerRestored.
  - `EnemyState`: state (`PATROL`, `INVESTIGATE`, `SEARCH`, `CHASE`, `ATTACK`, `COOLDOWN`), position (x, y, z), targetPlayerId.
- **Room Code Generator & Validator**: Unambiguous character set (excluding 0/O, 1/I/L) with format checks and rate limiting.

## 3. Hosting Architecture: Render & Vercel

### 3.1 Server: Render.com (Free Web Service)
- **Why Render?**
  - Persistent WebSocket connection support without timeout disconnections common to traditional serverless backends.
  - Free tier offers 750 free instance hours per month.
  - Automatic `https://` and `wss://` TLS certificates, essential to satisfy browser Mixed Content policies.
- **Cold Start Mitigation**:
  - Free instances spin down after 15 minutes of inactivity.
  - Client includes an automatic wake-up ping and informative Sinhala status banner (*"සේවාදායකය සූදානම් වෙමින් පවතී... තත්පර කිහිපයක් රැඳී සිටින්න"*) while waiting for the initial WebSocket handshake.

### 3.2 Client: Vercel (Static Hosting)
- **Why Vercel?**
  - Ultra-fast global CDN for static HTML, bundled JavaScript, textures, and audio.
  - Automatic deployment on push.

## 4. Technical Risks & Mitigation Table

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Render Free Tier Cold Start** | Initial room join delayed by 40-50s if server is sleeping. | Client displays an active wake-up timer and retries connection gracefully without crashing. |
| **Android WebGL Context Loss** | Game black-screens when phone switches apps or receives a call. | Register `webglcontextlost` and `webglcontextrestored` listeners; reload textures and restore scene graph cleanly. |
| **Touch Gesture Conflicts** | Browser triggers navigation gestures (pull-to-refresh, swipe back) during play. | Apply `touch-action: none` to the canvas container, intercept `touchstart`/`touchmove` default events. |
| **WSS Mixed Content Block** | Client on HTTPS cannot connect to unencrypted `ws://` server. | Production client always uses `wss://`; environment switch handles local (`ws://localhost:2567`) vs production. |
| **Network Jitter / Lag** | Remote players appear jerky or telepathic. | Interpolate position and rotation with a 100ms smoothing buffer on client. |

## 5. Milestone Progression Plan

- **Milestone A (Architecture)**: Repo audit, architecture definition, Render deployment blueprint, Sinhala onboarding guide.
- **Milestone B (Playable Greybox)**: First-person clinic level, PC + Android touch controls, flashlight, fuse puzzle, solo complete check.
- **Milestone C (Multiplayer)**: 4-player Colyseus rooms, room code join/create, player synchronization, disconnect recovery.
- **Milestone D (Story & AI)**: Sinhala Chapter 1 story, enemy state machine, journal clues, climax escape sequence.
- **Milestone E (Visual & Audio Polish)**: Baked horror lighting, audio ambience, Low/Med/High presets, UI scale.
- **Milestone F (Release & Verification)**: Multi-client acceptance tests, production builds, live deployment instructions.
