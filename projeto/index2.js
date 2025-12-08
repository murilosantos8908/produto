const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require('path');

function loadDB() {
   
    try {
        const raw = fs.readFileSync("./bd2.json", 'utf8');
        return JSON.parse(raw);
        
    } catch (err) {
        console.error('Erro ao ler bd2.json:', err.mensage);
        return {
            grupos: []
        };
    }
}

function saveDB(db){
    try {
        fs.writeFileSync(dbpath, JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar db2.json', err.mensage);
        return false;
    }
}


