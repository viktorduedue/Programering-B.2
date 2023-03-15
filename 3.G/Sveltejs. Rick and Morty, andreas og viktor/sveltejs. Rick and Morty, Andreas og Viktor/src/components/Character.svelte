<script>
    import SaveHeart from './SaveHeart.svelte'
    //c er hele karakter objketet som komboneten for fra app.sevlte 
    export let c 
    export let savedRicks
    console.log('im a new character component')
</script>



<main style ="background-image: url({c.image});">
        <h2>{c.name}</h2>
        <SaveHeart bind:savedRicks={savedRicks} c={c} />
</main>

<style>
    main{
        height: 400px;
        width: 400px;
        background-size: cover;
        display: grid;
        place-items: top;
        color:white;
        position: relative;
        top: 0px;
    }
    h2{
        text-shadow: 0 0 5px black;
        -webkit-text-stroke: 1px black;
    }    

</style>