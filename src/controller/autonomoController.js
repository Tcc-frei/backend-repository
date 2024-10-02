import * as db from "../repository/autonomoRepository.js";
import {
  cadastrarAutonomoService,
  entradaDoAutonomoService,
} from "../service/autonomoService.js";
// import { alterarSenhaDoAutonomo } from '../repository/autonomoRepository.js'
import con from "../repository/connection.js";
import Router from "express";
const endpoint = Router();

endpoint.post("/elethronos/autonomo/cadastro", async (req, resp) => {
  try {
    let registros = await req.body;
    const idAutonomo = await cadastrarAutonomoService(registros);

    resp.status(200).send({ idAutonomo: idAutonomo });
  } catch (error) {
    resp.status(400).send({ error });
  }
});

endpoint.post("/elethronos/autonomo/entrada", async (req, resp) => {
  try {
    const objAutonomo = req.body;

    const admin = await entradaDoAutonomoService(objAutonomo);

    return resp.status(200).send(admin);
  } catch (error) {
    return resp.status(400).send({ erro: error.message });
  }
});

// endpoint.put('elethronos/:id', async  (req, resp) => {
//     try {
//         let id = req.body.id
//         let autonomo = req.body
//         let linhasAfetadas = await db.alterarSenhaDoAutonomo(id,autonomo)
//         if (linhasAfetadas >= 1) {
//             resp.status(200).send()
//         }
//     } catch (error) {
//         resp.status(400).send({ error });
//     }

// })

export default endpoint;
