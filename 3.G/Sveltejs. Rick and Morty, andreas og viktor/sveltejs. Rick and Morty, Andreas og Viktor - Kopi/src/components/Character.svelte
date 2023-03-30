<script>
    import {blur, fade, fly} from 'svelte/transition'
    import SaveHeart from './SaveHeart.svelte'
    //c er hele karakter objketet som komponeten får fra app.sevlte 
    export let c 
    export let savedRicks
    console.log('im a new character component')
    let active = false
</script>



<main in:fly out:fly on:click={() => active=!active} class={active?'active':''} style ="background-image: url({c.image});">
        <h2>{c.name}</h2>
        <SaveHeart bind:savedRicks={savedRicks} c={c} />
        <div class="list">
            <p>Gender: {c.gender}</p>
            <p>Status: {c.status}</p>
            <p>Species: {c.species}</p>
        </div> 
        
</main>

<style>
    main{
        height: 400px;
        width: 400px;
        background-size: cover;
        display: grid;
        color:white;
        position: relative;
        vertical-align: text-top;
        padding: 10px;
        position: relative;
    }
    h2{
        text-shadow: 0 0 5px black;
        -webkit-text-stroke: 1px black;
        height: fit-content;
        width: fit-content;
    }    
    .list{
        font-size: 1.5rem;
        background-color: rgba(0, 0, 139, 0.4);
        height: fit-content;
        width: fit-content ;
        padding: 10px;
        margin:10px;
        border: solid 2px darkblue;
        border-radius: 20px;
        position: absolute;
        bottom: 1rem;    
    }

</style>