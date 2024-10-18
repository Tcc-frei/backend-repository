import con from "./connection.js";

export async function deletarOrcamento(id) {
    const comando = `
        delete from tb_orcamento
            where id_orcamento = ?
    `
    const resposta = await con.query(comando, [id])
    return resposta[0].affectedRows
}