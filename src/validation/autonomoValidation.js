export default function validarAutonomo(autonomo) {
    if (!autonomo.email) {
        throw new Error('email é obrigatório')
    }
    if (!autonomo.senha) {
        throw new Error('senha é obrigatória')
    }
}