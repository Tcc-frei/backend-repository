import { criarResposta,consultarRespostas, consultarRespostaPorId, deletarResposta, atualizarResposta  } from "../repository/respostaRepository.js";
import { validarResposta } from "../validation/respostasValidation.js";

export async function criarRespostaService(resposta) {
    validarResposta(resposta)   
    let id = criarResposta(resposta)
    return id
}

export async function consultarRespostasService(resposta) {
    
    const registros = await consultarRespostas(resposta)
    return registros
}

export async function consultarRespostaPorIdService(id) {
    if (!id) throw new Error("Parâmetro ID é obrigatorio.");

    const mensagem = await consultarRespostaPorId(id)
    return mensagem;
}

export async function deletarRespostaService(id) {
    
    const deletar = await deletarResposta(id)
    if (!deletar)throw new Error(`parametro id ${id} não encontrado `)
    return deletar
}

export async function atualizarRespostaService(resposta, id) {
    
    let linhasAfetadas = await atualizarMensagem(resposta, id)
    if(!linhasAfetadas)throw new Error(`parametro id ${id} não encontrado `)
    return linhasAfetadas
}