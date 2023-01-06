console.log('Node script now running')
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())
//hent bibiliotekt socket.io - for at lave en websocket
const socketLib = require('socket.io')
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//initaliser app objektet
const app = express()
//definer en port
const port = 666
//start en webserver på port 666
const server = app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
})
//oprte en sever websocket
const serverSocket = socketLib(server)
app.use('/', express.static('public'))

//opret et endpoint som returnerer serverens ip
app.get('/ip', (req, res)=>{
    res.json(
        {

           'ip': ip.address(),
           'port': port
        }
     )
})


serverSocket.sockets.on('connection', socket => {
    console.log('new socket connection established')
    //socket.on er en eventlistner på nye beskeder fra klienter
    socket.on('chat', message => {
        console.log(message)
        //når serveren modtager beskder sender den dem rundt til alle. (rundt til alle sockets)
        serverSocket.sockets.emit('newMessage', message)
    })

})
