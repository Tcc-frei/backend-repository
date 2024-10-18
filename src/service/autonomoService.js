import { cadastrarAutonomo, entrar } from "../repository/autonomoRepository.js";
import {
  validarCadastroAutonomo,
  validarEntrada
} from "../validation/autonomoValidation.js";

export async function cadastrarAutonomoService(autonomo) {
  validarCadastroAutonomo(autonomo);
  let id = await cadastrarAutonomo(autonomo);
  return id;
}

export async function validarAutonomoService(autonomo) {
  validarEntrada(autonomo);

  const registros = await entrar(autonomo);

  if (!registros) throw new Error("Email ou senha inválidos !");

  return registros;
}
