<script >

</script>


<template>
    <div class=" container_sezione1">
        <div class="container container_squad rounded">
            <div class="card_squad col-2"></div>
        </div>
        <div class="sub_container w-100 mt-5 d-flex">
            <!-- sezione uno-uno -->
            <div class="col-6 border d-flex justify-content-center align-items-center">
                <div class="container_img border d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center align-items-center" style="z-index: 1;">
                        <img src="../assets/2.png" alt="" width="20rem" style="aspect-ratio: 1/1;">
                    </div>
                    <div class="align-self-start justify-self-start"><img src="../assets/shape2.png" alt="" width="100%"></div>
                    <div class="align-self-end"><img src="../assets/shape1.png" alt="" width="100%" style="z-index: 0;"></div>
                </div>
            </div>
            <!-- sezioneuno-due -->
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

</template>
<style>
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
</style>