import con from "./connection.js";

export async function criarServicoOrcamento(idOrcamento, idServico) {
  const comando = `INSERT INTO tb_servicos_orcamento (id_orcamento, id_servico)
                        VALUES (?, ?)`;

  const resposta = await con.query(comando, [idOrcamento, idServico]);
  return resposta[0].insertId;
}
