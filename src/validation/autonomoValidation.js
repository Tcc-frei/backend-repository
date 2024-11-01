export function validarCadastroAutonomo(autonomo) {
  if (!autonomo.email) {
    throw new Error("E-mail é obrigatório!");
  }
  if (!autonomo.senha) {
    throw new Error("Senha é obrigatória");
  }
}

export function validarEntrada(autonomo) {
  if (!autonomo.email) {
    throw new Error("E-mail é obrigatório!");
  }
  if (!autonomo.senha) {
    throw new Error("Senha é obrigatória");
  }
}
