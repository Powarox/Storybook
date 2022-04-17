<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <PersonalCard />
</template>

<script>
// import MenuPopUp from "./components/menus/pop-up/MenuPopUp.vue";
import PersonalCard from "./components/cards/PersonalCard.vue";

export default {
    name: "App",
    components: {
        PersonalCard,
    },
};
</script>

<style>
*, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    outline: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
