import con from "./connection.js";

export async function criarOrcamento(descricao, idVisita) {
  const comando = `INSERT INTO tb_orcamento (ds_orcamento, id_visita)
                                    VALUES (?, ?)`; // tem q enviar o id da visita

  const resposta = await con.query(comando, [descricao, idVisita]);
  return resposta[0].insertId;
}

export async function consultarOrcamentoPorId(id) {
  const comando = `SELECT
                    O.id_orcamento id,
                    O.ds_status status,
                    ds_orcamento descricao,
                    C.nome cliente,
                    dt_criado data,
                    vl_orcamento total
                   FROM tb_orcamento O
                    JOIN tb_visita V ON O.id_visita = V.id_visita
                    JOIN tb_cliente C ON V.id_cliente = C.id_cliente
                   WHERE O.id_orcamento = ?`;

  let resp = await con.query(comando, [id]);
  return resp[0][0];
}

export async function consultarOrcamentos() {
  const comando = `SELECT
                     O.id_orcamento id,
                     O.dt_criado data,
                     O.ds_status status,
                     O.ds_orcamento "descricao",
                     C.nome "cliente"
                   FROM tb_orcamento O
                    JOIN tb_visita V ON O.id_visita = V.id_visita
                    JOIN tb_cliente C ON V.id_cliente = C.id_cliente;`;

  const resp = await con.query(comando);
  return resp[0];
}

export async function atualizarTotalOrcamento(id) {
  const comando = `UPDATE tb_orcamento O
                    JOIN (
                        SELECT SO.id_orcamento, SUM(S.vl_servico) as valorTotal
                        FROM
                            tb_servicos_orcamento SO
                            JOIN tb_servico S ON S.id_servico = SO.id_servico
                        GROUP BY
                            SO.id_orcamento
                    ) AS total ON O.id_orcamento = total.id_orcamento
                SET O.vl_orcamento = total.valorTotal
                WHERE O.id_orcamento = ?`;

  const resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}

export async function atualizarStatusOrcamento(id){
  const comando = `UPDATE tb_orcamento
                      SET ds_status = "aprovado"
                        WHERE id_orcamento = ?`;

  const resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}

export async function deletarOrcamento(id) {
  const comando = `
        delete from tb_orcamento
            where id_orcamento = ?
    `;
  const resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}
