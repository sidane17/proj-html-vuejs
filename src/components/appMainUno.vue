<script >
import store from "../data/store.js"
import AppMainTop from "./AppMainTop.vue"

export default{
    components:{
        AppMainTop
    },
    data(){
        return{
            store,

            games:[{
                name:"Assaaain creed",
                url:"v-small1.png"
            },{
                name:"Call Of Deaudy",
                url:"v-small2.png" 
        }]
           
        }
    },
    methods:{
        print(){
            console.log(store);
        },
        next() {
            this.games.push(this.games[0])
            this.games.shift()
        },
        back() {
            let lastImg = this.games[this.games.length - 1]
            this.games.unshift(lastImg)
            this.games.pop()
        },
        getImg(gameImg) {
            let risultato = new URL(`../assets/${gameImg}`, import.meta.url);
            return risultato.href;
        }
    },
    
  
}
</script>


<template>
    <!-- sezione UNO -->
    <div class=" container_sezione1 ">
        <div class="container container_squad rounded d-flex">
            <div class="card_squad col-2">
                <img src="../assets/1.png" alt="" width="calc(100%/6)">
            </div>
            <div class="card_squad col-2">
                <img src="../assets/2.png" alt="" width="calc(100%/6)">
            </div>
            <div class="card_squad col-2">
                <img src="../assets/3.png" alt="" width="calc(100%/6)">
            </div>
            <div class="card_squad col-2">
                <img src="../assets/4.png" alt="" width="calc(100%/6)">
            </div>
            <div class="card_squad col-2">
                <img src="../assets/5.png" alt="" width="calc(100%/6)">
            </div>
            <div class="card_squad col-2">
                <img src="../assets/6.png" alt="" width="calc(100%/6)">
            </div>
        </div>
        <div class="sub_container w-100 mt-5 d-flex container">
            <!-- sezione UNO-uno -->
            <div class="col-6  d-flex justify-content-center align-items-center">
                <div class="container_img  d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center align-items-center" style="z-index: 1;">
                        <img src="../assets/exprince.jpg" alt="" width="300px" style="aspect-ratio: 1/1;">
                    </div>
                    <div class=" sCube"><img src="../assets/shape1.png" alt="" width="200px"></div>
                    <div class=" bCube"><img src="../assets/shape2.png" alt="" width="300px" style="z-index: 0;"></div>
                    <div class="exp"><img src="../assets/exprience-shape.png" alt=""></div>
                </div>
            </div>
            <!-- sezione UNO-due -->
            <div class="col-6 d-flex justify-content-center align-items-center flex-column">
                <p>12 Year Experience</p>
                <h2> We are the best Gaming Company</h2>
                <p class="m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eaque porro aut numquam ad cumque accusamus voluptas, nemo at nesciunt nam in dolor soluta vitae, eum animi consequuntur ipsa ut.</p>
                <ul>
                    <li><i class="fa-regular fa-circle-check me-2 green"></i>Sed porttitor lectus nibh. Proin eget tortor risus.</li>
                    <li><i class="fa-regular fa-circle-check me-2 green"></i>Sed porttitor lectus nibh. Proin eget tortor risus.</li>
                    <li><i class="fa-regular fa-circle-check me-2 green"></i>Sed porttitor lectus nibh. Proin eget tortor risus.</li>
                    <li><i class="fa-regular fa-circle-check me-2 green"></i>Sed porttitor lectus nibh. Proin eget tortor risus.</li>
                </ul>
                <div class="d-flex text-black">
                    <div class="p-3 b me-2 rounded d-flex justify-content-center align-items-center">Discover more <i class="fa-solid fa-arrow-right ms-2"></i></div>
                    <a href="#" class="a rounded-circle d-flex justify-content-center align-items-center"><i class="fa-solid fa-play"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- sezione DUE -->
    <div class="container_sezione2 ">
        <div class="container d-flex flex-wrap">
        <div class="col-6 d-flex flex-column text-light justify-content-center " >
            <p class="text-success"><b> Our Extreme Feature</b></p>
            <h2 class="mb-4 fs-1"><b>The best gaming arena on the World</b></h2>
            <p class="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, voluptatem. Dolore ipsa eligendi, veritatis aspernatur cumque, pariatur accusamus voluptatem ducimus voluptates molestiae ut quod iure unde consequatur ad optio vero?</p>

        </div>
        <div class="col-6 d-flex flex-wrap">
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded" style="background-color:rgb(10, 169, 110) ; color:rgb(23, 30, 67);">
                <div class="circle d-flex justify-content-center align-items-center flex-column big">
                    <img src="../assets/feature1.png" alt="" width="75px" height="75px" class="">
                    
                </div>
                <span class="fs-4"><b>Live Streaming</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded">
                <div class="circle d-flex justify-content-center align-items-center flex-column big">
                    <img src="../assets/feature2.png" alt="" width="75px" height="75px" >
                    
                </div>
                <span class="fs-4"><b>Gaming News</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded"  >
                <div class="circle d-flex justify-content-center align-items-center flex-column big">
                    <img src="../assets/feature3.png" alt="" width="75px" height="75px" >
                    
                </div>
                <span class="fs-4"><b>Great Tournament</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded">
                <div class="circle d-flex justify-content-center align-items-center flex-column big">
                    <img src="../assets/feature4.png" alt="" width="75px" height="75px" >
                    
                </div>
                <span class="fs-4"><b>Awward Ceremony</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
        </div>
    </div>
    </div>
    <!-- sezione TRE -->
    <div class="container_sezione3" >
        <div class="container d-flex align-items-center">
            <div class="containerVideo col-6 d-flex flex-column justify-content-center align-items-center  ">
                <div class="play p-4 bg-">
                    <!-- <i class="fa-solid fa-play text-light fs-4"></i> -->
                    <a href="#" id="a"><i class="fas fa-play"></i></a><span></span>
                </div>
                <p class="text-light mt-2"><b>Call Of Deauty</b></p>
            </div>
            <div class="col-6 d-flex justify-content-center ms-4 flex-column">
                <!-- <p class="text-success fs-5"><b>Live Streaming</b></p>
                <h2 class="text-light ">Checkout Our Live Streaming</h2> -->
                <AppMainTop titleSection="Live streming" title="Checkout Our Live Streaming" :arrayGames="games"/>
                <div class="containerCarousel d-flex">
                    <div v-for="game in games" class="cardSlide"  >
                        <img  :src="getImg(game.url)" alt="" style="width:20rem;  margin-bottom:1rem">
                        <span ><b>{{ game.name }}</b></span>
                        <p class="mt-1">Vestibulum ac diamo sit amet quam vehicula elementum sed sit armet dui</p>
                    </div>
                    <!-- carousel -->

                    <!-- <div id="carouselExample" class="carousel slide" style="height: 100%;">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../assets/v-small2.png" class="h " alt="">
                            </div>
                            <div class="carousel-item ">
                            <img src="../assets/v-small1.png" class="h " alt="">
                            </div>
                            
                        </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> -->
                </div> 
            </div>
        </div>
    </div>
</template>
<style scoped>
.h{
    width:20rem ;
    border-radius:20px
}
li{
    list-style: none;
    
}
.green{
    color: green;
}

.a{
    
 width:3rem;
 height: 3rem;
 background-color: rgb(7, 203, 127);
 color:  rgb(24, 25, 53);
}
.b{
 width:fit-content;
 height: 3rem;
 background-color: rgb(7, 203, 127);
}
.sub_container{
    
    height: 60%;
    color: white;
}
.container_sezione1{
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    background-color: rgb(24, 25, 53);
    position: relative;
    display: flex;
    align-items: center;
}
.container_squad{
    position: absolute;
    top:1%;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 2;
    height: 10rem;
    background-color: rgb(33, 32, 71);
}
.card_squad{
    
    height: 100%;
}

/* sezione uno-due */
.container_img{
    aspect-ratio: 1/1;
    height: 100%;
    position: relative;
}
.bCube{
    position: absolute;
    top: 0;
    left: 0;
}
.sCube{
    position: absolute;
    right: 0;
    bottom: 0;
}
.exp{
    
    position: absolute;
    right: 350px;
    top:10px;
}
/* SEZIONE 2  */
.container_sezione2{
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    background-image: url(../assets/Vector.png);
    background-color: rgb(25, 24, 67);
    display: flex;
    justify-content: center;
    align-items: center;

}
.cardGame{
    width: 17rem ;
    aspect-ratio: 1/1;
    color: white;
    background-color: rgb(52, 50, 134);
    
    
}
.cardGame:hover{
    background-color: rgb(10, 169, 110);
    color:rgb(47, 47, 86);
}
.cardGame:hover .big{
    transition: 0.2s;
 transform: scale(1.1);
}
.circle{
    width: 7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: rgb(55, 55, 89);
}
/* sezione TRE */
.container_sezione3 {
    height: 100vh;
    height: fit-content;
    
    width: 100%;
    background-image: url(../assets/v-bg.png);
    background-color: rgb(47, 47, 86) ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerVideo{
    height: 35rem;
    background-image: url(../assets/v-1.png);
    background-size: cover ;
    background-position: center;
    border-radius: 20px;
    
}
.containerSlider{
    aspect-ratio: 4/3;
  
}
.play{
    aspect-ratio: 1/1;
    /* width: 5rem; */
    /* background-color: rgb(43, 136, 68); */
    border-radius: 50% ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerCarousel{
    height: fit-content;
    width: fit-content;
  
}
.cardSlide{
    margin: 1rem;
    color: white;
}
#a {
            text-decoration: none;
            aspect-ratio: 1/1;
            width: 5rem;
            background-color: rgb(43, 136, 68);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: x-large;
            
            color: aliceblue;
            border-radius: 50%;
            padding: 15px;
            position: relative;
        }

        #a::after {
            position: absolute;
            content: '';
            bottom: -7px;
            top: -7px;
            left: -7px;
            right: -7px;
            background-color: transparent;
            border-radius: 50%;
            border: 4px solid 4px solid #20d12f;
            margin: 0px;
            opacity: 1;
            transform-origin: center;
            animation: anim 800ms linear infinite;
        }

        #a::before {
            position: absolute;
            content: '';
            bottom: -7px;
            top: -7px;
            left: -7px;
            right: -7px;
            background-color: transparent;
            border-radius: 50%;
            border: 4px solid #20d12f;
            margin: 0px;
            opacity: 0.8;
            transform-origin: center;
            animation: anim 1000ms linear 1000ms infinite;
        }

        @keyframes anim {
            from {
                margin: 0px;
                opacity: 1;
            }

            to {
                margin: -15px;
                opacity: 0;
            }
        }

        /* span {
            color: #fff;
            font-family: sans-serif;
            font-weight: 600;
            margin-left: 20px;
        }  */
</style>