export async function validarResposta(resposta) {
    if (!resposta.conteudo) {
        throw new Error("o conteúdo da mensagem está vazio, por favor digite algo")
    }
}
