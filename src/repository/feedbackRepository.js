import con from "./connection.js";

export async function criarMensagem(id_autonomo, feedback) {
  const comando = `INSERT INTO tb_feedback(id_autonomo, ds_conteudo)
                        VALUES (?,?);
    `;

  const resposta = await con.query(comando, [id_autonomo, feedback.conteudo]);

  const info = resposta[0];
  return info.insertId;
}

export async function consultarMensagens() {
  const comando = `SELECT 
	                  F.id_feedback			"id",
                    F.ds_conteudo			"conteudo",
                    F.dt_feedback			"data",
                    A.email						"email"
                  FROM tb_feedback F
                  JOIN tb_autonomo A ON F.id_autonomo = A.id_autonomo`;

  let resp = await con.query(comando);
  return resp[0];
}

export async function consultarMensagemPorId(id) {
  const comando = `SELECT 
                    F.id_feedback			"id",
                    F.ds_conteudo			"conteudo",
                    R.ds_conteudo			"resposta",
                    R.id_resposta			"id_resposta",
                    F.dt_feedback			"data",
                    A.email						"autonomo" 
                  FROM tb_feedback F
                    LEFT JOIN tb_resposta R ON F.id_feedback = R.id_feedback
                    JOIN tb_autonomo A ON F.id_autonomo = A.id_autonomo
			            WHERE F.id_feedback = ?`;

  let resp = await con.query(comando, [id]);
  return resp[0][0];
}

export async function deletarMensagem(id) {
  const comando = `delete from tb_feedback where id_feedback = ?;`;

  let resp = await con.query(comando, [id]);
  return resp[0];
}

export async function atualizarMensagem(feedback, id) {
  const comando = `update tb_feedback set ds_conteudo = ? where id_feedback = ?, 
    `;
  let resp = await con.query(comando, [feedback.conteudo, id]);
  return resp.affectedRows;
}
