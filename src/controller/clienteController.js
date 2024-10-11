import * as db from "../repository/clienteRepository.js";
import Router from "express";

import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router();

endpoint.post("/elethronos/cadastrar/cliente", async  (req, resp) => {
    try {
        let registros = await req.body;
        const idCliente  = await cadastrarClientesService(registros);

        resp.status(200).send({idCliente: idCliente})
    } catch (error) {
        resp.status(400).send({ error });
    }

})
