import { criarMensagem } from "../repository/feedbackRepository.js";
import { validarMensagem } from "../validation/feedbackValidation.js";

export async function criarMensagemService(feedback) {
    validarMensagem(feedback)   
    let id = criarMensagem(feedback)
    return id
}