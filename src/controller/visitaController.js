import { Router } from "express";

import {
  cadastrarVisita,
  consultarVisitaId,
  deletarVisita,
} from "../repository/visitaRepository.js";
import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

import {
  consultarVisitasService,
  deletarVisitaService,
} from "../service/visitaService.js";

endpoint.post("/cadastrar/visita", async (req, resp) => {
  try {
    let registro = req.body;

    const idCliente = await cadastrarClientesService(registro.cliente);

    const idVisita = await cadastrarVisita(registro.visita.data, idCliente);

    return resp.send({
      id: idVisita,
    });
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

endpoint.get("/visitas", async (req, resp) => {
  try {
    const visitas = await consultarVisitasService();

    return resp.send(visitas);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

endpoint.get("/visita/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const consulta = await consultarVisitaId(id);

    resp.send(consulta);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

endpoint.delete("/visita/:id", async (req, resp) => {
  try {
    const { id } = req.params;

    await deletarVisitaService(id);

    return resp.status(204).send();
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

export default endpoint;
