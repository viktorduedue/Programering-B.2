<script>
    export let savedRicks
    import Character from "./Character.svelte";
    //variable med q, er en holder for søgetermen
    export let q
    //let Characters er en liste som er tom det viser de firkentede parenstser
    let characters = []
    //$: er en reaktiv variable, den følgende linje bliver kørt, hvis q ændre sig
    $: console.log(q + ' is the query')
    //når brugerne/klienten skrive i søgefeltet ændre q sig


    $: {
        if (q.length > 1) {
        //vi nulstiller characters array så vi er sikre opå at de nye karakterer reloades
        characters = []
        //hvis q ikke er større end 1 så gider den ikke søge, man skal skrive mindst to bogstaver, da 1 er for lidt
            fetch(' https://rickandmortyapi.com/api/character/?name=' + q)
            //det første der sker at severen sender et repsones objket tilbage. Det fortælller om vores request er okay, altså om vi må hente data.
            //vi burde lave erroer handling her, for at sørge for at håndtere fejl.
            .then(res => res.json())
            // Vi kalder funktionen .json() på response objektet og for så json tilbage. 
            .then(json => {
                console.log(json)
                //hvis der er noget i søge resultatet gemmer vi det i vores array. 
                if(json.results) characters = json.results
            })
        }
    }
</script>

<main class='page'>
    <div class="searchbar">
        <!-- Vores in put felt er et felt som stater med at have en query som er værdigen af vores q i det her tilfælde Rick, og når man så klikker på vores q ændre den sig fra en string med noget i det ville være rick, til en tom string så man kan skrive i den -->
        <input type="text" bind:value={q} on:click={()=>q=''}>
    </div>
    
    <div class="results">
        {#each characters as c}
            <Character {c} bind:savedRicks={savedRicks}/>
        {/each}
    </div>
</main>

<style>
    main{
        display:grid;
        grid-template-rows: 10vh 80vh;
        align-items: flex-start;
    }
    .searchbar{
        display:grid;
        background-color: green;
        width:100vw;
        height:100%;
        place-items:center;
    }
    input{
        border-radius: .6rem;
        width:60vw;
        text-align: center;
    }
    .results{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        justify-content: center;
        align-items: center;
        gap:2rem;
        width:100vw;
        height: 100vh;
        padding:.8rem;
        overflow: scroll;
    }
    .character{
        display:grid;
        min-width:100px;
        height:100px;
        grid-template-rows: 1fr 2fr;
        place-items:center;
        border:1px solid black;
        border-radius:5px;
        padding:1rem;
        transition:.1s ease-in-out all;
    }
    .cocktail h2{
        text-align:center;
        font-size:.5rem;
    }
    .cocktail img{
        width:100px;
        height:100px;
        object-fit:cover;
        border-radius:50%;
    }
    .cocktail:hover{
        transform:scale(1.1);
    }
    
</style>