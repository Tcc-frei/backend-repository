import express from 'express';

const app  = express();
app.use(express.json());

import autonomoController from  './controller/autonomoController.js'

export default function adicionarRotas(servidor){
    servidor.use(autonomoController)
}