'use strict'
const port = process.env.PORT || 3000;

const https = require('https');
const fs = require('fs');

const OPTIONS_HTTPS = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongojs = require('mongojs');//importamos la base de datos mongojs
const TOKEN_SERVICE = require('/home/sd/api-auth-reg/auth-test/services/token_service');
//Declaracion helmet
var helmet = require('helmet');
const app = express();

var db = mongojs("SD"); //Conectamos con la db SD
var id = mongojs.ObjectId; //Funcion para convertir un id textual en un objetId
//Declaraciones cors
var allowCrossTokenHeader = (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    return next();
}

var allowCrossTokenOrigin = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    return next();
};



//Para autorizar las req
var auth = (req, res, next) => {
    const jwt = req.headers.authorization.split(' ')[1];
    TOKEN_SERVICE.decodificaToken(jwt)
    .then(userId => {
        req.user = {
            id: userId,
            token: jwt
        }
        return next();

    })
    .catch( err => {
        res.status(400).json({
            result: "KO",
            error: 'Token error',
            description: 'Error al decodificar el token'
        });
    });

};


// Declaramos los middleware
app.use(logger('dev')); // probar con: tiny, short, dev, common, combined
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//cors middlewares
app.use(cors());
app.use(allowCrossTokenHeader);
app.use(allowCrossTokenOrigin);

//helmet middleware
app.use(helmet());

//añadimos un tigger previo a las rutas para dar soporte a multiples colecciones
app.param("coleccion", (req, res, next, coleccion) => {
    console.log('param /api/:colecction')
    console.log('coleccion: ',coleccion)
    
    req.collection = db.collection(coleccion);
    return next();
});

//rutas
app.get('/api', auth,(req,res,next) => {
    console.log('GET /api');
    console.log(req.params);
    console.log(req.collection);

    db.getCollectionNames((err, colecciones) => {
        if (err) return next(err);
        res.json(colecciones);
    });
});

app.get('/api/:coleccion',auth,(req,res,next) => {
    console.log("Entro en api-rest");
    req.collection.find((err,coleccion) => {
        if(err) return next(err);
        res.json(coleccion);
    });
});

app.get('/api/:coleccion/:id', auth,(req, res, next) => {
    req.collection.findOne({_id: id(req.params.id)}, (err,elemento) => {
        if(err) return next(err);
        res.json(elemento);
    });
});

app.post('/api/:coleccion', auth,(req,res,next) => {
    const elemento = req.body;
    console.log(elemento);

    if(!elemento.title || elemento.isDone === null){
        res.status(400).json ({
            error:'Bad data',
            description: 'Se precisa al menos un campo <title> y <estado>'
        });
    }else{
        req.collection.save(elemento, (err,coleccionGuardada) => {
            if(err) return next(err);
            res.json(coleccionGuardada);
        });
    }
});

app.put('/api/:coleccion/:id', auth,(req, res, next) => {
    let elementoId = req.params.id;
    let elementoNuevo = req.body;
    req.collection.update({_id: id(elementoId)},
    {$set: elementoNuevo}, {safe: true, multi: false}, (err, elementoModif) => {
        if(err) return next(err);
        res.json(elementoModif);
    });
});

app.delete('/api/:coleccion/:id',auth,(req,res,next) => {
    let elementoId = req.params.id;

    req.collection.remove({_id: id(elementoId)}, (err,resultado) => {
        if(err) return next(err);
        res.json(resultado);
    });
});

https.createServer(OPTIONS_HTTPS, app).listen(port, () => {
    console.log(`sEC WS API REST ejecutandose en https://localhost:${port}/api/:coleccion/:id`)
});


/*
app.listen(port, () => {
    console.log(`API REST ejecutandose en http://localhost:${port}/api/:coleccion/:id`)
});*/