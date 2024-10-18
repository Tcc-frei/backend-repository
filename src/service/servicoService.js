import { criarServico } from "../repository/servicoRepository";
import { validarBodyServico } from "../validation/servicoValidate";

export async function criarServicoService(servico) {
  validarBodyServico(servico);

  const idServico = await criarServico(servico);

  return idServico;
}
