import con from "./connection.js";

export async function cadastrarAutonomo(autonomo) {
  const comando = `
    insert into tb_autonomo(email, senha)
        values(?, ?);
    `;

  let resposta = await con.query(comando, [autonomo.email, autonomo.senha]);
  let info = resposta[0];
  return info.insertId;
}

export async function entrar(autonomo) {
  const comando = `SELECT id_autonomo id,
                          email
                          FROM tb_autonomo
                            WHERE email = ? and senha = ?`;

  const resposta = await con.query(comando, [autonomo.email, autonomo.senha]);
  return resposta[0][0];
}

// export async function alterarSenhaDoAutonomo(autonomo) {
//     const comando = `
//     update  tb_autonomo
//         set
//             senha = ?
//     where id = ?
//     `
//     let resposta = await con.query(comando, [autonomo.senha])
//     let info = resposta[0]
//     return info.affectedRows

//      // isso foi uma tentativa de fazer uma alteração de senha para o autonomo, "funciona" porém da para melhorar

// }
