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




//vi vil gerne lave array med tekst variabler
let names = [
'romainesalat: Det var det første salat som blevet groet oppe i rummet. Meget lækkert og sprødt, rigtig godt i en blandet salat, hvor der os kan kommer nogle tomater og arkuer som er fra Spirulina.',

'spidskål: En af de nye planter som er kommet, ville være godt sammen med noget hvidløg.',

'rucola: Os en af de nye dog er den ikke super spænde og bliver nok fravlagt for det meste.',

 'kartofler: Enten lavet af spirulina, eller selv groet i drivhuset, super lækkert og kan bruge i mange retter.',

'pasta: Er os ligesom kartofler, kan bruges i meget mad og kan nemt kompineres med andere salater goret i månebasen drivhus.', 

'agurker: Meget lækker og læskende, da vandet i argurkerne kan slukke en lille smule af tørsten, smager os dejligt.',

'spirulna burger: Man kan lave korn ud af spirulina, og med det kan man bruge det til at lave brød, så kan man tage nogle af salaterne og bruge spirulina til at lave en slags plante basseret bøf, og med det har man en lækker bruger.',

'spirulina lasagne: Hvis man tager noget pasta fra spirulna og måske lavet en slags plantebaseret hakket oksekød, på den måde kan man lave en lækker grønsags lasagne hvor dem der ikke spsier kød os kan nyde den. ']




names.map( name => addCard(name) )



input.addEventListener('input',() => {
    let results = names.filter (name => name.toLocaleLowerCase().includes(input.value))
    main.innerHTML = ''
    results.map(name => addCard(name))
})