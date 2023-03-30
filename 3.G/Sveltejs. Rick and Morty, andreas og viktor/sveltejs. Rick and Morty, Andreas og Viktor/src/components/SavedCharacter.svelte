<script>
    import Character from "./Character.svelte";
    export let savedRicks = []
    console.log('her er savde ', savedRicks)
</script>

<main class='page'>
    <h1 >Saved Characters</h1>
    <div class="saved">
        {#each savedRicks as c}
            <Character {c} bind:savedRicks={savedRicks}/>
        {/each}
        
    </div>
   


</main>

<style>
    .saved{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap:2rem;
        width:100vw;
        height: 100vh;
        padding:.8rem;
        overflow: scroll;
    }
   main{
    background-image:url("/assets/Portal2.png") ;
    background-size: contain;
    background-repeat: no-repeat;
    display: grid;
    background-position: center;
    
   }
   main h1{
    font-size: 3rem;
    padding: 10px;
   }
</style>