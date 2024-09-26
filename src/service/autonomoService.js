import { cadastrarAutonomo } from "../repository/autonomoRepository.js";
import validarCadastroAutonomo from "../validation/autonomoValidation.js";

export default async function cadastrarAutonomoService(autonomo) {
    validarCadastroAutonomo(autonomo)
    let id = await cadastrarAutonomo(autonomo)
    return id
}
export async function entradaDoAutonomoService(autonomo){
    let id = []

}