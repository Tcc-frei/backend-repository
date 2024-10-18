import {
  criarOrcamento,
  deletarOrcamento,
} from "../repository/orcamentoRepository.js";
import { Router } from "express";
import { criarServicoOrcamento } from "../repository/servicosOrcamentoRepository.js";
const endpoint = Router();

endpoint.post("/orcamento", async (req, resp) => {
  try {
    const { descricao, arrayServicos } = req.body;

    const idOrcamento = await criarOrcamento(descricao);

    await Promise.all(
      arrayServicos.map((id) => {
        return criarServicoOrcamento(idOrcamento, id);
      })
    );

    return resp.status(201).send();
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

endpoint.delete("/orcamento/:id", async (req, resp) => {
  const { id } = req.params;

  try {
    await deletarOrcamento(id);

    return resp.status(204).send();
  } catch (error) {
    resp.status(400).send({
      erro: error.message,
    });
  }
});

export default endpoint;
