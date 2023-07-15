import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { Server as httpServer } from "http";
// import socket from "./socket/index.js";

import userRouter from "./routes/userRoutes.js";

import config_db from "./config/dbconfig.js";

dotenv.config();
config_db(process.env.URI);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "DEVELOPMENT") {
  console.log("Development mode".yellow);
  app.get("/", (req, res) => {
    res.send("ALUMNI INTEGRATOR API");
  });
} else {
  console.log("Production mode".green);
  const root = path.join(__dirname, "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

// app.use(notFound);
// app.use(errorHandler);

const server = httpServer(app);

// socket(server);

server.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT}`.black.bgGreen.bold
  );
});
