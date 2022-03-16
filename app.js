const Server = require("./models/server");
//Imports
require("dotenv").config();

const server = new Server();
//Run app
server.listen();

