require("dotenv").config();
const express = require("express");
var bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const app = express();
const port = server.address().port;
const db = require('./queries')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/cusers',jsonParser, db.createUser)
app.put('/api/upusers/:id', db.updateUser)
app.delete('/api/dlusers/:id', db.deleteUser)

const server = app.listen(process.env.PORT || 5000, () => {    
    console.log(`Express is working on port ${port}`);
});