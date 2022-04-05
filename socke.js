const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { emit } = require("process");
const db = require("./queries");

const PORT = process.env.PORT || 8080;
const cors = require("cors");
const io = require("socket.io")(server, {
    cors: {
       origin: "http://localhost:8080",
       methods: ["GET", "POST"],
    },
 });
 
app.use(cors());

app.get("/messages", db.getClientmodel);

const emitMostRecentMessges = () => {
    db.getSocketMessages()
       .then((result) => io.emit("chat message", result))
       .catch(console.log);
 };

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat message", (msg) => {
       db.createSocketMessage(JSON.parse(msg))
          .then((_) => {
             emitMostRecentMessges();
          })
          .catch((err) => io.emit(err));
 });
 

 // close event when user disconnects from app
    socket.on("disconnect", () => {
       console.log("user disconnected");
    });
 });
 server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
 });