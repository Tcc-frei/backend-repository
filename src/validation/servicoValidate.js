export function validarBodyServico(servico) {
  if (!servico.nome) throw new Error("Nome é obrigátorio");

  if (!servico.preco) throw new Error("Preço é obrigátorio");
}
