export async function validarCadastroCliente(cliente) {
    if (!cliente.nome) {
        throw new Error("nome é obrigatório");
    }
    if (!cliente.telefone) {
        throw new Error("telefone é obrigatório");
    }
    if (!cliente.cep) {
        throw new Error("cep é obrigatório");
    }
    if (!cliente.bairro) {
        throw new Error("bairro é obrigatório");
    }
    if (!cliente.logradouro) {
        throw new Error("logradouro é obrigatório");
    }
    if (!cliente.numeroCasa) {
        throw new Error("numero da casa é obrigatório");
    }
}