

let data

//asynkron funktioner

fetch('./data/artifact.json')
    //get the response object and pass it into JSOn 
    //res = response
    .then( res => res.json() )
    //when the passing is done we get the json object into a arrival. Vi kunne kalde det alt
    .then (json => {
            console.log(json)
            //kig på json file, vi henter den første "familie. Birds, og henter underfamilien members og husk det starter med 0,1,2"
            console.log(json)
            data = json.artifacts
            document.querySelector('#title').innerHTML = json.description
            //document.querySelector('#title').innerHTML = json.description


            //hver bird har en string og et array
            json.artifacts.map( artifacts => {
                newCard(artifacts)
            })

        }  )



        
        //kan ikke lave en funktion i asynkron
    const newCard = (artif) =>{
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let lel = document.createElement('div')
        let nede = document.createElement('div')
        //card er dens klasse
        card.classList.add('card')
        lel.classList.add('members')
        nede.classList.add('mem')
        heading.innerHTML = artif.name
        lel.innerHTML = artif.synonyms
        lel.innerHTML = artif.qualities
        nede.innerHTML = artif.nature
        
        
        card.append(heading)
        card.append(lel)
        card.append(lel)
        card.append(nede)

        
        
        let list = ''
        artif.synonyms.map(synonyms =>list += '<li>' + synonyms + '</li>')
        artif.qualities.map(qualities =>list += '<li>' + qualities + '</li>')
        
        document.querySelector('main').append(card)
        lel.innerHTML = list
        
    }

    
    
