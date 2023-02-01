<script>
	let animals = [
		{"name": "Dragon"}, {"name": "Hundeløve"},{"name": "Jajabinks"},{"name": "Bestøvlede kat"},{"name": "Brian Griffin"},{"name": "Drageøster"},{"name": "numse Lus"},{"name": "Fat walking cuck"},{"name": "Oste tiger"},{"name": "Rizz griss"},{"name": "Locan Paul"}
	]
</script>

<main >
	
	<div class="header">

		<h1> sjove dyr</h1>
	</div>
	<div class="animals">
		{#each animals as a}
		<div class="animal">

		<h2>{a["name"]}</h2>
		</div>
		{/each}
	</div>
	
</main>

<style>
	h1{
		background-color: rgb(186, 39, 142);
		color: hotpink;
		display: grid;
		place-items: center;
	}
.animals{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 1rem;
}
.animal{
	border: 4px solid hotpink;
	border-radius: 50%;
	display: grid;
	place-items: center;
	width: 200px;
	height: 200px;
	box-shadow: -12px 12px 4px green;


}
</style>