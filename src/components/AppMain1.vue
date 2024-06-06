<script >
// import store from "../"
// export default{
//     data(){
//         return{
//             store
//         }
//     },
  
// }
// </script>


<template>
    <div class=" container_sezione1">
        <div class="container container_squad rounded">
            <div class="card_squad col-2"></div>
        </div>
        <div class="sub_container w-100 mt-5 d-flex">
            <!-- sezione UNO-uno -->
            <div class="col-6 border d-flex justify-content-center align-items-center">
                <div class="container_img border d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center align-items-center" style="z-index: 1;">
                        <img src="../assets/exprince.jpg" alt="" width="350px" style="aspect-ratio: 1/1;">
                    </div>
                    <div class="align-self-start justify-self-start sCube"><img src="../assets/shape2.png" alt="" width="200px"></div>
                    <div class="align-self-end bCube"><img src="../assets/shape1.png" alt="" width="100px" style="z-index: 0;"></div>
                </div>
            </div>
            <!-- sezione UNO-due -->
            <div class="col-6 border d-flex justify-content-center align-items-center flex-column">
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
                    <div class="p-2 b me-2 rounded">Discover more</div>
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
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded">
                <div class="circle d-flex justify-content-center align-items-center flex-column">
                    <img src="../assets/feature1.png" alt="" width="75px" height="75px">
                    
                </div>
                <span class=""><b>Live Streaming</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded">
                <div class="circle d-flex justify-content-center align-items-center flex-column">
                    <img src="../assets/feature2.png" alt="" width="75px" height="75px">
                    
                </div>
                <span class=""><b>Gaming News</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded"  >
                <div class="circle d-flex justify-content-center align-items-center flex-column">
                    <img src="../assets/feature3.png" alt="" width="75px" height="75px">
                    
                </div>
                <span class=""><b>Great Tournament</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
            <div class="cardGame d-flex align-items-center justify-content-center flex-column m-2 rounded">
                <div class="circle d-flex justify-content-center align-items-center flex-column">
                    <img src="../assets/feature4.png" alt="" width="75px" height="75px">
                    
                </div>
                <span class=""><b>Awward Ceremony</b></span>
                <p class="text-center">Nulla porttitor accusuam tincidunt.Pellentesque in.</p>
            </div>
        </div>
    </div>
    </div>
    <!-- sezione TRE -->
    <div class="container_sezione3">
        <div class="container d-flex">
            <div class="containerVideo col-6 d-flex flex-column justify-content-center align-items-center  ">
                <div class="play p-4 bg-">
                    <i class="fa-solid fa-play text-light fs-4"></i>
                </div>
                <p class="text-light mt-2"><b>Call Of Deauty</b></p>
            </div>
            <div class="col-6 d-flex justify-content-center ms-4 flex-column">
                <p class="text-success fs-5"><b>Live Streaming</b></p>
                <h2 class="text-light ">Checkout Our Live Streaming</h2>
                <div class="containerCarousel">
                    <!-- carousel -->

                    <div id="carouselExample" class="carousel slide" style="height: 100%;">
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
                        </div>

                     
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
 background-color: greenyellow;
}
.b{
 width:fit-content;
 height: 3rem;
 background-color: greenyellow;
}
.sub_container{
    border-style: dashed;
    height: 60%;
    color: white;
}
.container_sezione1{
    width: 100%;
    height: 100vh;
    background-color: rgb(48, 48, 101);
}
.container_squad{
    
    height: 10rem;
    background-color: blueviolet;
}
.card_squad{
    border-style: dashed;
    height: 100%;
}
.border{
    border-style: dashed;
}
/* sezione uno-due */
.container_img{
    aspect-ratio: 1/1;
    height: 90%;
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
/* SEZIONE 2  */
.container_sezione2{
    height: 100vh;
    width: 100%;
    background-image: url(../assets/Vector.png);
    background-color: rgb(47, 47, 86) ;
    display: flex;
    justify-content: center;
    align-items: center;

}
.cardGame{
    width: 17rem ;
    aspect-ratio: 1/1;
    
    background-color: rgb(111, 229, 65);
    
    
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
    width: 100%;
    background-image: url(../assets/v-bg.png);
    background-color: rgb(47, 47, 86) ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerVideo{
    aspect-ratio: 4/3;
    background-image: url(../assets/v-1.png);
    background-size: cover ;
    background-position: center;
    border-radius: 20px;
    
}
.containerSlider{
    aspect-ratio: 4/3;
    border-style: dashed;
}
.play{
    aspect-ratio: 1/1;
    width: 5rem;
    background-color: rgb(43, 136, 68);
    border-radius: 50% ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerCarousel{
    height: 15rem;
    width: 50%;
    border-style:dashed;
}
</style>