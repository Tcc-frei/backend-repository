import con from "./connection.js";

export async function criarOrcamento(descricao, idVisita) {
  const comando = `INSERT INTO tb_orcamento (ds_orcamento, id_visita)
                                    VALUES (?)`; // tem q enviar o id da visita

  const resposta = await con.query(comando, [descricao, idVisita]);
  return resposta[0].insertId;
}

export async function consultarOrcamentoPorId(id) {
  const comando = ` SELECT * FROM tb_orcamento 
                            JOIN tb_servicos_orcamento ON tb_orcamento.id_orcamento = tb_servicos_orcamento.id_servicos_orcamento
                                    WHERE tb_orcamento.id_orcamento = ?`;

  let resp = await con.query(comando, [id]);
  return resp[0];
}

export async function consultarOrcamento() {
  const comando = ` SELECT * FROM tb_orcamento 
                            JOIN tb_servicos_orcamento ON tb_orcamento.id_orcamento = tb_servicos_orcamento.id_servicos_orcamento`;

  let resp = await con.query(comando);
  return resp[0];
}

export async function deletarOrcamento(id) {
  const comando = `
        delete from tb_orcamento
            where id_orcamento = ?
    `;
  const resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}
