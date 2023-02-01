<script>
let number
let smiley
let counter = 0
    let juices = ['orange', 'apple', 'multifruit', 'ginger', 'tropical', 'Jungle', 'Fart']
    $: console.log('when counter changes - this log will be induced: ' + counter)
    //because counter is part of the statement, it becomes reactive

	$: if(counter >= juices.length) counter = 0
//det er $: som er hemmeligheden - pludselig bliver koden reaktiv

$: if(number > 0.5){
	smiley = "😍" 
}else{
	smiley = "😠"
}

https:api.giphy.com/v1/gifs/search?q=orange&limit=1&api_key=q16hBWwIjwkjUVBbX9ckqqf65S7e9Tfc

</script>

<main>
	<h2>Todays juice is {juices[counter]}</h2>
    <button on:click={()=>counter = counter +1}>switch</button>
	<button on:click={()=> number = Math.random (1)}>Random number</button>
	<p>{smiley}</p>
	<p>{number}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>