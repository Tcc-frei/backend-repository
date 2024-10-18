import { deletarOrcamento } from "../repository/orcamentoRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.delete('/orcamento/:id', async (req, resp) => {
    const { id } = req.params;

    try {
        await deletarOrcamento(id)

        return resp.status(204).send()
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }

})