import Router from "express";

import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

endpoint.post("/cliente", async (req, resp) => {
  try {
    const cliente = await req.body;

    const idCliente = await cadastrarClientesService(cliente);

    return resp.status(200).send({ idCliente: idCliente });
  } catch (error) {
    resp.status(400).send({ error });
  }
});

export default endpoint;
