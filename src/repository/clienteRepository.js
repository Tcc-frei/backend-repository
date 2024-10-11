import con from "./connection.js";

export async function cadastrarCliente(cliente) {
    const comando = `
        insert into tb_cliente(nome, cpf, telefone, email)    
        
        values (?,?,?,?); 
    `
    let resposta = await con.query(comando, [cliente.nome, cliente.cpf, cliente.telefone, cliente.email]);
    let info  = resposta[0];
    return info.insertId
}