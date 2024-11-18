import { Router } from "express";

import {
  criarMensagemService,
  consultarMensagemPorIdService,
  deletarMensagemService,
  consultarMensagensService,
  atualizarMensagemService,
} from "../service/feedbackService.js";

import { autenticacao } from "../utils/jwt.js";

const endpoint = Router();

endpoint.post("/feedback", autenticacao, async (req, resp) => {
  try {
    const feedback = await req.body;
    const { id } = req.user; // id do autonomo que esta logado.

    const idMensagem = await criarMensagemService(id, feedback);

    return resp.status(201).send({ idMensagem: idMensagem });
  } catch (error) {
    resp.status(400).send({ error });
  }
});

endpoint.get("/feedback", async (req, resp) => {
  try {
    let nome = req.query.nome;

    const mensagens = await consultarMensagensService(nome);

    resp.status(200).send(mensagens);
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.get("/feedback/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let feedback = await consultarMensagemPorIdService(id);

    resp.status(200).send(feedback);
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.put("feedback/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let feedback = await req.body;

    let resposta = await atualizarMensagemService(id, feedback);

    resp.status(204).send({ resposta: resposta });
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.delete("/feedback/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    await deletarMensagemService(id);
    resp.status(204).send();
  } catch (error) {
    resp.status(400).send(error);
  }
});

export default endpoint;
