import { Router } from "express";

import {
  cadastrarVisita,
  consultarVisitaId,
  deletarVisita,
  pegarVisita,
} from "../repository/visitaRepository.js";
import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

import { autenticacao } from "../utils/jwt.js";

endpoint.post("/cadastrar/visita", async (req, resp) => {
  try {
    let registro = await req.body;
    const idCliente = await cadastrarClientesService(registro);

    const idVisita = await cadastrarVisita(registro.visita.data, idCliente);

    return resp.send({
      id: idVisita,
    });
  } catch (error) {}
});

endpoint.get("/visita/:id", autenticacao, async (req, resp) => {
  try {
    let id = req.params.id;
    const consulta = await consultarVisitaId(id);

    resp.send(consulta);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

export default endpoint;
