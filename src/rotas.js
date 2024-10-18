import express from "express";

const app = express();
app.use(express.json());

import autonomoController from "./controller/autonomoController.js";
import clienteController from "./controller/clienteController.js";
import visitaController from "./controller/visitaController.js"
export default function adicionarRotas(servidor) {
  servidor.use(autonomoController);
  servidor.use(clienteController);
  servidor.use(visitaController)
}
