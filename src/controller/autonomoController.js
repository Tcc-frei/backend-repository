import Router from "express";
import { autenticacao, gerarTokenJwt } from "../utils/jwt.js";
import {
  validarAutonomoService,
  verificarAutonomoService,
} from "../service/autonomoService.js";

const endpoint = Router();

endpoint.post("/elethronos/entrar", async (req, resp) => {
  try {
    const autonomo = req.body;

    const admin = await validarAutonomoService(autonomo);

    const token = gerarTokenJwt(admin);

    return resp.send({
      token: token,
    });
  } catch (error) {
    return resp.status(400).send({ erro: error.message });
  }
});

endpoint.get("/elethronos/validar", autenticacao, async (req, resp) => {
  try {
    const { id } = req.user;

    await verificarAutonomoService(id);

    return resp.status(204).send();
  } catch (error) {
    return resp.status(400).send({
      erro: error.message,
    });
  }
});

export default endpoint;
