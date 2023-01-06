let clientSocket
let state = 'enterName'
function setup(){
    select('#chatBox'). hide()
    createCanvas(windowWidth, windowHeight)
    background('green');
    fetch('http://localhost:666/ip')
    .then(res => res.json())
    .then(data => {
        select('#info').html(data.ip)

    })
    //io kommer fra socket.io biblioteket
    clientSocket = io.connect()
    clientSocket.on('newMessage', message =>{
        let p = createElement('P', message)
        select('#chat').child(p)
        select('#chat').elt.scrollTop =  select('#chat').elt.scrollHeight
    })
    select('#nameButton').mousePressed(()=>{
        clientSocket.emit('newUser',select('#name').value)
        select('#nameBox').hide()
        select('#chatbox').show()
    })

}

function draw(){
    //mouseX mouseY frameCount map
}

function keyPressed(){
    if(key == 'Enter'){
        let message = select('#message').value()
        //imit tager et "emne" og data
        clientSocket.emit('chat', message)
        select('#message').value('')

    }
}

function mousePressed(){

}
