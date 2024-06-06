<script>
// import FILE from 'PERCORSO';
import AppMainTop from "./AppMainTop.vue"
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {
            lastNews: [
                {
                    img: 'b1.png',
                    title: 'Ninja Warrior Gaming',
                    author: 'Admin2',
                    data: 'Oct 24, 2002'
                },
                {
                    img: 'b2.png',
                    title: 'Gost Rider Returns',
                    author: 'Admin',
                    data: 'Oct 25, 2002'
                },
                {
                    img: 'b3.png',
                    title: 'Call Of Deauty 4',
                    author: 'Admin3',
                    data: 'Oct 21, 2002'
                },
                {
                    img: 'b4.png',
                    title: 'Mortal Combat X',
                    author: 'Admin1',
                    data: 'Oct 25, 2002'
                },
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
    <section>
        <div class="container">
            <AppMainTop titleSection="Latest News" title="Stay Updated With our Latest News Articles"
                :arrayGames="lastNews" />
            <div class="row justify-content-around">
                <div v-for="lastNew, i in lastNews" class="p-0 rounded" id="infoNews">
                    <img :src="getImg(lastNew.img)" class="w-100" alt="">
                    <div class="text-white text-center pt-4">
                        <h4>{{ lastNew.title }}</h4>
                        <div>
                            <p class="mt-3 d-inline-block border-end">
                                <i class="fa-brands fa-youtube"></i>
                                By {{ lastNew.author }}
                            </p>
                            <p class="d-inline-block">
                                <i class="fa-solid fa-calendar-days"></i>
                                {{ lastNew.data }}
                            </p>
                        </div>
                        <button type="button" class="btn myBtn mt-4 mb-3">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container rounded pt-4 pb-4" id="newsLetter">
            <div class="row align-items-center justify-content-around p-3">
                <h2 class="col-4 text-white">Our news Letter</h2>
                <div class="col-5 rounded-pill row justify-content-around align-items-center p-2" id="emailContainer">
                    <div class="col-8">
                        <i class="fas fa-message"></i>
                        <input type="text" placeholder="Enter Your Email" class="col-9">
                    </div>
                    <button class="col-3 rounded-pill" type="submit">Subscribe</button>

                </div>
            </div>
        </div>
        <div class="col-lg-6">

        </div>
    </section>
</template>

<style scoped>
#emailContainer i {
    color: rgb(0, 172, 77);
    margin-right: 0.5rem;
}

#emailContainer>button {
    font-weight: 600;
    width: 7rem;
    height: 2.5rem;
    background-color: rgb(0, 172, 77);
}

input {
    background-color: rgb(26, 25, 53);
    border: none;
}

input:focus {
    border: none;
}

#emailContainer {
    background-color: rgb(26, 25, 53);
}

section {
    background-color: rgb(26, 25, 53);
    padding: 5rem 0 10rem 0;
    position: relative;
}

p {
    padding: 0 1rem;
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}

#infoNews {
    background-color: rgb(32, 32, 70);
    width: calc(100% / 4 - 2rem);
    overflow: hidden;
}

#infoNews:hover h4 {
    color: rgb(0, 172, 77);
}

#infoNews:hover img {
    scale: 1.1;
}

p>i {
    color: rgb(0, 172, 77);
}

.myBtn {
    font-weight: 600;
    width: 8rem;
    aspect-ratio: 0;
    color: black;
    background-color: rgb(5, 204, 124);
}

.myBtn:hover {
    background-color: rgb(32, 32, 70);
    color: rgb(5, 204, 124);
    border: 1px solid rgb(5, 204, 124);
}

/*******************************/
#newsLetter {
    background-color: rgb(32, 32, 70);
    position: absolute;
    bottom: -7%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
}
</style>