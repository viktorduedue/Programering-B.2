//opret sever med express
const express = require('express')
const app = express()
const port = 4444
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter på adressen: http://localhost:' + port)
})

//opret en socket
const io = require('socket.io')
const serverSocket = io(server)



let players = []
//alt snak med klienterne sker på connection
serverSocket.on('connection', socket => {
    console.log('ny spiller')
    //okay der kommer en ny spiller
    // vi putter spillerens id ind i players arrayet
    players.push({'id':socket.id})
    // er der plads til flere spillere?
    if(players.length > 2){
        socket.emit('join', false )
        socket.disconnect()
    }else{
        socket.emit('join', true )
    }

})