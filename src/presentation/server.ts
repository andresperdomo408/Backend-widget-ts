import express, { Express, Router } from "express";
import cors from "cors";
import logger from "morgan";
import http from "http";
import socketio from "socket.io";
import { Sockets } from "../infrastructure/sockets/socketRoutes";
import { ChatBotWizardRoutes } from "./chatBotWizard";

interface StartOptions {
  port: number;
  routes: Router;
}

export class Server {
  private app: Express;
  private server: http.Server;
  private io: socketio.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new socketio.Server(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      },
    });
  }

  public async start(options: StartOptions) {
    // Initial Middlewares
    this.setupMiddlewares();

    // Setup Routes
    this.app.use(options.routes);

    // Configure Sockets
    this.configSockets();

    // Listening Port
    this.server.listen(options.port, () => {
      console.log(`Server listening on port ${options.port}`);
    });
  }

  private setupMiddlewares() {
    // Morgan
    this.app.use(logger("dev"));
    // CORS
    this.app.use(cors());
    // Parse Body
    this.app.use(express.json());
  }

  private configSockets() {
    new Sockets(this.io);
    new ChatBotWizardRoutes(this.io);
  }
}
