export async function validarCadastroCliente(cliente) {
  if (!cliente.nome) {
    throw new Error("nome é obrigatório");
  }
  if (!cliente.cpf) {
    throw new Error("cpf é obrigatório");
  }
  if (!cliente.telefone) {
    throw new Error("telefone é obrigatório");
  }
  if (!cliente.email) {
    throw new Error("email é obrigatório");
  }
}
