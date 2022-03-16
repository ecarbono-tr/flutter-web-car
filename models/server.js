
const express = require("express");
const cors = require("cors");
const initDB = require("../DB/connectDB");
const { body, validationResult } = require('express-validator');

class Server {
    constructor() {
        this.port = process.env.PORT || 8080;
        this.pathUsers = "/api/users";
        this.app = express();

        this.middlewares();

        this.routes();
    }
    

    middlewares() {
        //Config Json Express
        this.app.use(express.json());

        this.app.use(cors());
    }

    routes() {
        this.app.use(this.pathUsers, require("../routes/users.routes"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Express is working on port ${this.port}`);
        });
    }
}

module.exports = Server;