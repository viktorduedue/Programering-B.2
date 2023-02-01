<script>
    export let recipe // javascript objekt med en hel opskrift
    console.log(recipe)
    let active = false 
</script>

<main on:click={()=>active=!active} class={active ? 'active' : ''} style='background-image:url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>
    {#if active}
    <div class="grid">
        <div class="description">
            {recipe.strInstructions}
        </div>
        <div class="youtube">
            {recipe.strSource}
        </div>
    </div>
    {/if}
</main>

<style>
    .grid{
        display:grid;
        grid-template-columns: 1fr 1fr;
        width:100%;
    }
    main{
        height:400px;
        width:100%;
        display:grid;
        place-items:center;
        font-weight: 100;
        color:white;
        border-radius:1rem;
        transition: all 1s ease-in-out;
    }
    .active{
        transition: all 1s ease-in-out;
        width:100vw;
        height:100vh;
        z-index:2;
        position:absolute;
        left:0;
        top:0;
        background-size: cover;
    }
    .description{
        width:100%;
        overflow:scroll;
        color: rgb(255, 255, 255);
        display: grid;
        place-items: center;
        border: 3px solid black;
        height: 40vh;
        font-size: x-large;
        padding: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
</style>