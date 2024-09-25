import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';
//import bcrypt from 'bcrypt'
//import  JsonWebTokenError  from 'jsonwebtoken';
import adicionarRotas from './rotas.js';

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

adicionarRotas(servidor)


servidor.get('/', (req,resp) =>{
    resp.status(200).send('já foi paizão')
})

servidor.listen(process.env.PORTA, () => console.log(`API subiu na porta ${process.env.PORTA}`))