<template lang="html">
    <div id="component">
        <div class="navigation">
            <input type="checkbox" class="navigationCheckbox" id="navi">

            <label for="navi" class="navigationBtn">
                <span class="navigationIcon">&nbsp;</span>
            </label>

            <div class="navigationBg">&nbsp;</div>
            <nav class="nav">
                <ul class="navigationListe">
                    <li class="navigationItem"><a href="#" class="liens">Accueil</a></li>
                    <li class="navigationItem"><a href="#" class="liens">Nos produits</a></li>
                    <li class="navigationItem"><a href="#" class="liens">Blog</a></li>
                    <li class="navigationItem"><a href="#" class="liens">À propos</a></li>
                    <li class="navigationItem"><a href="#" class="liens">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuPopUp",
    }
</script>

<style lang="css" scoped>
    #component {
        font-family: 'lato', sans-serif;
    }

    .navigationCheckbox {
        display: none;
    }

    .navigationBg {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        top: 4.5rem;
        right: 6.5rem;
        background-image: radial-gradient(#c3073f, #950740);
        z-index: 1000;
        transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .navigationBtn {
        background-color: #fff;
        height: 7rem;
        width: 7rem;
        position: fixed;
        top: 4rem;
        right: 6rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
        text-align: center;
        cursor: pointer;
    }

    .navigationIcon {
        position: relative;
        margin-top: 3.5rem;
        width: 3rem;
        height: 2px;
        background-color: #333;
        display: inline-block;
    }

    .navigationIcon::before,
    .navigationIcon::after {
        width: 3rem;
        height: 2px;
        background-color: #333;
        display: inline-block;
        content: "";
        position: absolute;
        left: 0;
        transition: all .2s;
    }

    .navigationIcon::before {
        top: -.8rem;
    }

    .navigationIcon::after {
        top: .8rem;
    }

    .nav {
        height: 100vh;
        position: fixed;
        width: 0;
        opacity: 0;
        z-index: 1500;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .navigationListe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style-type: none;
        text-align: center;
        width: 100%;
    }

    .liens {
        display: inline-block;
        margin-top: 1rem;
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
    }

    .navigationCheckbox:checked ~ .navigationBg {
        transform: scale(80);
    }

    .navigationCheckbox:checked ~ .nav {
        opacity: 1;
        width: 100%;
    }

    .navigationCheckbox:checked+ .navigationBtn .navigationIcon {
        background-color: transparent;
    }

    .navigationCheckbox:checked+ .navigationBtn .navigationIcon::before {
        top: 0;
        transform: rotate(135deg);
    }
    .navigationCheckbox:checked+ .navigationBtn .navigationIcon::after {
        top: 0;
        transform: rotate(-135deg);
    }
</style>
