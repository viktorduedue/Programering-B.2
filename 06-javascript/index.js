let sekunder = 0

let tid = document. querySelector('#tid')
let footer = document. querySelector('footer')
let knap = document.querySelector('#button')
let main = document.querySelector('main')

const restart = () => {
    sekunder = 0
}


knap.addEventListener('click', restart)


const countTime = () => {
}

setInterval(()=>{
    sekunder++
    //betingelse
    if(sekunder == 60){
        sekunder = 0
    }
    document.querySelector('footer').style.width = 100/60 * sekunder + '%'
    if(sekunder == 10){
        main.style.backgroundColor ='orange'
    }else{
        main.style.backgroundColor ='cornsilk'
    }
if(tid.style.borderRadius == '0px'){
    tid.style.borderRadius = '50%'
    footer.style.borderBottomRightRadius = '0'
    footer.style.bordertopRightRadius = '0'
}else{
    tid.style.borderRadius = '0'
    footer.style.borderBottomRightRadius = '1rem'
    footer.style.bordertopRightRadius = '1rem'
}
    console.log (sekunder)
    document. querySelector('#tid'). innerHTML = sekunder

}, 1000)