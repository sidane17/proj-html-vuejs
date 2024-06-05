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

            tester:[
        {
            imgTester:"test1.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"test2.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"test3.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"test4.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
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
 <div class="container_8 ">
    <div class="sfondoUno"></div>
    <div class="sfondoDue"></div>
    <div class="container s8" >
        <AppMainTop titleSection="Testimonials" title="What Our Client Say" :arrayGames="tester" />
        <div class="container_card d-flex">
        <div class="testCard" v-for="test in tester"> 
             <div class="containerImg rounded">
                <img :src="getImg(test.imgTester)" alt="" width="100%">
            </div>
            <div class="overlay p-4">
                <i class="fa-solid fa-quote-left vUp"></i>
                <div class="text">Lorem ipsum dolor sit amet consectetur adipiupiditate numquam excepturi ab,  </div>
                <div class="w-100 d-flex flex-column id">
                    <p class="fs-5" style="color: rgb(1, 172, 78);;"><b>{{ test.nameTester }}</b></p>
                    <p>{{ test.roleTester }}</p>
                </div>
            </div>
            
         </div>
    </div>
    
    </div>
 </div>
</template>

<style scoped>
.id{
    position: absolute;
    bottom: 0;
}
.overlay{
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .3s ease;
    background-color: rgb(25, 25, 53);
    color: white;
}
.vUp{
    color: rgb(1, 172, 78);
    font-size: 2rem;
}
.text{
    margin-top: 1rem;
    color: white;
  font-size: 20px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -60%); */
  text-align: center;
}
.testCard:hover .overlay{
    opacity: 1;
}
.s8{
    padding-top:3rem ;
    color: white;
    position: relative;
    z-index: 1;
}
.container_8{
    height: 100vh;
    background-color:rgb(32, 33, 71) ;
    position: relative;
    display: flex;
    align-items: center;
}
.containerImg{
    width: 100%;
    margin-bottom: 1rem;
}
.sfondoUno{
    position: absolute;
    top:0;
    right: 0;
   
    color: white;
    height: 100%;
    width: 60%;
    background-image: url(../assets/test-group.png);
    background-size: cover ;
    z-index:0 ;
}
.sfondoDue{
    position: absolute;
    bottom:0;
    left: 0;
  
    color: white;
    height: 50%;
    width: 50%;
    background-image: url(../assets/test-grouptwo.png);
    background-size: cover ;
    z-index: 0;
}
.container_card{
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
.testCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 22rem;
    color: white;
    width: 22rem;
    margin: 0.5rem;
    overflow: hidden;
    position: relative;
}
img{
    height: 100%;
    width: 100%;
}
</style>


