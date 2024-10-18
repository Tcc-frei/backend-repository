import { criarServico } from "../repository/servicoRepository.js";
import { validarBodyServico } from "../validation/servicoValidate.js";

export async function criarServicoService(servico) {
  validarBodyServico(servico);

  const idServico = await criarServico(servico);

  return idServico;
}
