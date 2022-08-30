let x, y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let updrift = 10
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0

function setup(){
    createCanvas(windowWidth, windowHeight)
    background('green')
    x = windowWidth/2
    diameter = 32
    y = diameter/2
    rectW = 20
    rectH = 120
    rectX = windowWidth
    rectY = windowHeight - rectH
}

function showRect(){
    rect(rectX, rectY, rectW, rectH, )
    rect(rectX, 0, rectW, rectH, )
}

function updateRect(){
    rectX-=rectSpeed
    if(rectX <=  0){
        rectX = windowWidth
        rectH = random(100, 200)
        rectY = windowHeight - rectH
        score += 1
    }
}

function show (){
ellipse(x, y, diameter)
}

function update(){
    velocity +=  gravity
    velocity *= friction
    y += velocity 
    if (y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }
    select('#info').html(velocity)
}

function draw (){
    background('green')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
}

function keyPressed(key){
    if(key.key == ' '){
        console.log(event)
        velocity-=updrift
    }
}

