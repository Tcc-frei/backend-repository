import { cadastrarCliente } from "../repository/clienteRepository.js";
import { validarCadastroCliente } from "../validation/clienteValidation.js";

export async function cadastrarClientesService(cliente) {
  validarCadastroCliente(cliente);

  let id = await cadastrarCliente(cliente);
  return id;
}
