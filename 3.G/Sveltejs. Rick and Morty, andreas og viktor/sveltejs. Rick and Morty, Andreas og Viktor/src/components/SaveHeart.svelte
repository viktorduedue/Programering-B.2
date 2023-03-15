<script>
let active 
export let savedRicks = []
export let c

console.log('saved characters reload')

//tjek om denne karakter er gemt 
let check = savedRicks.find (tjekC => tjekC.id == c.id)
if(check){
    console.log('mit id er ' + c.id + ' og inde i saved arrayet fandt vi det id', savedRicks)
    active = true
}

const addFav = () => {
    savedRicks = [...savedRicks, c]
    console.log('mit id er ' + c.id + ' og inde i saved arrayet fandt vi det id', savedRicks)
    active = true
}

const remFav = () => {
    //først filtrerer vi den der skal flyttes UD af savedRicks
    let filter = savedRicks.filter( isMe => isMe.id != c.id)
    //Så resetter vi savedRicks med resultatet
    savedRicks = filter
}

</script>

<main>
    {#if active}
        <img on:click={remFav} src="./assets/red-heart-icon.svg" alt="">
    {:else}
        <img on:click={addFav} src="./assets/heart.svg" alt="">
    {/if}
</main>

<style>
    main{
        position:absolute;
        bottom:2rem;
        right:2rem;
        width:4rem;
        height:4rem;
    }

</style>