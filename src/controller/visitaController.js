import { Router } from "express";

import {
  cadastrarVisita,
  deletarVisita,
  pegarVisita,
} from "../repository/visitaRepository.js";
import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

endpoint.post("/cadastrar/visita", async (req, resp) => {
  try {
    let registro = await req.body;

    const idCliente = await cadastrarClientesService(registro);

    const enviar = await cadastrarVisita(registro, idCliente);

    resp.send({
      idCliente: idCliente,
      enviar: enviar,
    });
  } catch (error) {}
});

endpoint.get("/buscar/rotas/:id", async (req, resp) => {
  try {
    let registro = req.params.id;
    const consulta = await pegarVisita(registro);

    resp.send({
      cliente: consulta,
    });
  } catch (error) {}
});

export default endpoint;
