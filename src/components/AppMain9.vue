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
            items: [
                {
                    item: 'Play Station 5',
                    rate: 4,
                    imgItem: 's1.png',
                    price: '€499.99'
                },
                {
                    item: 'Mouse UltraProX',
                    rate: 3,
                    imgItem: 's2.png',
                    price: '€59.99'
                },
                {
                    item: 'Vision Kinder Delux',
                    rate: 2,
                    imgItem: 's3.png',
                    price: '€99.99'
                },
                {
                    item: 'Cuffie RobotXZK',
                    rate: 3,
                    imgItem: 's4.png',
                    price: '€29.99'
                },
                {
                    item: 'Play Station 5Pro',
                    rate: 5,
                    imgItem: 's1.png',
                    price: '€799.99'
                },
                {
                    item: 'Vision Bauli',
                    rate: 3,
                    imgItem: 's3.png',
                    price: '€59.99'
                },
                {
                    item: 'Mouse MegaGazelle',
                    rate: 4,
                    imgItem: 's2.png',
                    price: '€99.99'
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
            <AppMainTop titleSection="Gamer Shop" title="Explore Our Shop" :arrayGames="items" />
            <div class="row justify-content-between">
                <div v-for="item, i in items" v-show="i < 4" class="card p-0" id="myItem">
                    <figure class="h-100 w-100">
                        <img :src="getImg(item.imgItem)"
                            class="card-img-top w-50 h-75 position-absolute top-50 start-50 translate-middle">
                        <div class="mb-5 w-100 row justify-content-center position-absolute bottom-0 start-50 translate-middle-x"
                            id="plus">
                            <div class="col-3 mycircle position-relative">
                                <img class="w-50 position-absolute top-50 start-50 translate-middle"
                                    src="../assets/image (16).svg" alt="">
                            </div>
                            <div class="col-3 mycircle position-relative">
                                <img class="w-50 position-absolute top-50 start-50 translate-middle"
                                    src="../assets/image (17).svg" alt="">
                            </div>
                            <div class="col-3 mycircle position-relative">
                                <img class="w-50 position-absolute top-50 start-50 translate-middle"
                                    src="../assets/image (18).svg" alt="">
                            </div>


                        </div>
                    </figure>
                    <div class="card-body">
                        <div class="text-white">
                            <span v-for="star in item.rate" id="star"><i
                                    class="fa-solid fa-star-half-stroke"></i></span>
                            <span v-for="star in (5 - item.rate)"><i class="fa-solid fa-star-half-stroke"></i></span>
                            <h3 class="card-title">{{ item.item }}</h3>
                            <p class="card-text text-success">{{ item.price }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
section {
    background-image: url('../assets/shop-bg.png');
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

#myItem {
    width: calc((100% / 4) - 1rem);
    aspect-ratio: 1;
    background-color: rgba(26, 25, 53, 0);
    border: 0px;
}

.mycircle {
    width: 3rem;
    height: 3rem;
    border-radius: 25px;
    margin: 0 0.5rem;
    background-color: rgb(51, 50, 135);
}

.mycircle>img {
    filter: invert(100%);
}

.mycircle:hover {
    background-color: rgb(0, 172, 77);
}

figure {
    background-color: rgb(26, 25, 53);
    border-radius: 25px;
    position: relative;
}

#plus {
    opacity: 0;
}

figure:hover #plus {
    opacity: 1;
}

#star {
    width: 1.5rem;
    height: 1.5rem;
    color: rgb(0, 172, 77);
}
</style>