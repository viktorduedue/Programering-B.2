let person = {
    id: '12345',
    name: 'Mie',
    age: 17,
    hobbies:['code','cubing','gaming','hari-stuff','være kempe simp for viktor'],
    favoriteColor: 'hotpink'
    
}

console.log ('this persons name is' + person.name)
console.log ('this persons id is' + person.id)
console.log ('this persons age is' + person.age)
console.log ('this persons first hobby is' + person.hobbies[0] )

let people = [person , {
    name: 'fredrik',
    age: '6',
    id: '23456',
    hobbies:['se tinka nogle gange', 'snakke med mennseker', 'have en far som smiler'],
    favoriteColor: 'blue',

},{
    name:'Stomie pose jørgen',
    age: '43',
    id: '34567', 
    hobbies:['skide', 'gå med kniv', 'have rakorden i at skide i en pose som er 2'],
    favoriteColor: 'purple',
},{
    name: 'chause claus',
    age:'47 katte år',
    id:'45678',
    hobbies:['være en overvægtig kat', 'prøve at fange mus men fejle stort fordi fedme'],
    favoriteColor: 'gray',

}

]




console.log('person 2s name is ' + people[1].name)

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>age: ' + person.age + '</li>'
    nc.innerHTML += '<li>id: ' + person.id + '</li>'
    nc.innerHTML += '<li>hobbies: ' + person.hobbies.join(' ,') + '</li>'
    document.querySelector('main').append(nc)
})