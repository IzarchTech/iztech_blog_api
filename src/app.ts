import express, { Application } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { logger } from "./utils/logger";
import { db } from "./utils/db";

class App {
  private express: Application;
  private port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeDB();
  }

  private initializeMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(compression());
  }

  private initializeDB(): void {
    db.initialize()
      .then(() => {
        logger.info("Database initialized");
      })
      .catch((error) => {
        logger.error(error);
      });
  }

  public listen() {
    this.express.listen(this.port, () => {
      logger.info(`Application listening at http://localhost:${this.port}`);
    });
  }
}

export default App;
