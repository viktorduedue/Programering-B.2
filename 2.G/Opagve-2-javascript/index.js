let main = document.querySelector('main')
let button = document.querySelector('#button')

main.style.backgroundImage = 'url("./assets/air pb.png")'

const skiftBillede = () => {

    if(main.style.backgroundImage == 'url("./assets/air pb.png")'){
        main.style.backgroundImage = 'url("./assets/earth pb.png")'
    }
   else if (main.style.backgroundImage == 'url("./assets/earth pb.png")'){
        main.style.backgroundImage = 'url("./assets/Fire.pb.png")'
    }
    else if (main.style.backgroundImage == 'url("./assets/Fire.pb.png")'){
        main.style.backgroundImage = 'url("./assets/Water.pb.png")'
    }
    else{
        main.style.backgroundImage = 'url("./assets/air pb.png")'
    }
}




button.addEventListener('click', skiftBillede)   