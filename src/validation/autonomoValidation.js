export function validarCadastroAutonomo(autonomo) {
  if (!autonomo.email) {
    throw new Error("email é obrigatório");
  }
  if (!autonomo.senha) {
    throw new Error("senha é obrigatória");
  }
}

export function validarEntrada(autonomo) {
  if (!autonomo.email) {
    throw new Error("Email é obrigatório");
  }
  if (!autonomo.senha) {
    throw new Error("Senha é obrigatória");
  }
}
