# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._

## Comenzando 馃殌


Ver **Deployment** para conocer c贸mo desplegar el proyecto.


### Pre-requisitos 馃搵

Para la ejecuci贸n de la aplicaci贸n necesitamos instalar NodeJs y una base de datos no estructurada, MongoDB.

+ #### Instalaci贸n de NodeJS

Primero instalamos el gestor de paquetes de Node (npm):
```bush
$ sudo apt update
$ sudo apt install npm
```
Para instalar Node y mantener las versiones instalamos n haciendo uso de npm:
```bush
$ sudo npm clean -f
$ sudo npm i -g n
```
Y ahora s铆, instalamos la 煤ltima versi贸n estable de NodeJS y comprobamos las versiones:
```bush
$ sudo n stable
$ node --version
V16.13.2
$ npm -v
8.1.2
```
+ #### Instalacion de MongoDB

Instalamos la base de datos no estructurada.

Instalamos Mongo:
```bush    
$ sudo apt update
$ sudo apt install -y mongodb
```

Para la gesti贸n del servicio de Mondo (start, status, stop, restart, disable, enable) lo haremos con el comando systemctl:
```bush
$ sudo systemctl start mongodb
```
Para verificar el funcionamiento de Mongo:
```bush
$ mongo --eval 'db.runCommand({ connectionStatus: 1 })'
MongoDB shell version v3.6.8
connecting to: mongodb://127.0.0.1:27017
Implicit session: session { "id" : UUID("9e0ea58e-46b5-44be-b40f-181b44c28105") }
MongoDB server version: 3.6.8
{
    "authInfo" : {
        "authenticatedUsers" : [ ],
        "authenticatedUserRoles" : [ ]
    },
    "ok" : 1
}
```
Para abrir el gestor de datos ( cliente mongo) desde otra terminal y probar los comandos para gestionarla:
```bush
<Ctrl+Alt+T>
$ mongo --host 127.0.0.1:27017
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```
Para trabajar con la base de datos tenemos que instalar la biblioteca mongodb, en este caso, la biblioteca mongojs:
```bush    
<Ctrl+Alt+T>
$ cd
$ cd node/sd/api-rest
$ npm i -S mongodb
$ npm i -S mongojs
```

### Instalaci贸n 馃敡

+ #### Conectarse al repositorio

Creamos una carpeta donde clonar el proyecto:
```bush
$ cd
$ mkdir node
$ cd node
```
Clonamos el proyecto:
```bush
$ git clone https://github.com/ivbaldo/sd.git api-rest
cd api-rest
```
+ #### Instalaci贸n de los m贸dulos

Necesitamos entrar en la carpeta del proyecto:
```bush
$ cd node/
$ cd sd/api-rest
```
E instalamos todos los m贸dulos:
```bush
$ npm i
```

## Ejecutando las pruebas 鈿欙笍

Activamos la base de datos en una terminal:
```bush
$ sudo systemctl start mongodb
```
Abrimos otra terminal y ejecutamos el programa:
```bush
<Ctrl+Alt+T>
$ cd node/
$ cd sd/api-rest
$ npm start
```

Tambi茅n podemos abrir el cliente de mongo para la gesti贸n de la base de datos en otra terminal:
```bush
<Ctrl+Alt+T>
$ mongo --host localhost:27017
```
Para ejecutar las pruebas es necesario importar el archivo crud.postman_collection.json en Postman y ejecutar los ejemplos que encontramos en la colecci贸n.

### Analice las pruebas end-to-end 馃敥



### Y las pruebas de estilo de codificaci贸n 鈱笍



## Despliegue 馃摝



## Construido con 馃洜锔?

+ NodeJs
+ MongoDB
+ VSCode

## Contribuyendo 馃枃锔?


## Wiki 馃摉


## Versionado 馃搶


## Autores 鉁掞笍


* **Paco Maci谩** - *Trabajo Inicial* - [pmacia](https://github.com/pmacia)
* **Iv谩n Bald贸** - *Documentaci贸n* - [ivbaldo](https://github.com/ivbaldo)

Tambi茅n puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) qui茅nes han participado en este proyecto. 

## Licencia 馃搫

## Expresiones de Gratitud 馃巵

