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
 <div class="container_7 ">
    <div class="container s7" >
        <AppMainTop titleSection="Team Members" title="Our Experts Team Members" :arrayGames="teams"/>
        <div class="container_card d-flex">
        <div class="teamCard" v-for="team in teams"> 
             <div class="containerImg">
                <img :src="getImg(team.urlImg)" alt="">
                
            </div>
            <span class="fs-5"><b>{{ team.name }}</b></span>
            <p>{{team.ruolo}}</p>
         </div>
    </div>
    
</div>
 </div>
</template>

<style>
.container_7{
    height: 100vh;
    background-color:rgb(25, 25, 53) ;
    
}
.s7{
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container_card{
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
}
.teamCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    color: white;
    width: 20rem;
    margin: 1rem;
    background-color: rgb(21, 34, 87);
}
.teamCard:hover {
    background-color: rgb(5, 203, 125);
}
.containerImg{
    height: fit-content;
    width: 100%;
    
    
    margin-bottom: 1rem;

}
img{
    width: 100%;
}
</style>


