import con from "./connection.js";

export async function criarServico(servico) {
  const comando = `insert into tb_servico (nm_servico, vl_servico)
                        values (?, ?)`;

  let resposta = await con.query(comando, [servico.nome, servico.preco]);

  return resposta[0].insertId;
}
