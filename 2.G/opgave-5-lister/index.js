<<<<<<< HEAD
let main = document.querySelector('main')
let input = document.querySelector('#search')


const addCard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
}


addCard('Peter-Bastian')

//vi vil gerne lave array med tekst variabler
let names = ['osman','jeppe','pernille', 'købman','truker',]

names.push('konge af hele verden jeppe')


names.map( name => addCard(name) )



input.addEventListener('input',() => {
    let results = names.filter (name => name.toLocaleLowerCase().includes(input.value))
    main.innerHTML = ''
    results.map(name => addCard(name))
})

//her for et loop
//for(let i = 0; i < names.length; i++){
//    console.log(names[i])
=======
let main = document.querySelector('main')
let input = document.querySelector('#search')


const addCard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
}


addCard('Peter-Bastian')

//vi vil gerne lave array med tekst variabler
let names = ['osman','jeppe','pernille', 'købman','truker',]

names.push('kong luder-lars')


names.map( name => addCard(name) )



input.addEventListener('input',() => {
    let results = names.filter (name => name.toLocaleLowerCase().includes(input.value))
    main.innerHTML = ''
    results.map(name => addCard(name))
})

//her for et loop
//for(let i = 0; i < names.length; i++){
//    console.log(names[i])
>>>>>>> 26f6e90877d86505d25dc0af0450545bf2d599b6
//}