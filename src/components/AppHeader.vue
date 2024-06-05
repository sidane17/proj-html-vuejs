<script>
import store from '../data/store.js';

export default {
    data() {
        return {
            store,
            links: [
                {
                    text: "HOME",
                    url: "#HOME",
                    subLinks: [
                        "HOME ONE",
                        "HOME TWO",
                        "HOME THREE",
                        "HOME FOUR"
                    ]
                },
                {
                    text: "PAGES",
                    url: "#PAGES",
                    subLinks: [
                        "ABOUT US",
                        "MATCHES",
                        "TEAM",
                        "SQUAD",
                        "SQUAD DETAILS",
                        "COMING SOON",
                        "404"
                    ]
                },
                {
                    text: "TOURNAMENT",
                    url: "#TOURNAMENT",
                },
                {
                    text: "SHOP",
                    url: "#SHOP",
                    subLinks: [
                        "SHOP PAGE",
                        "SHOP DETAILS",
                        "CART PAGE"
                    ]
                },
                {
                    text: "BLOG",
                    url: "#BLOG",
                    subLinks: [
                        "BLOG PAGE",
                        "BLOG SINGLE"
                    ]
                },
                {
                    text: "CONTACT",
                    url: "#CONTACT",
                }
            ],

            socials: [
                {
                    social: "Facebook",
                    urlSocial: "../assets/image(4).svg"
                },
                {
                    social: "Twitter",
                    urlSocial: "../assets/image(5).svg"
                },
                {
                    social: "Linkedin",
                    urlSocial: "../assets/image(6).svg"
                },
                {
                    social: "Instagram",
                    urlSocial: "../assets/image(7).svg"
                },
            ],
        }
    }
}
</script>

<template>
    <header class="my-bg">
        <div class="container">
            <div class="flex row align-items-center py-3 px-0 w-100">
                <figure class="col-2 mx-0 px-0">
                    <img src="../assets/menulogo.png" class="img-fluid" alt="">
                </figure>
                <nav class="col-9 p-0">
                    <ul class=" flex row m-0 p-0 px-2 w-100 justify-content-center">
                        <li v-for="link in links" class="col-1 px-0 mx-0 ">
                            <a :href="link.url" class="text-decoration-none hover">
                                <b>{{ link.text }}</b>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="col-1 flex row justify-content-between m-0 p-0">
                    <div class="col-6 bg-light my-size shop-zone">
                        <a href="search" class="violet-c "><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <div class="col-6 bg-light my-size shop-zone">
                        <a href="bag" class="violet-c"><i class="fa-solid fa-bag-shopping"></i></a>
                    </div>
                </div>
            </div>

            <div class="text-center myp ">
                <h6>WELCOME TO RAXG</h6>
                <h1 class="my-3">ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
                <ul class="flex row align-items-center justify-content-center py-4">
                    <li class="col-2"><button type="button" class="btn btn-green">Read More <i
                                class="fa-solid fa-arrow-right"></i></button></li>
                    <li class="col-2"><button type="button" class="btn btn-green"><i
                                class="fa-solid fa-circle-play"></i></button></li>
                </ul>
            </div>

            <div>
                <ul class="banner-social">
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.my-bg {
    height: 100vh;
    background-image: url(../assets/banner1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    color: white;
}

a {
    text-decoration: none;
    color: white;

}

li {
    list-style-type: none;
}

.hover:hover {
    color: #00AC4D;
}

li:nth-child(3) {
    width: 16.66666667%;
}

.shop-zone {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    line-height: 45px;
}

h1 {
    font-size: 5rem;
}

h6 {
    color: #00AC4D;
}


.violet-c {
    color: #333287;
}



.my-size {
    width: 40px;
    height: 40px;
}

.btn-green {
    background-color: #00AC4D;
    color: #333287;
    padding: 20px;
}

.banner-social {
    position: absolute;
    top: 45%;
    left: 10%;
    transform: translate(-50%, -50%);
}

.banner-social>li {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    line-height: 45px;
    background-color: #202046;
    text-align: center;
}

.banner-social>li:hover {
    background-color: #00AC4D;
}
</style>