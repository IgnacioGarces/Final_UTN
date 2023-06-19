Creo proyecto React con npx
--------------------------

[npx create-react-app ig]
[npm init -y] //Creo packaje.json
[npm i cors] //Instalo CORS
[npm i nodemon -D] //Instalo Nodemon como dependecia
[npm i express] //Instalo Express

[npm i mysql2] // Conexion con mysql
Creo un folder config y dentro database.js



Creo una DB en SQL:
------------------

CREATE DATABASE `consultorio`;

CREATE TABLE `consultorio` .pacientes(
	nombrePaciente VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT (3),
    dni INT (10) NOT NULL PRIMARY KEY,
    cel INT (10)  
);



Creo api.js y le cargo los packetes de Express, Cors y Nodemon 
-------------------------------------------------------------

*CLASE 17*
--------

00:20:00 ~ 01:06:00
Repaso general


Me falta actualizar la lista de Pacientes cuando borro y cargo uno....



02:13:00 MIDDLEWARE
------------------

Multer: Interpreta documentos

Detecta los docs que recibe para darnos la posibilidad de manejo de los mismos. Lo voy a usar para las imgs

npm i multer-


*CLASE 18*
--------

00:58:00
Autorizacion y Autenticacion

















BOLSA DE PACIENTES DE EJEMPLO:

[
    {
        "nombre": "Tyrel",
        "apellido": "Da Pooh",
        "genero": "Hombre",
        "edad": 5,
        "dni": 77683,
        "cel": 342536
    },
    {
        "nombre": "Whinnie",
        "apellido": "Da Pooh",
        "genero": "Hombre",
        "edad": 7,
        "dni": 77456,
        "cel": 343543
    },
    {
        "nombre": "Leroy",
        "apellido": "Jenkins",
        "genero": "Hombre",
        "edad": 30,
        "dni": 767676,
        "cel": 973645
    },
    {
        "nombre": "Ignacio",
        "apellido": "Garces",
        "genero": "Hombre",
        "edad": 26,
        "dni": 39877759,
        "cel": 2147483647
    },
    {
        "nombre": "Edgardo",
        "apellido": "Rodriguez",
        "genero": "Hombre",
        "edad": 43,
        "dni": 242525234,
        "cel": 11111111
    }
]