import con from "./connection.js";

export async function criarServicoOrcamento(idOrcamento, idServico) {
  const comando = `INSERT INTO tb_servicos_orcamento (id_orcamento, id_servico)
                        VALUES (?, ?)`;

  const resposta = await con.query(comando, [idOrcamento, idServico]);
  return resposta[0].insertId;
}

export async function consultarServicosOrcamento(idOrcamento) {
  const comando = `SELECT 
                    S.nm_servico "serviço"
                  FROM tb_servicos_orcamento SO
                    JOIN tb_orcamento O ON SO.id_orcamento = O.id_orcamento
                    JOIN tb_servico S ON SO.id_servico = S.id_servico
                  WHERE O.id_orcamento = ?`;

  const resposta = await con.query(comando, [idOrcamento]);
  return resposta[0];
}
