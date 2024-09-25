import con from "./connection.js";

export async function criarSenhaEautonomo(autonomo) {
    const comando = `
    insert into tb_autonomo(email, senha)
        values(?, ?);
    `

    let resposta = await con.query(comando, [autonomo.email, autonomo.senha])
    let info = resposta[0]
    return info.insertId
}

export async function alterarSenhaDoAutonomo(autonomo) {
    const comando = `
    update  tb_autonomo
        set 
            senha = ?
    where id = ?    
    ` // isso foi uma tentativa de fazer uma alteração de senha para o autonomo, "funciona" porém da para melhorar

    
}