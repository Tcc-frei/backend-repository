export async function validarMensagem(feedback) {
    if (!feedback.conteudo) {
        throw new Error("o conteúdo da mensagem está vazio, por favor digite algo")
    }
}