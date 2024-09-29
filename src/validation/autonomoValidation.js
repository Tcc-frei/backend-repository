

export function validarCadastroAutonomo(autonomo) {
    if (!autonomo.email) {
        throw new Error('email é obrigatório')
    }
    if (!autonomo.senha) {
        throw new Error('senha é obrigatória')
    }
}

export async function validarEntradaAutonomo(autonomo) {
    if (!autonomo.email) {
        throw new Error('email inválido')
    }
    if (!autonomo.senha) {
        throw new Error('senha inválida')
    }
}