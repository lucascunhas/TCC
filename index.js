const express = require('express');
const app = express();
const conexao = require('./database/db');
const session = require('express-session')

const ControleAgendamento = require('./ControllerAgendeaqui/controleAgendamento');
const ControleProdutos = require('./ControllerProdutos/controleProdutos');
const ControleCliente = require('./ControllerCliente/controleCliente');

app.use("/", ControleCliente)
app.use("/", ControleAgendamento)
app.use("/", ControleProdutos)

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

app.use(session({
    secret:"qualquercoisa",
    resave: false,
    saveUninitialized:false,
    cookie:{maxAge:20000}
}))

app.get("/teste/sessao",(req,res)=>{
    req.session.txt = "teste";
    req.session.cliente = {
        nome: "Joao da Silva",
        senha: "123"
    }
    res.send("gerado")
})

app.listen(3000,()=>{
    console.log("SERVIDOR RODANDO");
})
