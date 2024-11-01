import { atualizarStatusOrcamento } from "../repository/orcamentoRepository.js";

export async function atualizarStatusOrcamentoService(status, id) {
  if (!id) throw new Error("Parâmetro ID é obrigatorio.");

  const resposta = await atualizarStatusOrcamento(status, id);

  return resposta;
}
