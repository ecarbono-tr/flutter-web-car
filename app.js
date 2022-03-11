require("dotenv").config();
const express = require("express");
var bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const db = require('./queries')
const app = express();

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/cusers',jsonParser, db.createUser)
app.put('/api/upusers/:id', db.updateUser)
app.delete('/api/dlusers/:id', db.deleteUser)

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});