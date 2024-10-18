import { Router } from "express";
import { criarServicoService } from "../service/servicoService.js";

const endpoints = Router();

endpoints.post("/servico", async (req, resp) => {
  try {
    const servico = req.body;

    const id = await criarServicoService(servico);

    return resp.send({
      id: id,
    });
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

export default endpoints;
