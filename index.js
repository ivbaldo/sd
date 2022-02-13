'use strict'

const { response } = require('express');
const express = require('express');
const app = express();

app.get('/hola', (request, response) => {
    response.send('hola a todas y todos desde Express')
})

app.listen(8080, () => {
    console.log('API REST ejecutandose en http://localhost:8080/hola')
});