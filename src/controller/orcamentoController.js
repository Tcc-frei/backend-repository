import {
  atualizarTotalOrcamento,
  consultarOrcamentoPorId,
  consultarOrcamentos,
  criarOrcamento,
  deletarOrcamento,
} from "../repository/orcamentoRepository.js";
import { Router } from "express";
import {
  consultarServicosOrcamento,
  criarServicoOrcamento,
} from "../repository/servicosOrcamentoRepository.js";
const endpoint = Router();

// retorna todos os orçamentos
endpoint.get("/orcamentos", async (req, resp) => {
  try {
    const orcamentos = await consultarOrcamentos();

    return resp.send(orcamentos);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

// retornar um orçamento pelo id
endpoint.get("/orcamento/:id", async (req, resp) => {
  try {
    const { id } = req.params;

    const orcamento = await consultarOrcamentoPorId(id);
    const servicos = await consultarServicosOrcamento(id);

    return resp.send({
      orcamento,
      servicos: servicos.map((s) => s.serviço),
    });
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
      arrayServicos.map(async (id) => {
        await criarServicoOrcamento(idOrcamento, id);
      })
    );

    await atualizarTotalOrcamento(idOrcamento);

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
