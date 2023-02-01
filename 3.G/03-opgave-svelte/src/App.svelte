<script>
let names = ['Quandel Dingel', 'Donqwayius Dontavius', 'Albert Fingernoodle', 'Quan Ding Ding Dingeling']
const getCocktail = () => {}
let people = [
        {
          "name":"Quandale ",
          "surname":"Dingle",      
          "role":"combined"
        },
        {
          "name":"Dougtavius",
          "surname":"Ogtavius",      
          "role":"confused"
        }
    ]


let cocktail
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json()) //først får vi et response objekt som laves til json
        .then(json => { //så når vi får json tilbage ud af response objektet
            cocktail = json.drinks[0] //gemmer vi objektet i en variabel
            console.log(cocktail) //i konsollen kan du se al info i objektet 
        })



</script>

<main>
	
	<ul>
		{#each name as name, index }
			<li>nummer {index} i listen, hedder {name}</li>
		{/each}
	</ul>


<ul>
    {#each people as p, index}
      <div class="person">
        <h1>{p.name}</h1>
        <p>{p.surname} - role: {p.role}</p>
      </div>
    {/each}     
    </ul>

	{#if cocktail}
    <div class="cocktail">
        <div class="description">
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
        </div>
        <img src="{cocktail.strDrinkThumb}" alt="">
    </div>
{/if}
</main>
<button on:click={getCocktail}>get cocktail</button>
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


.cocktail{
    display:grid;
    grid-template-columns: 2fr 1fr;
    width:50vw;
    box-shadow: 1rem 1rem 1rem 1rem black; 
            /* x akse, y akse, blur, spredning, farve */
}
.cocktail img{
    width:100%;
    height:100%;
    object-fit: cover; /* fyld rammen med billedet så godt som muligt */
} 
.cocktail .description{
    padding:1rem;
}
</style>