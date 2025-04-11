const express = require('express');
const app = express();

let email = {email: 'superteste@email.com'};

app.get('/', (req, res) => {
    
req.set(email);});

app.listen (8080,() => {
    console.log('Servidor iniciado');
});