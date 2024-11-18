import {
  criarMensagem,
  consultarMensagens,
  consultarMensagemPorId,
  deletarMensagem,
  atualizarMensagem,
} from "../repository/feedbackRepository.js";
import { validarMensagem } from "../validation/feedbackValidation.js";

export async function criarMensagemService(id_autonomo, feedback) {
  validarMensagem(feedback);
  let id = criarMensagem(id_autonomo, feedback);
  return id;
}

export async function consultarMensagensService(feedback) {
  const registros = await consultarMensagens(feedback);
  return registros;
}

export async function consultarMensagemPorIdService(id) {
  if (!id) throw new Error("Parâmetro ID é obrigatorio.");

  const mensagem = await consultarMensagemPorId(id);
  return mensagem;
}

export async function deletarMensagemService(id) {
  const deletar = await deletarMensagem(id);
  if (!deletar) throw new Error(`parametro id ${id} não encontrado `);
  return deletar;
}

export async function atualizarMensagemService(feedback, id) {
  let linhasAfetadas = await atualizarMensagem(feedback, id);
  if (!linhasAfetadas) throw new Error(`parametro id ${id} não encontrado `);
  return linhasAfetadas;
}
