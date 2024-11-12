import con from "./connection.js";

export async function criarResposta(resposta) {
    const comando= `insert into tb_resposta(id_feedback, ds_conteudo)
    
        values(?,?);
    `
    let resposta = await con.query(comando, [resposta.id_feedback, resposta.conteudo] )
    let info = resposta[0];
    return info.insertId;
}

export async function consultarRespostas() {
    const comando = ` select * from tb_resposta;`

    let resp = await con.query(comando);
    return resp[0]
}

export async function consultarRespostaPorId(id) {
    const comando = `select * from tb_resposta where id_resposta = ?;`

    let resp = await con.query(comando, [id]);
    return resp[0]
}

export async function deletarResposta(id) {
    const comando = `delete from tb_resposta where id_resposta = ?;`

    let resp = await con.query(comando, [id])
    return resp[0]
}

export async function atualizarResposta(resposta, id) {
    const comando = `update tb_feedback set ds_conteudo = ? where id_resposta = ?, 
    `
    let resp = await con.query(comando, [resposta.conteudo, id])
    return resp.affectedRows;
}