import { cadastrarAutonomo, entrar } from "../repository/autonomoRepository.js";
import {
  validarCadastroAutonomo,
  validarEntradaAutonomo,
} from "../validation/autonomoValidation.js";

export async function cadastrarAutonomoService(autonomo) {
  validarCadastroAutonomo(autonomo);
  let id = await cadastrarAutonomo(autonomo);
  return id;
}

export async function validarAutonomoService(autonomo) {
  validarEntradaAutonomo(autonomo);

  const registros = await entrar(autonomo);

  if (!registros) throw new Error("Email ou senha inválidos !");

  return registros;
}
