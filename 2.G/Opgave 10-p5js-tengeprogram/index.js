console.log('scriptet loaded')

function setup(){
    frameRate(100)
    console.log('setup')
    createCanvas(windowWidth, windowHeight)
    background('red')
}

function draw (){
    select('#info').html(frameCount % 100)

    let xColor =map(mouseX, 0, windowWidth, 0, 255)
    let yColor =map(mouseY, 0, windowHeight, 0, 255)

    stroke(xColor, yColor, 255, )
    noFill()
    ellipse(mouseX, mouseY, frameCount % 166)

}