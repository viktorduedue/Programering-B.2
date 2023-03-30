
<script>
	import Menuitem from './components/Menuitem.svelte'
	import Frontpage from './components/Frontpage.svelte'
	import FindCharacter from './components/FindCharacter.svelte'
	import SavedCharacter from './components/SavedCharacter.svelte'
	let menu = ['Frontpage', 'Find character', 'Saved charaters']
	let activePage = menu[0]
	let savedRicks = []
	let q = 'morty'

	$: console.log(savedRicks)
</script>

<header>
	{#each menu as item}
		<Menuitem bind:activePage={activePage} title={item} />
	{/each}
</header>
<main>
	{#if activePage == menu[0]}
		<Frontpage/>
	{:else if  activePage == menu[1]}
		<FindCharacter bind:q={q} bind:savedRicks={savedRicks}/>
	{:else if  activePage == menu[2]}
		<SavedCharacter bind:savedRicks={savedRicks} />
	{/if}
</main>

<style>
	:global(*, body){
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	:global(.page){
		display:grid;
		place-items:center;
		height:90vh;
	}
	header{
		display:grid;
		height:10vh;
		grid-auto-flow:column;
		place-items:center;
		background:black;
	}
	main {
		display:grid;
		place-items:center;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
</style>