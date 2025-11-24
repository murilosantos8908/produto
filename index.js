const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require('path');

while (true) {
    const escolha = prompt(`
0: sair   

Escolha uma opção no menu
    `);

    if (escolha == "0") {
        break;
    } else {
        continue;
    }
}

function loadDB() {
    try {
        const raw = fs.readFileSync("./bd.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Erro ao ler bd.json:', err.mensage);
        return {
            nome_praça: '',
            pontos_bicicleta: [],
            usuários: [],
            corridas: []
        };
    }
}

function saveDB(db){
    try {
        fs.writeFileSync(dbpath, JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar db.json', err.mensage);
        return false;
    }
}

function getNextId(nome) {
    const db = loadDB();

    const values = db.name || [];

    let maxId = 0;
    for (let i = 0; i < usuarios.length; i++) {
        const u = usuarios[i];
        if (typeof u.id === 'number' && u.id > maxId) {
            maxId = u.id;
        }
    }
    const newId = maxId !== 0 ? maxId + 1 : 1; //if ternario ou if one line
    //const var = condição (true ou false) ? valor se verdadeiro : valor se falso

    // if (maxId !== 0) {
    //     const newId = maxId + 1
    // } else {
    //     const newId = 1
    // }
}

function cadastrarusuario(nome, ) {

}