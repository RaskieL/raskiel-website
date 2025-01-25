<script>
    import { getRelativeLocaleUrl } from "astro:i18n";
    export let lang;
    export let curr;
    let toggleNav = false
    function handleToggleNav(){
        toggleNav = !toggleNav
    }
    function closeNav(){
        toggleNav = false
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="nav" on:mouseleave={closeNav}>
    <div class="nav-top">
        <div class="nav-topL">

        </div>
        <div class="nav-topC">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img id="lodestar" on:click={handleToggleNav} class="lodestar" src="/LodeStar.svg" alt="lodestar">
        </div>
        <div class="nav-topR">

        </div>
    </div>
    {#if toggleNav}
        <div class="langs">
            <a href="/fr/{curr}">🇫🇷</a>
            <a href="/en/{curr}">🇬🇧</a>
        </div>
        {#if lang === "fr"}
        <div class="lodepaths">
            <a href="/fr/">Accueil</a>
            <a href={getRelativeLocaleUrl('fr','blog')} class="disabled-link">Blog</a>
            <a href="{getRelativeLocaleUrl('fr','portfolio')}">Portfolio</a>
            <a href="{getRelativeLocaleUrl('fr','gallery')}" class="disabled-link">Galerie</a>
            <a href="{getRelativeLocaleUrl('fr','contact')}">Contact</a>
        </div>
        {/if}
        {#if lang === "en"}
        <div class="lodepaths">
            <a href="/en/">Home</a>
            <a href={getRelativeLocaleUrl('en','blog')} class="disabled-link">Blog</a>
            <a href="{getRelativeLocaleUrl('en','portfolio')}">Portfolio</a>
            <a href="{getRelativeLocaleUrl('en','gallery')}" class="disabled-link">Gallery</a>
            <a href="{getRelativeLocaleUrl('en','contact')}">Contact</a>
        </div>
        {/if}
    {/if}
</div>

<style>
    .nav-top{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    .nav-topL{
        width: 45%;
    }
    .nav-topC{
        width: 10%;
    }
    .nav-topR{
        width: 45%;
    }
.langs{
    display: flex;
    flex-direction: row;
    gap: 25px;
    text-align: center;
}
.langs a{
    text-decoration: none;
    font-size: 32px;
    border-radius: 25px;
    padding: 9px;
    padding-top: 1px;
    padding-bottom: 1px;
}
.langs a:hover {
    box-shadow: 0px 0px 10px #e1f6f0;
}
.nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100%;
    z-index: 1;
}
.lodepaths{
    position: relative;
    bottom: 40px;
    display: flex;
    flex-direction: row;
    gap: 5%;
    padding: 25px;
    border: 1px solid white;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 10px 10px 15px #e1f6f0;
}
.lodepaths a {
    font-size: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 220px;
    padding: 5px;
}
@media (width <= 1200px){
    .lodepaths{
        display: flex;
        flex-direction: column;
        gap: 10%;
    }
    .lodepaths a{
        font-size: 32px;
        margin-left: auto;
        margin-right: auto;
        width: 220px;
    }
}
.lodestar{
    width: 48px;
    height: 48px;
    margin: 16px;
    transition: linear 0.4s;
    border-radius: 100px;
    padding: 5px;
}

.lodestar:hover{
    transform: scale(1.5) rotateZ(180deg);
    box-shadow: 0px 0px 20px 0px #81d9f5, inset 0px 0px 15px 2px #81d9f5;
    transition: linear 0.4s;
    cursor: pointer;
}
</style>