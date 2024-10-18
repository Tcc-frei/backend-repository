import { Router } from "express";

import {
  cadastrarVisita,
  consultarVisitaId,
  deletarVisita,
  pegarVisita,
} from "../repository/visitaRepository.js";
import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

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

endpoint.get("/visita/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    const consulta = await consultarVisitaId(id);

    resp.send(consulta);
  } catch (error) {}
});

export default endpoint;
