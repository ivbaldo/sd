'use strict'
const port = process.env.PORT || 3000;
const express = require('express');
const logger = require('morgan');
const app = express();

// Declaramos los middleware
app.use(logger('dev')); // probar con: tiny, short, dev, common, combined
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Implementamos el API RESTFul a través de los métodos
app.get('/api/products', (req, res) => {
    res.status(200).send({products: []});
});

app.get('/api/products/:productID', (req, res) => {
    res.status(200).send({products: `${req.params.productID}`});
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.status(200).send({products: 'El producto se ha recibido'});
});

app.put('/api/products/:productID', (req, res) => {
    res.status(200).send({products: `${req.params.productID}`});
});

app.delete('/api/products/:productID', (req, res) => {
    res.status(200).send({products: `${req.params.productID}`});
});
// Lanzamos nuestro servicio API
app.listen(port, () => {
    console.log(`API REST ejecutándose en http://localhost:${port}/api/products`);
});