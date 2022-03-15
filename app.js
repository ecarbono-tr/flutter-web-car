//Imports
require("dotenv").config();
const express = require("express");
const app = express();
const db = require('./queries')

const port = process.env.PORT || 8080;

//Config Json Express
app.use(express.json());

//Api viahes
app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/cusers', db.createUser)
app.put('/api/upusers/:id', db.updateUser)
app.delete('/api/dlusers/:id', db.deleteUser)




//Run app
app.listen(port, () => {
    console.log(`Express is working on port ${port}`);
});