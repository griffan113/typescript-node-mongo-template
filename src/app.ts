import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.routes();
    this.middlewares();
    this.database();
  }

  public middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  public routes(): void {
    this.express.use("/api", router);
  }

  public database(): void {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("Connected to database."));
  }
}

export default new App().express;
