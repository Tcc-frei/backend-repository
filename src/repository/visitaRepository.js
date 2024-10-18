import con from "./connection.js";

export async function cadastrarVisita(data, idCliente) {
  const comando = ` INSERT INTO tb_visita(dt_visita, id_cliente)
                                    VALUES(?, ?)`;

  let resp = await con.query(comando, [data, idCliente]);
  return resp[0].insertId;
}

export async function deletarVisita(id_visita) {
  const comando = ` DELETE * FROM tb_visita
                            WHERE id_visita = ?`;

  let resp = con.query(comando, [id_visita]);
  return resp[0];
}

export async function consultarVisitas() {
  const comando = `SELECT * FROM tb_visita
                            JOIN tb_cliente ON tb_visita.id_cliente = tb_cliente.id_cliente`;

  let resp = await con.query(comando);
  return resp[0];
}

export async function consultarVisitaId(id_visita) {
  const comando = `SELECT * FROM tb_visita
                            JOIN tb_cliente ON tb_visita.id_cliente = tb_cliente.id_cliente
                            WHERE id_visita = ?`;

  let resp = await con.query(comando, [id_visita]);
  return resp[0];
}
