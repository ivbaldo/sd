# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.


### Pre-requisitos 📋

_Qué cosas necesitas para instalar el software y cómo instalarlas_

Para la realización de esta práctica necesitaremos tener instalados una máquina virtual o una partición con la última versión estable de Ubuntu, en este caso, la versión 20.04.

Una vez instalado Ubuntu 20.04 instalaremos un un editor de texto, en mi caso Visual Studio Code, y Postman.

También necesitaremos instalar NodeJs y un gestor de reporsitorios, git.

A NodeJs le debemos añadir la biblioteca Express para facilitarnos la gestión de métodos y recursos HTTP.

Para evitar tener que reiniciar nuestra aplicación cada vez que haya un cambio en el código necesitamos instalar el gestor de proyectos Nodemon.

Es importante saber qué está pasando en cada momento en nuestro servidor cuando desarollamos. Por lo que vamos a instalar Morgan, un motor de registro.

```
Proporciona un ejemplo
```

### Instalación 🔧

+ #### Instalación de Visual Studio Code y Postman:
```bush
$ sudo snap install --classic code
$ sudo snap install postman
```

+ #### Instalación de NodeJS

Ahora instalamos la última versión de NodeJS.
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
Y ahora sí, instalamos la última versión estable de NodeJS y comprobamos las versiones:
```bush
$ sudo n stable
$ node --version
V16.13.2
$ npm -v
8.1.2
```
+ #### Instalación del repositorio

Instalación y configuración de git:
```bush
$ sudo apt install git
$ git config --global user.name ivbaldo
$ git config --global user.email ivanbaldo1994@gmail.com
$ git config --list
user.name=ivbaldo
user.email=ivanbaldo1994@gmail.com
```
Creamos ahora el repositorio:
```bush
$ cd
$ mkdir node
$ cd node
```
En mi caso he utilizado Github:
```bush
$ git clone https://github.com/ivbaldo/sd.git api-rest
cd api-rest
```
Conectamos el repositorio remoto y le asignamos un nombre (origing):
```bush
$ git remote -v
$ git remote add origin https://github.com/ivbaldo/sd.git
```
Por último debemos sincronizar el repositorio local con el remoto:
```bush
$ git status //Comprobamos el estado
```
Y si hay algo en el repositorio remoto(origin), lo traemos:
```bush
$ git fetch origing         //Traemos el repositorio
$ git remote show origin    //Obtenemos información
$ git status                //Obtenemos información
$ git pull origin master    //Los combinamos
```
 
+ #### Instalación de Express
```bush
$ npm i -S express
```
El comando anterior crea una carpeta node_modules dentro del proyecto. 
Con la opción -S hemos forzado a que se registre una entrada en el archivo package.json. Esta entrada facilita la instalación de modulos que el proyecto puede puede llegar a necesitar en un futuro.
```json
"dependencies": {
    "express": "^4.17.2",
}
```
    
+ #### Instalación de Nodemon
```bush
$ cd node/sd/api-rest
$ npm i -D nodemon
```
Se crea en el archivo package.json en la sección devDependencies siguiente:
```json
"devDependencies": {
    "nodemon": "^2.0.15"
}
```
+ #### Instalación de Morgan

```bush
npm i -S morgan
```
    

+ #### Instalacion de MongoDB

Instalamos la base de datos no estructurada en Ubuntu 20.04.

Instalamos Mongo:
```bush    
$ sudo apt update
$ sudo apt install -y mongodb
```

Para la gestión del servicio de Mondo (start, status, stop, restart, disable, enable) lo haremos con el comando systemctl:
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

### Analice las pruebas end-to-end 🔩



### Y las pruebas de estilo de codificación ⌨️



## Despliegue 📦



## Construido con 🛠️



## Contribuyendo 🖇️


## Wiki 📖


## Versionado 📌


## Autores ✒️


* **Paco Maciá** - *Trabajo Inicial* - [pmacia](https://github.com/pmacia)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto. 

## Licencia 📄

## Expresiones de Gratitud 🎁

