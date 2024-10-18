import con from "./connection.js";

export async function criarOrcamento(descricao) {
  const comando = `INSERT INTO tb_orcamento (ds_orcamento)
                                    VALUES (?)`; // tem q enviar o id da visita

  const resposta = await con.query(comando, [descricao]);
  return resposta[0].insertId;
}

export async function deletarOrcamento(id) {
  const comando = `
        delete from tb_orcamento
            where id_orcamento = ?
    `;
  const resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}
