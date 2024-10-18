import con from "./connection.js";

export async function cadastrarVisita(visita){
    const comando = ` INSERT INTO tb_visita(dt_visita, id_cliente)
                                    VALUES(?, ?)`

    let resp = await con.query(comando, [visita.data, visita.cliente])
    return resp[0].insertId
}


export async function deletarVisita(id_visita){
    const comando = ` DELETE * FROM tb_visita
                            WHERE id_visita = ?`

    let resp = con.query(comando,[id_visita])
    return resp[0] 
}

export async function pegarVisita(id_visita){
    const comando = `SELECT * FROM tb_visita
                            WHERE id_visita = ?`

    let resp = con.query(comando, [id_visita])
    return resp[0]
}