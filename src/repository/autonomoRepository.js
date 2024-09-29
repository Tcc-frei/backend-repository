import con from "./connection.js";

export async function cadastrarAutonomo(autonomo) {
    const comando = `
    insert into tb_autonomo(email, senha)
        values(?, ?);
    `

    let resposta = await con.query(comando, [autonomo.email, autonomo.senha])
    let info = resposta[0]
    return info.id
}

export async function entradaDoAutonomo(id){
    const comando = `
    select 
        id,
        email
    from tb_autonomo
    where email = ? and senha = ?
    `
    let resposta = await con.query(comando, [id.email, id.senha])
    return resposta[0]
    
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