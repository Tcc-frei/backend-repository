import { criarSenhaEautonomo } from "../repository/autonomoRepository.js";
import validarAutonomo from "../validation/autonomoValidation.js";

export default async function criarSenhaEautonomoService(autonomo) {
    validarAutonomo(autonomo)
    let id = await criarSenhaEautonomo(autonomo)
    return id
}