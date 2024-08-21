const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const slugify = require('slugify');

router.use(bodyParser.urlencoded({extended:true}));

router.get("/produtos", (req,res)=>{
    res.render("produtos/listaProdutos");
})

module.exports = router;