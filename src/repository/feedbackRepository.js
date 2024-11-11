import con  from "./connection.js";

export async function criarMensagem(feedback) {
    const comando= `insert into tb_feedback(id_autonomo, ds_conteudo)
    
        values(?,?);
    `
    let resposta = await con.query(comando, [feedback.id_autonomo, feedback.conteudo] )
    let info = resposta[0];
    return info.insertId;
}
