import Router from "express";
import { gerarTokenJwt } from "../utils/jwt.js";
import { validarAutonomoService } from "../service/autonomoService.js";

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

export default endpoint;
