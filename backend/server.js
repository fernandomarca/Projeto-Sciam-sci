const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv:", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('a base foi conectada com sucesso')
}, (err) => {
    console.log('erro ao conectar com a base:' + err)
    //process.exit()
})

app.use(cors({}));//origin:'http://localhost:3333'
app.use(express.json());

app.use(routes);

app.listen(3333);
