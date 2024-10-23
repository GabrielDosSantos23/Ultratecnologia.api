const express = require('express');
const router = express.Router();
const sql = require('../models/usuario.model');
const sha1 = require('sha1');


//cria a rota para a inserção de usuarios
router.post('/add',(requisicao,resposta)=>{
 let dados = requisicao.body.dados;
 dados.senha = sha1('123456');
 console.log(dados)
 sql.addUsuario(dados).then((retorno)=>{
    console.log(retorno)
    if(retorno instanceof Error){
        resposta.status(500).json(retorno);
        return;
    }
    resposta.status(200).json(retorno);
 })
})






module.exports = router;