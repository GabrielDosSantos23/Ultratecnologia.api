const express = require ('express');
const router = express.Router();
const sql = require('../models/autenticacao.model');
//injeta as funções de criptografia do sha1
const sha1 = require('sha1');
router.post('/autenticar',(req,res)=>{
    let requisicao = req.body;
requisicao.senha = sha1(requisicao.senha);
console.log(requisicao)
sql.autenticaUsuario(req.body.login,req.body.senha)
.then((resposta)=>{
    console.log(resposta)
    if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
    }
    // if(resposta.lenght != 1){
    //     res.status(401).json({mensagem:'usuário não autorizado'})
    //     return;
    // }
    res.status(200).json(resposta);
})
})
router.post('/geraSenhaCripto',(req,res)=>{let senha = req.body.senha;
    if(!senha ||senha == ``){res.status(400).json({mensagem:'senha vazio'})
    return;
    }
senha = sha1(senha);
res.status(201).json({senha})
})







module.exports = router;