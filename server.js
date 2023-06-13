import app from "./src/app.js";
import cluster from "node:cluster";
import { logger } from "./src/utils/index.js";
import sockets from "./src/sockets.js";
import "./src/config/db.js";
import { cpus } from "node:os";
import http from "node:http";
import { Server as WebSocketServer } from "socket.io";
import process from "node:process";




const enableExpress = () => {
  const PORT = process.env.PORT || 8080;
  server.listen(PORT, () => {
    logger.info(
      ` Servidor  ${process.pid} funcionando en el puerto http://localhost:${PORT}...`
    );
    sockets(io);
  });
};


const server = http.createServer(app);
const io = new WebSocketServer(server);



const enableCluster = () => {
  const numCPUs = cpus().length;

  if (cluster.isPrimary) {
    logger.info(`Master ${process.pid} esta corriendo.`);
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on("exit", (worker) => {
      logger.info(`${worker.process.pid} esta terminado.`);
      cluster.fork();
    });
  } else {
    enableExpress();
  }
};

const CLUSTER = false;

if (CLUSTER) {
  enableCluster();
} else {
  enableExpress();
}
