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
let names = ['andreas','theis','mie', 'emil','frederik', 'nagib','marius','sofus','bjake','bjørn']

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
//}