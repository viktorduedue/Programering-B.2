<script>
	let menu = ['Frontpage', 'Get weapon', 'Saved weapon']
	import Menuitem from "./components/Menuitem.svelte";
	import Frontpage from "./components/frontpage.svelte";
	import FindWeapons from "./components/FindWeapons.svelte";
	import SavedWeapons from "./components/SavedWeapons.svelte";
	let activePage = menu[0]
</script>

<header>
	{#each menu as item}
		 <Menuitem bind:activePage={activePage} title={item}/>
	{/each}

</header>

<main>
	{#if activePage == menu[0]}
		<Frontpage />
	{:else if  activePage == menu[1]}
		<FindWeapons />
	{:else if  activePage == menu[2]}
		<SavedWeapons />
	{/if}
	
</main>

<style>
	:global(*, body){
		box-sizing: border-box;
		margin: 0;
		padding: 0;

	}
	main {
		display: grid;
		place-items: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
	}
	header{
		display: grid;
		height: 10vh;
		grid-auto-flow: column;
		place-items: center;

	}

</style>