<script>
// import FILE from 'PERCORSO';
export default {
    name: "",
    components: {

    },
    props: {
        titleSection: String,
        title: String,
        arrayGames: Array,
    },
    data() {
        return {
        }
    },
    methods: {
        next() {
            this.arrayGames.push(this.arrayGames[0])
            this.arrayGames.shift()

        },
        back() {
            let lastImg = this.arrayGames[this.arrayGames.length - 1]
            this.arrayGames.unshift(lastImg)
            this.arrayGames.pop()
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="row mb-3 justify-content-between">
        <div class="col-8">
            <h5 class="text-success">{{ titleSection }}</h5>
            <h1 class="text-white">{{ title }}</h1>
        </div>
        <div class="col-3 text-end align-self-end">
            <button @click="next()" class="rounded-circle">
                <img src="../assets/image (11).svg" style="height: 1rem; " alt="">
            </button>
            <button class="rounded-circle">
                <img @click="back()" src="../assets/image (12).svg" style="height: 1rem; " alt="">
            </button>
        </div>

    </div>
</template>

<style scoped>
h1 {
    font-size: 4rem;
}

a {
    width: 3rem;
    height: 3rem;
    background-color: rgb(5, 204, 124);
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}
</style>
