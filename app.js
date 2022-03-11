require("dotenv").config();
const express = require("express");
var bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const app = express();

const db = require('./queries')
const port = process.env.PORT || 8080;
var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/cusers', jsonParser, db.createUser)
app.put('/api/upusers/:id', db.updateUser)
app.delete('/api/dlusers/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`Express is working on port ${port}`);
});