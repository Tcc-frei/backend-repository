import express from "express";

const app = express();
app.use(express.json());

import autonomoController from "./controller/autonomoController.js";
import clienteController from "./controller/clienteController.js";
import visitaController from "./controller/visitaController.js";
import servicoController from "./controller/servicoController.js";
import feedbackController from "./controller/feedbackController.js"
import orcamentoController from "./controller/orcamentoController.js";

export default function adicionarRotas(servidor) {
  servidor.use(autonomoController);
  servidor.use(clienteController);
  servidor.use(visitaController);
  servidor.use(feedbackController)
  servidor.use(servicoController);
  servidor.use(orcamentoController);
}
