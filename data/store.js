import { reactive } from 'vue';
const img = {
    shop:[{
        urlImgCart:"../assets/cart1.png",
        urlmImgShop:"../assets/s1.png",

        dispositivo:"Asus Rog Strix A53",
        costo:"$970.00 $999"
    },
    {
        urlImgCart:"../assets/cart2.png",
        urlmImgShop:"../assets/s2.png",

        dispositivo:"Asus Rog Strix A53",
        costo:"$970.00 $999"
    },
    {
        urlImgCart:"../assets/cart3.png",
        urlmImgShop:"../assets/s3.png",
        dispositivo:"Asus Rog Strix A53",
        costo:"$970.00 $999"
    },
    {
        urlmImgShop:"../assets/s3.png",

    }
    ],
    teams:[
        {
        urlImg:"../assets/team1.png",
        name:"Cristiano Messi",
        ruolo:"CEO/Founder"
    },
    {
        urlImg:"../assets/team2.png",
        name:"Sergio Naymer",
        ruolo:"Programmer"
    },
    {
        urlImg:"../assets/team3.png",
        name:"Antonela Roccuzzo",
        ruolo:"Progect Manager"
    },
    {
        urlImg:"../assets/team4.png",
        name:"Lionel Ramos",
        ruolo:"Game Design"
    }
        
    ], 
    squads: [
        {
            ImgSmall: '1.png',
            imgMid: 't3.png',
            imgBig: 'm1.png',
            name: 'Ninga Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '5.png',
            imgMid: 't4.png',
            imgBig: 'm2.png',
            name: 'Witch Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '3.png',
            imgMid: '',
            imgBig: 'm3.png',
            name: 'SkullG Gaming',
            state: 'italy'
        }, 
        {
            ImgSmall: '2.png',
            imgMid: 't1.png',
            imgBig: '',
            name: 'King Gaming',
            state: 'italy'
        }, 
        {
            ImgSmall: '6.png',
            imgMid: 't2.png',
            imgBig: '',
            name: 'Witch Astro',
            state: 'italy'
        },
        {
            ImgSmall: '1.png',
            imgMid: 't5.png',
            imgBig: '',
            name: 'Dng Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '1.png',
            imgMid: 't6.png',
            imgBig: '',
            name: 'Joker Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '1.png',
            imgMid: 't8.png',
            imgBig: '',
            name: 'Krull Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '4.png',
            imgMid: '',
            imgBig: '',
            name: 'Panda Gaming',
            state: 'italy'
        },
        {
            ImgSmall: '1.png',
            imgMid: 't7.png',
            imgBig: '',
            name: 'Shark Gaming',
            state: 'italy'
        },
    ],
    tester:[
        {
            imgTester:"../assets/test1.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"../assets/test2.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"../assets/test3.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester:"../assets/test4.png",
            nameTester:"Mohammed Salah",
            roleTester:"CEO/Founder",
            DescTester:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
    ],
    games:[
        {
            imgGame:"../assets/protfolio1.png",
            nameGame:"Assassin's Creed",
            descGame:"Donec solliucidum malesuada."
        },
        {
            imgGame:"../assets/protfolio2.png",
            nameGame:"Call of Duty",
            descGame:"Donec solliucidum malesuada."
        },
        {
            imgGame:"../assets/protfolio3.png",
            nameGame:"Tomb Raider",
            descGame:"Donec solliucidum malesuada."
        },
        {
            imgGame:"../assets/protfolio4.png",
            nameGame:"Mortal Combat X",
            descGame:"Donec solliucidum malesuada."
        },
    ]
};

const iMieiDati = reactive(img);

export default iMieiDati;