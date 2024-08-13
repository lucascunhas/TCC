const express = require('express');
const app = express();
const conexao = require('./database/db');

conexao.authenticate().then(()=>{
    console.log("CONECTADO COM O BANCO");
}).catch((erroMsg)=>{
    console.log(erroMsg);
})

app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.render("novo")
})

app.listen(3000,()=>{
    console.log("SERVIDOR RODANDO");
})
