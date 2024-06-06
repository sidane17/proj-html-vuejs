<script>
// import FILE from 'PERCORSO';
import store from '../data/store.js'
export default {
    name: "AppMain4",
    components: {
    },
    props: {
    },
    data() {
        return {
            store,
            matches: [
                {
                    visible: true,
                    squadOne: {
                        name: 'Ninga Gaming',
                        state: 'Italy',
                        img: 't3.png'
                    },
                    squadTwo: {
                        name: 'Witch Gaming',
                        state: 'USA',
                        img: 't4.png'
                    },
                    game: 'PUBG Battelground',
                    desc: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    ora: '10.45',
                    data: '1st November, 2022'
                },
                {
                    visible: true,
                    squadOne: {
                        name: 'King Gaming',
                        state: 'England',
                        img: 't1.png'
                    },
                    squadTwo: {
                        name: 'Witch Astro',
                        state: 'India',
                        img: 't2.png'
                    },
                    game: 'Assassin\'s Creed',
                    desc: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    ora: '09.45',
                    data: '1st November, 2022'
                },
                {
                    visible: true,
                    squadOne: {
                        name: 'Dng Gaming',
                        state: 'Russia',
                        img: 't5.png'
                    },
                    squadTwo: {
                        name: 'Joker Gaming',
                        state: 'Canada',
                        img: 't6.png'
                    },
                    game: 'Mortal Combat X',
                    desc: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    ora: '08.45',
                    data: '1st November, 2022'
                },
                {
                    visible: true,
                    squadOne: {
                        name: 'Shark Gaming',
                        state: 'Mexico',
                        img: 't7.png'
                    },
                    squadTwo: {
                        name: 'Krull Gaming',
                        state: 'Spain',
                        img: 't8.png'
                    },
                    game: 'Call Of Deauty',
                    desc: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    ora: '04.45',
                    data: '1st November, 2022'
                }

            ],
            gamesVS: [
                'ALL',
                'PUBG',
                'AC',
                'COD',
                'MCX',
            ]
        }
    },
    methods: {
        visibleGame(game) {
            for (let i = 0; i < this.matches.length; i++) {
                const gameSelected = this.matches[i];
                gameSelected.visible = false
            }
            if (game == 'PUBG') {
                for (let i = 0; i < this.matches.length; i++) {
                    const gameSelected = this.matches[i];
                    if (gameSelected.game == 'PUBG Battelground') {
                        gameSelected.visible = true
                    }
                }
            } else if (game == 'AC') {
                for (let i = 0; i < this.matches.length; i++) {
                    const gameSelected = this.matches[i];
                    if (gameSelected.game == 'Assassin\'s Creed') {
                        gameSelected.visible = true
                    }
                }
            } else if (game == 'COD') {
                for (let i = 0; i < this.matches.length; i++) {
                    const gameSelected = this.matches[i];
                    if (gameSelected.game == 'Call Of Deauty') {
                        gameSelected.visible = true
                    }
                }
            } else if (game == 'MCX') {
                for (let i = 0; i < this.matches.length; i++) {
                    const gameSelected = this.matches[i];
                    if (gameSelected.game == 'Mortal Combat X') {
                        gameSelected.visible = true
                    }
                }
            } else if (game == 'ALL') {
                for (let i = 0; i < this.matches.length; i++) {
                    const gameSelected = this.matches[i];
                    gameSelected.visible = true
                }
            }

        },
        // FUNZIONE PER ESTRARRE UN OGGETTO DALL'ARRAY DELLE SQUADRE TOTALI
        /*
        getObj(nomeSquad) {
            for (let i = 0; i < this.store.squads.length; i++) {
                const squadOne = this.store.squads[i];
                if (squadOne.name == nomeSquad) {
                    return squadOne
                }
            }
        },
        */
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
<!-- getImg(getObj('Ninga Gaming').imgMid) -->
<!-- getObj('Ninga Gaming').state -->
<template>
    <section class="p-5">
        <div class="container text-center">
            <h5 class="text-success">Trending Battle</h5>
            <h1 class="text-white">Upcoming Match</h1>
            <ul class="list-group list-group-horizontal justify-content-center mb-3">
                <li v-for="game in gamesVS" @click="visibleGame(game)" class="list-group-item">{{ game }}</li>
            </ul>
            <!-- CREAZIONE CARD PER I MATCHES -->
            <div v-for="match in matches" v-show="match.visible"
                class="p-4 cardMatch row justify-content-between rounded border border-success mb-3">
                <div class="col-5 row text-white justify-content-between align-items-center">
                    <!-- CARD SFIDANTI DI CASA -->
                    <div class="card p-0 border-0 h-100">
                        <img :src="getImg(match.squadOne.img)" class="card-img-top p-3 myBgColorCard myImgSquad" alt="">
                        <div class="card-body  text-start">
                            <p class="card-text text-success">{{ match.squadOne.state }}</p>
                            <h5 class="card-title text-white">{{ match.squadOne.name }}</h5>
                        </div>
                    </div>

                    <h2 class="text-success rounded">VS</h2>
                    <!-- CARD SFIDANTI SQUADRA OSPITE -->
                    <div class="card p-0 border-0 h-100">
                        <img :src="getImg(match.squadTwo.img)" class="card-img-top p-3 myBgColorCard myImgSquad" alt="">
                        <div class="card-body  text-start">
                            <p class="card-text text-success">{{ match.squadTwo.state }}</p>
                            <h5 class="card-title text-white">{{ match.squadTwo.name }}</h5>
                        </div>
                    </div>
                </div>
                <!-- INFORMAZIONI DEL MATCH -->
                <div class="col-7 text-white row align-items-center justify-content-between">
                    <div class="col-7 text-start">
                        <h1>{{ match.game }}</h1>
                        <p>{{ match.desc }}</p>
                    </div>
                    <div class="col-4 rounded p-3 myBgColorCard" id="infoMatch">
                        <h4>{{ match.ora }}</h4>
                        <p>{{ match.data }}</p>
                        <a href="" class="d-inline-block rounded-circle"><img src="../assets/image (13).svg"
                                class="imgLink" alt=""></a>
                        <a href="" class="d-inline-block rounded-circle ms-2"><img src="../assets/image (14).svg"
                                class="imgLink" alt=""></a>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
section {
    background-color: rgb(20, 25, 53);
}

li {
    background-color: rgb(20, 25, 53);
    border: none;
    color: white;
}

.myBgColorCard {
    background-color: rgb(26, 25, 53);
}

.card {
    width: calc(100% / 3);
    background-color: rgb(21, 34, 88);
}

.cardMatch {
    background-color: rgb(32, 32, 70);
}

.myImgSquad {
    aspect-ratio: 1;
    width: 100%;
}

h2 {
    width: 7rem;
    line-height: 7rem;
    background-color: rgb(26, 25, 53);
}

h4 {
    font-size: 2rem;
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


/* CSS PER L'HOVER DELLA CARD */
.cardMatch:hover {
    background-color: rgb(51, 50, 135);
    border: unset;
}

.cardMatch:hover #infoMatch {
    background-color: rgb(5, 204, 124);
    color: black;
}

.cardMatch:hover a {
    background-color: rgb(26, 25, 53);
}

.cardMatch:hover .imgLink {
    filter: invert(100%);
}
</style>