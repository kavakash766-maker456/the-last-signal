import http from "http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colyseusPkg from "colyseus";
const { Server } = colyseusPkg;
import { WebSocketTransport } from "@colyseus/ws-transport";
import { GameRoom } from "./rooms/GameRoom.js";

dotenv.config();

const port = Number(process.env.PORT) || 2567;
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));
app.use(express.json());

// Cold Start & Status Health Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "the-last-signal-server",
    engine: "Colyseus 0.15",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>The Last Signal - Server</title></head>
      <body style="font-family:sans-serif; background:#0b0c10; color:#c5c6c7; padding:2rem;">
        <h1 style="color:#66fcf1;">THE LAST SIGNAL - Authoritative Game Server</h1>
        <p>Colyseus 4-Player Co-op Horror Backend is running.</p>
        <p>Health Status: <a style="color:#45a29e;" href="/health">/health</a></p>
      </body>
    </html>
  `);
});

const server = http.createServer(app);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server
  })
});

// Register private 4-player co-op horror room, filtered by 5-character room code
gameServer.define("game_room", GameRoom)
  .filterBy(["roomCode"])
  .enableRealtimeListing();

gameServer.listen(port).then(() => {
  console.log(`[The Last Signal] Colyseus server is listening on port ${port}`);
  console.log(`[The Last Signal] Health check available at http://localhost:${port}/health`);
}).catch((err) => {
  console.error("[The Last Signal] Failed to start server:", err);
  process.exit(1);
});

// Graceful shutdown
const shutdown = () => {
  console.log("[The Last Signal] Gracefully shutting down server...");
  gameServer.gracefullyShutdown().then(() => {
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
