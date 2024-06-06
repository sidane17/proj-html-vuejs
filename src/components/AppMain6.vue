<script>
// import FILE from 'PERCORSO';
import AppMainTop from './AppMainTop.vue'
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {
            nextMatches: [
                {
                    squad: {
                        name: 'Ninga Gaming',
                        img: '1.png',
                        imgBack: 'm1.png',
                    },
                    ora: '10.45',
                    data: '1st November, 2002'
                },
                {
                    squad: {
                        name: 'Witch Gaming',
                        img: '5.png',
                        imgBack: 'm2.png',
                    },

                    ora: '08.45',
                    data: '2st November, 2002'
                },
                {
                    squad: {
                        name: 'SkullG Gaming',
                        img: '3.png',
                        imgBack: 'm3.png',
                    },

                    ora: '10.45',
                    data: '3st November, 2002'
                },
                {
                    squad: {
                        name: 'Ninga Gaming',
                        img: '1.png',
                        imgBack: 'm1.png',
                    },
                    ora: '11.45',
                    data: '5st November, 2002'
                }
            ]


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
    <section class="">
        <div class="container">
            <AppMainTop titleSection="Trending Games" title="Choose Who Is The Best In World!"
                :arrayGames="nextMatches" />
            <div class="row justify-content-around">
                <div v-for="nxtMatch, i in nextMatches" v-show="i < 3" class="col-4 p-4 rounded" id="infoMatch">
                    <div class="text-end position-relative" id="containerImgMatch">
                        <img :src="getImg(nxtMatch.squad.imgBack)" class="bg-opacity-75" id="bgImg" alt="">
                        <img :src="getImg(nxtMatch.squad.img)"
                            class="h-75 position-absolute position-absolute top-50 start-50 translate-middle" alt="">
                    </div>
                    <div class="text-white text-center pt-4">
                        <h2>{{ nxtMatch.squad.name }}</h2>
                        <a href="" class="d-inline-block rounded-circle"><img src="../assets/image (13).svg"
                                class="imgLink" alt=""></a>
                        <a href="" class="d-inline-block rounded-circle ms-2"><img src="../assets/image (14).svg"
                                class="imgLink" alt=""></a>
                        <h4 class="mt-3">{{ nxtMatch.ora }}</h4>
                        <p>{{ nxtMatch.data }}</p>
                        <button type="button" class="btn myBtn">View More</button>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url('../assets/v-bg.png');
    background-size: cover;
    background-position: center;
    padding: 10rem 0;
    position: relative;
}

section::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 25, 53, 0.8);
}

.container {
    position: relative;
}

h1 {
    font-size: 4rem;
}

h4 {
    font-size: 4rem;
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}

#containerImgMatch {
    background-color: rgb(26, 25, 53);
    border-radius: 25px;
}

#bgImg {
    filter: brightness(50%);
    opacity: 0.3;
}

#infoMatch {
    background-color: rgb(32, 32, 70);
    width: calc(100% / 3 - 0.5rem);
}

.imgLink {
    color: white;
    width: 1.5rem;
    margin: 0 0.5rem;
}

a {
    background-color: rgb(00, 172, 77);
    width: 3rem;
    line-height: 3rem;
}

.myBtn {
    width: 7rem;
    aspect-ratio: 0;
    color: black;
    background-color: rgb(5, 204, 124);
}

.myBtn:hover {
    background-color: rgb(32, 32, 70);
    color: rgb(5, 204, 124);
    border: 1px solid rgb(5, 204, 124);
}
</style>