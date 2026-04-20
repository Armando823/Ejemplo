const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rutas = require('./routes/rutas');
app.use('/', rutas);

app.listen(3000, () => {    
    console.log('Servidor en http://localhost:3000');
});

