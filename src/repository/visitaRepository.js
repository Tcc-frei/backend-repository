import con from "./connection.js";

export async function cadastrarVisita(data, idCliente) {
  const comando = ` INSERT INTO tb_visita(dt_visita, id_cliente)
                                    VALUES(?, ?)`;

  let resp = await con.query(comando, [data, idCliente]);
  return resp[0].insertId;
}

export async function deletarVisita(id_visita) {
  const comando = `delete from tb_visita
                            where id_visita = ?`;

  let resp = con.query(comando, [id_visita]);
  return resp[0];
}

export async function consultarVisitas() {
  const comando = `SELECT
                      V.id_visita id,
                      V.ds_status status,
                      V.dt_visita data,
                      C.cep cep,
                      C.bairro bairro,
                      C.logradouro logradouro,
                      C.nome cliente,
                      C.telefone telefone,
                      C.nr_casa casa
                    FROM tb_visita V
                      JOIN tb_cliente C ON V.id_cliente = C.id_cliente`;

  let resp = await con.query(comando);
  return resp[0];
}

export async function consultarVisitaId(id_visita) {
  const comando = `SELECT
                      V.id_visita id,
                      V.ds_status status,
                      V.dt_visita data,
                      C.cep cep,
                      C.bairro bairro,
                      C.logradouro logradouro,
                      C.nome cliente,
                      C.telefone telefone,
                      C.nr_casa casa
                    FROM tb_visita V
                      JOIN tb_cliente C ON V.id_cliente = C.id_cliente
                      WHERE V.id_visita = ?`;

  let resp = await con.query(comando, [id_visita]);
  return resp[0][0];
}
