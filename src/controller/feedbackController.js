import { Router } from "express";

import { criarMensagemService } from "../service/feedbackService.js";

const endpoint = Router();

endpoint.post("/feedback", async (req, resp) => {
    try {
        const feedback = await req.body;

        const idMensagem = await criarMensagemService(feedback)

        return resp.status(200).send({ idMensagem: idMensagem });

    } catch (error) {
        resp.status(400).send({ error });
    }
})

export default endpoint;