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
    res.status(200).send({products: [{}, {}, {}]});
});

app.get('/api/products/:productID', (req, res) => {
    const ID = req.params.productID;
    res.status(200).send({
        _id: `${ID}`,
        name: "Mesa de oficina"
    });
});

app.post('/api/products', (req, res) => {
    const miProducto = req.body;

    console.log(miProducto);
    res.status(200).send({result: 'OK', product: miProducto});
});

app.put('/api/products/:productID', (req, res) => {
    const ID = req.params.productID;
    const miProducto = req.body;
    
    res.status(200).send({
        _id: `${ID}`,
        product: miProducto
    });
});

app.delete('/api/products/:productID', (req, res) => {
    const ID = req.params.productID;
    
    res.status(200).send({
        result: 'OK',
        _id: `${ID}`    
    });
});
// Lanzamos nuestro servicio API
app.listen(port, () => {
    console.log(`API REST ejecutándose en http://localhost:${port}/api/products`);
});

//api restful crud (sin base de datos)
//git tag v2.00
//git push tags--