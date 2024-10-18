import { Router } from "express";

import { cadastrarVisita, deletarVisita, pegarVisita } from "../repository/visitaRepository";
import { cadastrarClientesService } from "../service/clienteService.js";

const endpoint = Router()

endpoint.post("/cadastrar/visita", async (req, resp) => {
    try {
        let registro = await req.body
        const idCliente  = await cadastrarClientesService(registro);
        let enviar = cadastrarVisita(registro)
        

        resp.send({
            idCliente:idCliente,
            enviar:enviar
        })

    } catch (error) {
        
    }
})


export default endpoint