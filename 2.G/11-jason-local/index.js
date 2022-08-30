let data


//asynkon dunktion

fetch('./data/birds.json')

//get the repsone objetct and parse it to jason()
.then( res => res.json() )

//when parsing is done we get the json objetct into a variable

.then ( json =>{
    json.birds.map(bird =>{ newCard(bird) })
    data = json.birds
})
    
    document.querySelector('#searchicon').addEventListener('click' , () =>{

        document.querySelector('#searchbar').classList.add('show')
    })

    document.querySelector('#close').addEventListener('click' , () =>{

        document.querySelector('#searchbar').classList.remove('show')
    })


    document.querySelector('#input'). addEventListener('input', ()=>{
        let result = data.filter(bird => bird.family.includes(document.querySelector('#input').value || bird.members.includes ))
        document.querySelector('main').innerHTML =''
        result.map(bird => newCard(bird))
    })


    const newCard = (bird) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        card.classList.add('card')
        members.classList.add('members') 
        card.append(heading)
        card.append(members)
        heading.innerHTML = bird.family
        let list = ''
        bird.members.map (member => list += '<li>' + member + '</li>')
        members.innerHTML = list
        document.querySelector('main').append(card)
    }