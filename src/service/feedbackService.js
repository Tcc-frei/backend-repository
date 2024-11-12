import { criarMensagem, consultarMensagens, consultarMensagemPorId, deletarMensagem, atualizarMensagem } from "../repository/feedbackRepository.js";
import { validarMensagem } from "../validation/feedbackValidation.js";

export async function criarMensagemService(feedback) {
    validarMensagem(feedback)   
    let id = criarMensagem(feedback)
    return id
}

export async function consultarMensagensService(feedback) {
    
    const registros = await consultarMensagens(feedback)
    return registros
}

export async function consultarMensagemPorIdService(feedback, id) {
    if (!id) throw new Error("Parâmetro ID é obrigatorio.");

    const mensagem = await consultarMensagemPorId(feedback, id)
    return mensagem;
}

export async function deletarMensagemService(id) {
    
    const deletar = await deletarMensagem(id)
    if (!deletar)throw new Error(`parametro id ${id} não encontrado `)
    return deletar
}

export async function atualizarMensagemService(feedback, id) {
    
    let linhasAfetadas = await atualizarMensagem(feedback)
    if(!linhasAfetadas)throw new Error(`parametro id ${id} não encontrado `)
    return linhasAfetadas
}