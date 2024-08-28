const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const Cliente = require('./Cliente');

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/novocliente", (req, res) =>{
     res.render("clientes/cadastracliente")
})

router.post("/cliente/addsenha",(req,res)=>{
    let email = req.body.email;
    let nome = req.body.nome;
    Cliente.findOne({
         where:{email:email}
    }).then((cliente)=>{
         if(cliente == undefined){
              let senha = req.body.senha;
              let criahash = bcrypt.genSaltSync(10);
              let hash = bcrypt.hashSync(senha,criahash);
              Cliente.create({
                   nome:nome,
                   email:email,
                   senha:hash,
              }).then(()=>{
                   res.render("clientes/cadastracliente")
              })
         } else {
              res.redirect("/")
         }
    })
})

router.post("/cliente/logincliente", (req,res) =>{
    let email = req.body.email;
    let senha = req.body.senha;
    Cliente.findOne({
         where: {
              email:email
         }
    }).then((cliente) => {
         if(cliente != undefined) {
              let correta = bcrypt.compareSync(senha, cliente.senha)
              if(correta){
                   req.session.cliente = {
                        id: cliente.id,
                        email: cliente.email
                   }
                   res.redirect("/");
              } else{
                   res.redirect("/logincliente");
              }
         } else{
              res.redirect("/logincliente");
         }
    })
})

router.get("/logincliente",(req,res)=>{
    res.render("clientes/logincliente")
})

router.get("/logout",(req,res)=>{
    req.session.usuario = undefined/
    res.redirect("/")
}) 

module.exports = router