let timer = document. querySelector('#timer')
let min = document. querySelector('#min')
let sek = document. querySelector('#sek')
let thomas = document.querySelector('#thomas')


thomas.style.backgroundImage = "url('./assets/pizza.jfif')"
let tid = new Date ()


const settid = () => {
    let tid = new Date()

    if (tid.getSeconds() < 30){
        thomas.style.backgroundImage = "url('./assets/pizza.jfif')"
    }else{
        thomas.style.backgroundImage = "url('./assets/pizza spist.jfif')"
    }
    thomas.style.marginLeft = 1.6 * tid.getSeconds() + '%'

    let nul =''
    timer.innerHTML = tid.getHours()
    min.innerHTML = tid.getMinutes()
    nul =''
    if(tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()
    nul =''
    if(tid.getMinutes() < 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()
    nul =''
    if(tid.getSeconds()< 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()
    
}
setInterval(settid, 1000)