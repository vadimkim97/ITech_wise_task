import express, { Express } from "express";
import morgan from "morgan";

import router from "./router/app.router";

// express initialize
const app: Express = express();

// router initialize
app
  .use(morgan(":user-agent - :response-time ms :method :url :status "))
  .use("/", router);

export default app;
