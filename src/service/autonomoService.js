import {
  cadastrarAutonomo,
  entradaDoAutonomo,
} from "../repository/autonomoRepository.js";
import {
  validarCadastroAutonomo,
  validarEntradaAutonomo,
} from "../validation/autonomoValidation.js";

export async function cadastrarAutonomoService(autonomo) {
  validarCadastroAutonomo(autonomo);
  let id = await cadastrarAutonomo(autonomo);
  return id;
}

export async function entradaDoAutonomoService(autonomo) {
  validarEntradaAutonomo(autonomo);
  //   if (!id) {
  //     id = ``;
  //   }
  //   let autonomo = await validarEntradaAutonomo(id);
  //   return autonomo;
  const registros = await entradaDoAutonomo(autonomo);

  if (registros.length <= 0) throw new Error("E-mail ou senha inválidos !");

  return registros[0];
}
