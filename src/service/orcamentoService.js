import { atualizarStatusOrcamento } from '../repository/orcamentoRepository.js'

export async function atualizarStatusOrcamentoService(id){
    if (!id) throw new Error("Parâmetro ID é obrigatorio.")

    const resposta = await atualizarStatusOrcamento(id);

    return resposta;
}