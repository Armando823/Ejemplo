const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index');
});

Router.get("/formulario", (req, res) => {
    res.render("formulario");
});


let usuarios=[];
Router.post("/api/registro", (req, res) => {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }
    const nuevoUsuario = { nombre, email, password};
    usuarios.push(nuevoUsuario);
    res.json(nuevoUsuario);
});


Router.get("/galeria", (req, res) => {
    res.render("galeria");
});
Router.get("/noticias", (req, res) => {
    res.render("noticias");
});

Router.get("/api/articulos", (req, res) => {
    const articulos = [
        { titulo: "Noticia 1", contenido: "Contenido de la noticia 1." },
        { titulo: "Noticia 2", contenido: "Contenido de la noticia 2." },
        { titulo: "Noticia 3", contenido: "Contenido de la noticia 3." }
    ];
    res.json({ array: articulos });
});


module.exports = Router;