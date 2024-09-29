import { cadastrarAutonomo, entradaDoAutonomo } from "../repository/autonomoRepository.js";
import {validarCadastroAutonomo, validarEntradaAutonomo} from "../validation/autonomoValidation.js";

export async function cadastrarAutonomoService(autonomo) {
    validarCadastroAutonomo(autonomo)
    let id = await cadastrarAutonomo(autonomo)
    return id
}
export async function entradaDoAutonomoService(id){
    if(!id){
        id = ``
    }
    let autonomo = await validarEntradaAutonomo(id)
    return autonomo 
}