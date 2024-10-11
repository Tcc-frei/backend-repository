import { cadastrarCliente } from "../repository/clienteRepository.js";
import { ValidarCadastroCliente } from "../validation/clienteValidation.js";


export async function cadastrarClientesService(cliente) {
    ValidarCadastroCliente(cliente)
    let id = cadastrarCliente(cliente)    
    return id
}