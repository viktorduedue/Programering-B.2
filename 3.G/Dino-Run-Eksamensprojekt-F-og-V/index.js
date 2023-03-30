//her laver vi globale varibaler som er ude for "funktion draw" og strye ens ting med (spillere og de ting man skal hoppe over)

//vores spiller kommer til at starte med at være en elipse, vi laver den ved at klade funktionen "ellipse()" den tegner så en elispe ved at indtaste 4 væridger, atllende er hvor på x-aksen skal den være, hvor på y-asken skal en være, (det er os hvor på deres akser de bliver tegnet) hvilken beredde skal den have, og skal den måske have en højde, hvis vi ikke giver den en højde for den samme højde som bredden, og da ellipsen skal være rund, så er det helt fint
//nu er laver vi nogen variabler
//playerX rykker sig faktisk ikke, den er stå nemlig stille, det er væggende der kommer mod den, som for den til at lignde den bevæger sig
let playerX, playerY
//p5 arbjder ikke med pixels men med tal, så selv om vi skriver 100 og det nok formindeligt er pixel så ændere p5 det nok om til en anden værdi som er det samme som 100 pixels
let playerWidth = 100
//det her er vores tynde kræft som trækker bolden ned efter den har været oppe i luften
let gravity = 1
//den påviker tyndekræften, den kan vi os klade vores luftmodstand, som er med til at stoppe bolden for at falde hurtigre og hurtigere
//.9 klader man os bre for 0.9 det samme gælder os for .97 det er os bare 0.97
let friction = .97
//det er vores fart som kulgen hendholdvis ryger op eller nedad med
let velocity = 0

//her laver vi vores jump function som skal få vores kulge til at hoppe
let jump = 20  

//Vores start funkition som enligt starter hele vores kode, men det er alt de før selve spillet
function setup(){

//sæt spilleren på midten af skærmen
//der står "windowWidth/2" fordi den dividere skærmens bredde med 2 så vi for halv delen af skærmen
//grunden til at vi skriver den her lille funktion efter "playerX" er fodi hvis vi ikke sade "windowWidth/2" så ville havldelen af bolden være nede i skærmen s bund og havldelen ville stikke op, fordi den bliver tegnet fra midten
playerX = windowWidth/2

//playerY skal os laves det er dog vigtigt at huske når vi arbjder med p5 så bruger den et omvendt koordinat system, altså at x-asken er det samme men y-aksen går i plus jo lænere ned den kmmer, den går altså fra top hjørnet hvilket er y0 og nedad, og den er ikke ligsom vi er vandt til.
playerY = playerWidth/2


//vi bruger console.log til at kalde den i consollen så vi kan se om det virker, og om der er kommet noget, osee enventuelle fejl
//før noget andet bliver lavet så skriver den os inde i consolen "p5 er super klar"
    console.log('p5 er super klar')
//hvis der ingen fejl er og alt spiller, sætter den backrund til at være rød, så vi kan se den
    background('red')
    //p5 har den her funktion som hedder "createCanvas" som indsætter et canvas inde på HTML siden
    //Efter det sætter vi den til at fylde hele sidens høje, og bredde altså laver den "full screen", og de her to "windowwidth" og "windowhight" er p5 konstanter og dem har vi ikke adgang til i normal vanila javascript
    //det er det første der bliver lavet inden siden skriver at p5 er klar
    createCanvas(windowWidth, windowHeight)
    //laver en baggrunds farve på canvas, vi kunne godt gøre det under CSS men nu bruger vi p5 med deres funktioner til at style det
    background('lightgray')
    

}
//player show er en funktion som tenger en elispse på playerX
function playerShow(){
//"fill()" er en funktion som laver fylde farve i det er tilfælde hvilken fyde farve vores elipse skal have
    fill('blue')
    ellipse(playerX, playerY, playerWidth)
}

//ligesom playerShow skal playerUpdate os blive kladt være gang draw functionen kladt, det gør den jo automatiks i p5.js 60 gange i sekundet, derfor er det osse et godt biblotek til at animere ting med
function playerUpdate(){

//velotity starter med at være 0, og derefter bliver gravity lagt oven i og så bliver velocity 0+1=1
//anden gang vil veolotiy alldere være en, og derefter vil der blive lagt en til så den hedder 1+1=2
    velocity = velocity + gravity

//det der sker er at vi ganger tallet med noget som ikke helt er en i vores tilfælde 0.97 og efter noget tid så vil tallet udjævne sig, det sker ca på velocity ved 32.3333, der er den blevet konstant
    velocity = velocity * friction

//playerY bliver på virket på den måde at den starter med at være no ligesom velotity, der efter bliver den 1, og når så velocity ændre sig og bliver 2, så vli playerY stadig være en men så vil det være playerY + velocity altså 1+2=3
//det er ligsom i den rigtige verden, noget starter med at falde i en hvis fart, og der efter går det hurtigere og hurtigere, indtil at den ikke kan blive hurtigere pågrund af lut modatnden og på det tidspunkt falder den med samme fart
// += betyder bare at den er = med sig selv plus veloticty
    playerY = playerY + velocity

//det her if statemnet vi laver her er at vi giver vores kulge noget bounce så den hopper tilbage op igen.
//vi starter med at søgre for vores kugle ikke ryge gemmen jorden
    if(playerY >= windowHeight- playerWidth/2){
        playerY = windowHeight - playerWidth/2
//vi ved at velotity for konstant fart efter 32.3333 så for at få den til at komme op igen efter den har ramt bunden af vores skærm så skal vi give den det modatte tilbage eller os sagt give den modat fortegn, det vil os sige at hvis der bare stod der her så ville kuglen falde, og ryge ned hoppe en gang ret højt op, og så lavere og lavere indtil den faktisk ville hoppe det samme sted da den konstane fart os er nået
        velocity = 0
    }


//grunden til vi kunne bruge console.log'er de to her er enligt bare så vi kan se forholden mellem hvor meget de vokser, og vi kan se at velocity vokser med 1 hver gang, hvor playerY tager lidt mere og hurtigere fart
    //console.log (velocity, playerY)

}

//den her "function draw" bruger vi når vi skal lave spil, den bliver som udgangs punkt os kladet 60 gange i sekundet, den kære altså tidskritisk kode, og vi kan være sikker på det, at det virker
//nu kunne vi lave en "set.interval" men den er ikke tidkritisk og må ikke snakke med computerens hardware
function draw (){

//her fjerner vi alle de der "kopier" af bolden så man kun kan se en bold og ikke alle de gange den er blevet tegnet
background('light gray')

//istedet for laver vi den her "function draw" som godt kan snakke med computerens hardware, det gør den under en mere advernceret funktion som hedder "request animation frame" den tillader at computerens hardware kan snakke sammen med browseren

//nu kalder vi player show, så vi kan se vores spiller altså vores ellipse, bliver den ikke kaldt kommer der aldirg en cirkel
playerShow()

//playerUpdate skal ændre boldens eller dinoens y-værdi
playerUpdate()

}

//her laver vi functionen som for bolden til at hoppe
//normalt ville man skulle lave en "eventListner" som ville sidde på siden og lytte om nogele keys blev trykket, men p5 har deres egen smartere function som hedder keyPressed, hvilke gør det selv
function keyPressed(key){
//console.log kigger om key er blevet trykket og sørge for at man kan "hoppe" med sin player
    console.log(key)
    if(key.key == ' '){
//vi arbjder jo på en omvendt y-aske, hvor ned af faktsik er plus på y-aksaen og op ad er minus på y-asken
        velocity -= jump
}
}      

