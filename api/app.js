const express = require('express');

const app = express();


const cors = require('cors');

app.use(express.json());

const db =require("./db/models");

app.use((req,res,next)=>{

    res.header("Access-Control-Allow-Origin","*");

    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");

    res.header("Access-Control-Allow-Headers","Content-Type");

    app.use(cors());
    next();
})



const mensagens = require("./controllers/mensagens");


app.use('/message', mensagens);


app.listen(8080,()=>{
    console.log(" Servidor funcionando na porta 8080 http://localhost:8080")
});