// hent bibloteket IP
const ip = require ('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require ('express')
//opret en variable til express serveren
const app = express ()
//definer en port
const port = 2424
// vi laver en meget simpel database
const weekDays = {
    'Pasta':'Smager skide godt, og virker næsten til alt',
    'Bruger':'God til både morgen middag og aften, er bedere end fisse',
    'Pizza':'Kommer i så meget forsklligt plus kan redde en by tur og en druk aften',
    'Pomfritter':'Den perfekte snack med alt slags topping og dybelse',
    'Bøf':'Til det fine bord, eller hjemme hos Jørgen Leth den her skabning af død ko og enten grill eller pande er perfket, og virker dejlig sammen med sovs', 
    'Ost':'Du kan måske ikke lide alt slags men du eler det no matter what, fungere godt til stortr set alt',
    'Ris':'Kan fungere i mange sammenhæng, og er en dejlig fætter ved et spise bor'
}

//serve en statisk mappe i roden
app.use('/', express.static('public'))


//start en webserver på port 3000
app.get('/api/*', (req, res)=>{
    console.log('servern fik besøg i roden')
    if(req.params[0]){
        console.log('wow nogen vil bruge vores api:' + req.params[0])
        if(weekDays[req.params[0]]){
            res.send((weekDays[req.params[0]]))
        }else{
            res.send(req.params[0] + ' is Not an api endpoint')
        }


        res.send(req.params[0])
    }
})
app.listen(port, ()=>{
    console.log('server lytter på port: ' + port)
})