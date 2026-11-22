# THE LAST SIGNAL (අන්තිම සංඥාව)

A 1-4 Player Co-op 3D Browser Horror Game built with Three.js, TypeScript, and Colyseus.
Supports modern desktop browsers (Chrome, Edge, Firefox) and mobile Android browsers with dedicated touch controls.

## Features
- **Authoritative Multiplayer**: Colyseus server synchronizes player states, transforms, flashlight state, and mission progress.
- **Private Rooms**: 5-character room code system supporting 1-4 players with host migration and reconnect grace periods.
- **Dual Platform Controls**:
  - **Desktop**: Mouse look with pointer lock, WASD, crouch, sprint, flashlight, interact.
  - **Android Touch**: Floating virtual joystick, right drag-to-look zone, dedicated touch action buttons with safe layout and UI scaling.
- **Atmospheric Horror**: Procedural atmospheric audio, baked lighting, realistic flashlight attenuation, distance fog.
- **Sinhala Storyline**: Complete Chapter 1 story in natural, clear Sinhala with subtitles and journal clues.
- **Scalable Graphics**: Low, Medium, High presets optimized for mid-range mobile devices.

## Repository Structure
- `/client`: Frontend browser client (Vite + Three.js + TypeScript).
- `/server`: Multiplayer authoritative server (Node.js + Colyseus).
- `/shared`: Shared schemas, types, constants, and validation rules.
- `/docs`: Architecture, testing guides, and deployment instructions.

## Local Development Setup

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Running Locally
1. Install dependencies:
   ```bash
   cd the-last-signal
   npm install
   ```
2. Start the Colyseus game server:
   ```bash
   npm run dev:server
   ```
   Server listens on `ws://localhost:2567`.
3. In a separate terminal, start the client:
   ```bash
   npm run dev:client
   ```
4. Open `http://localhost:5173` in your browser. Open multiple tabs or a mobile browser on your local network to test 4-player private rooms.

## Deployment Architecture
- **Frontend**: Hosted on [Vercel](https://vercel.com) (Static deployment).
- **Backend**: Hosted on [Render.com](https://render.com) (Free Node.js Web Service with WebSocket and TLS support).
- Refer to [docs/RENDER_DEPLOYMENT_GUIDE_SINHALA.md](docs/RENDER_DEPLOYMENT_GUIDE_SINHALA.md) for full instructions.
