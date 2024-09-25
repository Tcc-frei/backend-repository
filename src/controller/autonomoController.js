import * as db from '../repository/autonomoRepository.js'
import criarSenhaEautonomoService from '../service/adicionarAutonomoService.js'
import con from '../repository/connection.js'
import  Router  from 'express'
const endpoint = Router()

endpoint.post('/elethronos/autonomo', async (req,resp) => {
    try {
        
        let registros = await req.body;
        const idAutonomo = await criarSenhaEautonomoService(registros)

        resp.status(200).send({idAutonomo:idAutonomo})
    } catch (error) {
        resp.status(400).send({ error});
    }

})


export default endpoint