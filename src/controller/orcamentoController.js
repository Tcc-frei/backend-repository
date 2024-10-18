import {
  consultarOrcamentoPorId,
  criarOrcamento,
  deletarOrcamento,
} from "../repository/orcamentoRepository.js";
import { Router } from "express";
import { criarServicoOrcamento } from "../repository/servicosOrcamentoRepository.js";
const endpoint = Router();

// retornar um orçamento pelo id
endpoint.get("/orcamento/:id", async (req, resp) => {
  try {
    const { id } = req.params;

    const orcamento = await consultarOrcamentoPorId(id);

    return resp.send(orcamento);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

// cadastar orçamento junto com os serviços
endpoint.post("/orcamento/:idVisita", async (req, resp) => {
  try {
    const { idVisita } = req.params;
    const { descricao, arrayServicos } = req.body;

    const idOrcamento = await criarOrcamento(descricao, idVisita);

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

// deletar um orçamento
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
