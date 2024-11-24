import { Router } from "express";

import { respostaEmailTemplate } from "../utils/emailTemplate.js";
import { transporter } from "../utils/email.js";

import {
  criarRespostaService,
  consultarRespostasService,
  consultarRespostaPorIdService,
  deletarRespostaService,
  atualizarRespostaService,
} from "../service/respostaService.js";

const endpoint = Router();

endpoint.post("/resposta/:id_feedback", async (req, resp) => {
  try {
    const resposta = req.body;
    const { id_feedback } = req.params;

    const idMensagem = await criarRespostaService(id_feedback, resposta);

    const info = await transporter.sendMail({
      from: "infosolutions@gmail.com",
      to: "rodrygo@gmail.com",
      subject: "Resposta ao seu feedback ✔",
      text: "Hello world?",
      html: respostaEmailTemplate(resposta.conteudo),
    });

    if (!info.accepted) {
      throw new Error("Ocorreu um erro ao enviar o e-mail.");
    }

    return resp.status(200).send({ idMensagem: idMensagem });
  } catch (error) {
    resp.status(400).send({ erro: error.message });
  }
});

endpoint.get("/resposta", async (req, resp) => {
  try {
    let nome = req.query.nome;

    const mensagens = await consultarRespostasService(nome);

    resp.status(200).send(mensagens);
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.get("/resposta/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let resposta = await consultarRespostaPorIdService(id);

    resp.status(200).send(resposta);
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.put("resposta/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let resposta = await req.body;

    let resultado = await atualizarRespostaService(id, resposta);

    resp.status(204).send({ resultado: resultado });
  } catch (error) {
    resp.status(400).send(error);
  }
});

endpoint.delete("/resposta/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    await deletarRespostaService(id);
    resp.status(204).send();
  } catch (error) {
    resp.status(400).send(error);
  }
});

export default endpoint;
