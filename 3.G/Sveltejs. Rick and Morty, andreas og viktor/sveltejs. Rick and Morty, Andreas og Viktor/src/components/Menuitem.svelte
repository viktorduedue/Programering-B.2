<script>
    export let title
    export let activePage
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main 
    class={ activePage == title ? 'active' : '' }
    on:click={ () => activePage = title }
    >
    {title} 
</main>

<style>
    main{
        box-sizing: border-box;
        cursor:pointer;
        padding:.4rem;
        width:20vw;
        display:grid;
        place-items:center;
        color:white;        
    }
    .active{
        background-image: url("/assets/gun.png") ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: right;
        animation: jumpIn .6s ease-in-out forwards;
    }
    @keyframes jumpIn{
        0%{
            transform:scale(1);
        }
        50%{
            transform:scale(1.2);
        }
        100%{
            transform:scale(1);
        }
    }
</style>
