const express           = require('express');
const body              = require('body-parser');
const sequelize         = require('sequelize');
const httpMsgs          = require('http-msgs');
const morgan            = require('morgan');
const mysql             = require('mysql');
const cors              = require('cors');
const cmd               = require('node-command-line');
const vboxList          = "VBoxManage list vms";
const vboxListComp      = "VBoxManage list vms -l";
const vboxShow          = "VBoxManage showvminfo ";
const vboxModify        = "VBoxManage modifyvm ";
const vboxClone         = "VBoxManage clonevm ";

// Iniciando o App
const app = express();
var router = express.Router();

app.use(morgan('short'));

app.use(body());

app.use(cors())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    next();
});

app.use(express.static('./view'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
});

app.post('/salvar', (req, res) => {
    runCommand(req.body.memoria, req.body.cpu, req.body.nome, req.body.clone);
    res.redirect("/");
});

//localhost:8080
app.listen(8080, () => {
    console.log("O Servidor está rodando na porta 8080");
});

async function runCommand(memory, core, nomeVm, nomeCloneVm) {
    console.log("Executando Listagem...");
    await cmd.run(vboxList);
    console.log("Executando Clonagem...");
    await cmd.run(vboxClone + nomeVm + " --name " + nomeCloneVm + " --register");
    console.log("Executando Modificação de memória e cpu's...");
    var modifyCommand = vboxModify + nomeCloneVm;

    if(memory != "" || core != ""){

        modifyCommand  += memory != "" ? " --memory " + memory : "";
        modifyCommand  += core != "" ? " --cpus " + core : "";

        await cmd.run(modifyCommand);
    }
    console.log("Executando...");
    cmd.run(vboxShow + nomeCloneVm);
};