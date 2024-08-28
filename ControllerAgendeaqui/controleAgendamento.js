const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const slugify = require('slugify');

router.use(bodyParser.urlencoded({extended:true}));

router.get("/agendeaqui", (req,res)=>{
    res.render("agendar/agendamentos");
})

module.exports = router;