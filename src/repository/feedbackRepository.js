import con  from "./connection.js";

export async function criarMensagem(feedback) {
    const comando= `insert into tb_feedback(id_autonomo, ds_conteudo)
    
        values(?,?);
    `
    let resposta = await con.query(comando, [feedback.id_autonomo, feedback.conteudo] )
    let info = resposta[0];
    return info.insertId;
}

export async function consultarMensagens() {
    const comando = ` select * from tb_feedback;`

    let resp = await con.query(comando);
    return resp[0]
}

export async function consultarMensagemPorId(id_visita) {
    const comando = `select * from tb_feedback where id_feedback = ?;`

    let resp = await con.query(comando, [id_visita]);
    return resp[0]
}

export async function deletarMensagem(id_feedback) {
    const comando = `delete from tb_feedback where id_feedback = ?;`

    let resp = await con.query(comando, [id_feedback])
    return resp[0]
}

export async function atualizarMensagem(feedback, id) {
    const comando = `update tb_feedback set ds_conteudo = ? where id_feedback = ?
    `
    let resp = await con.query(comando, [feedback.conteudo, id])
    return resp.affectedRows
}