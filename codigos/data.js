import express from 'express';
const app = express();

import { libraParaQuilo } from './conversorPeso';

app.get
('/', (req, res) => {
    let libra = req.query.libra;
    let kg = libraParaQuilo(libra);
    res.json({ kg: kg });
});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor node iniciado em ${ data}`);
});