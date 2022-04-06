const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Servimos archivos estáticos en la carpeta public
app.use(express.static('public'));
app.get(("/hola"),()=>{

});

// Iniciamos una conexión con Socket.IO y con un mensaje
io.on('connection', function (socket) {
  console.log('Nuevo cliente conectado')
  socket.emit('mensaje', 'Bienvenido!')
});

// Enviamos el mensaje del socket con un setInterval
setInterval(function () {
  io.emit('mensaje', 'Hola, desde un Socket.IO de Platzi')
}, 3000);

// Iniciamos el servidor en el puerto 8080
server.listen(8080, function () {
  console.log('Servidor iniciado en http://localhost:8080')
});