require("dotenv").config();
const express = require("express");
var bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const db = require('./queries')
const app = express();
const port = process.env.PORT;

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/cusers',jsonParser, db.createUser)
app.put('/api/upusers/:id', db.updateUser)
app.delete('/api/dlusers/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
})