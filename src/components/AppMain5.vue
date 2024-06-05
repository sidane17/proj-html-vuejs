<script>
// import FILE from 'PERCORSO';
import AppMainTop from './AppMainTop.vue'
import store from '../data/store.js'
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {
            store,
            games: [
                {
                    imgGame: "protfolio1.png",
                    nameGame: "Assassin's Creed",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio2.png",
                    nameGame: "Call of Duty",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio3.png",
                    nameGame: "Tomb Raider",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio4.png",
                    nameGame: "Mortal Combat X",
                    descGame: "Donec solliucidum malesuada."
                },
            ],
        }
    },
    methods: {
        getImg(gameImg) {
            let risultato = new URL(`../assets/${gameImg}`, import.meta.url);
            return risultato.href;
        },

    },
    created() {

    },
    mounted() {

    }
}
</script>

<template>
    <section>
        <div class="container">
            <AppMainTop titleSection="Trending Games" title="Choose Who Is The Best In World!" :arrayGames="games" />
            <div class="row justify-content-between">
                <div v-for="card, i in games" class="card p-0 myBg" id="InfoGame" style="width: 18rem;">
                    <span class="position-absolute top-0 start-0 p-2">New</span>
                    <img :src="getImg(card.imgGame)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-9 text-white">
                                <h5 class="card-title">{{ card.nameGame }}</h5>
                                <p class="card-text">{{ card.descGame }}</p>
                            </div>
                            <a href="#" class="btn rounded-circle">
                                <img src="../assets/image (9).svg" alt="" id="iconPlay">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
section {
    height: 120vh;
    background-color: rgb(32, 32, 70);
    background-image: url('../assets/protfolio-vector.png');
    padding: 10rem 0;
}



.myBg {
    background-color: rgb(32, 32, 70);
}

a {
    width: 3rem;
    height: 3rem;
    background-color: rgb(5, 204, 124);
}


span {
    background-color: rgb(5, 204, 124);
}

#InfoGame:hover {
    background-color: rgb(5, 204, 124);
    border: none;
}

#InfoGame:hover a {
    background-color: rgb(32, 32, 70);

}

#InfoGame:hover #iconPlay {
    filter: invert(100%);
}
</style>