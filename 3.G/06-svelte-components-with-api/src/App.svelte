<script>
	import Recipe from "./components/recipe.svelte";
	let query 
	let recipes = []
	$: fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+ query)
	.then( res => res.json())
		.then(json=>{
		console.log(json)
		if(json.meals) recipes =json.meals
	})
</script>
<header>
	<div class="query">
		<input bind:value={query} type="text">
	</div>
</header>

<main>
{#each recipes as recipe}
	<Recipe {recipe}/>
{/each}
</main>

<style>
	header{
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		padding: 1rem;
		background-color: darkcyan;
		margin-bottom: .0.5rem;
	}
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)) ;
		place-items: center;
		gap: .5rem;
	}
</style>