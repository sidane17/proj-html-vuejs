<script>

import store from "../data/store.js"
import AppMainTop from "./AppMainTop.vue"

export default{
    components:{
        AppMainTop
    },
    data(){
        return{  
            store,

            teams:
            [
                    {
                        urlImg:"team1.png",
                        name:"Cristiano Messi",
                        ruolo:"CEO/Founder"
                    },
                    {
                        urlImg:"team2.png",
                        name:"Sergio Naymer",
                        ruolo:"Programmer"
                    },
                    {
                        urlImg:"team3.png",
                        name:"Antonela Roccuzzo",
                        ruolo:"Progect Manager"
                    },
                    {
                        urlImg:"team4.png",
                        name:"Lionel Ramos",
                        ruolo:"Game Design"
                    }
        
            ],
           
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
    }
  
}

</script>

<template>
<div class="container_Footer">
    <div class="container h" style="height: 100%;">
       
            <div class="f border-bottom pb-5">
                <div class="col-6 d-flex justify-content-between">
                    <img src="../assets/menulogo.png" alt="">
                   

                </div>
                <div class="col-6 d-flex align-items justify-content-evenly  ">
                        <ul class="d-flex gap-4">
                            <a href="#" ><b>HOME</b></a>
                            <a href="#"><b>PAGES</b></a>
                            <a href="#" ><b>TOURNAMENT</b></a>
                            <a href="#" ><b>SHOP</b></a>
                            <a href="#" ><b>SHOPBLOG</b></a>
                            <a href="#" ><b>CONTACT</b></a>
                        </ul>
                    </div>
            </div>
            <div class="f w-100">
                <div class="w-50 d-flex ">
                    <div class="col-8 d-flex align-items-center justify-content-between fs-6">
                        <span><b>Copiright © RaxG| Designed By</b><b class="text-success">NextGenerationDev</b></span>
                    </div>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-evenly  ">
                        <ul class="d-flex gap-4">
                            <div class="social"><i class="fa-brands fa-facebook"></i></div>
                            <div class="social"><i class="fa-brands fa-twitter"></i></div>
                            <div class="social"><i class="fa-brands fa-linkedin"></i></div>
                            <div class="social"><i class="fa-brands fa-instagram"></i></div>
                        </ul>
                    </div>
                
            </div>

        </div>

    </div>

</template>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
.h{
    height: 100%;
    color:white;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
}
.container_Footer{
    width: 100%;
    height: 25rem;
    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(../assets/footer-bg.png) ;
    /* background-image: */
    
    background-size: cover ;
}

.footer{
    height: 10rem;
display: flex;
justify-content: center;
align-items: center;

color: white;


}
.f{
    height: 7rem;
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
}
.f1{
    border-style:dashed ;

}
.social{
    width: 2.5rem;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items:center ;
    background-color: rgb(32, 33, 70);
    border-radius: 50%;
    
}
</style>


