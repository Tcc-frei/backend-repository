import con from "./connection.js";

export async function cadastrarCliente(cliente) {
  const comando = `
        insert into tb_cliente(nome, telefone, cep, bairro, logradouro, nr_casa)    
        
        values (?,?,?,?,?,?); 
    `;
  let resposta = await con.query(comando, [
    cliente.nome,
    cliente.telefone,
    cliente.cep,
    cliente.bairro,
    cliente.logradouro,
    cliente.numeroCasa,
  ]);

  return resposta[0].insertId;
}
