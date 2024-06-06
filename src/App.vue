<script>

import AppHeader from './components/AppHeader.vue';
import appMainUno from './components/appMainUno.vue'
import AppMain4 from './components/AppMain4.vue';
import AppMain5 from './components/AppMain5.vue';
import AppMain6 from './components/AppMain6.vue';
import AppMain7 from './components/AppMain7.vue';
import AppMain8 from './components/AppMain8.vue';
import footerVue from './components/footer.vue';
export default{
  components:{

    AppHeader,
    appMainUno,
        AppMain4,
        AppMain5,
        AppMain6,
        AppMain7,
        AppMain8,
        footerVue
  }
}

</script>

<template>
  <AppHeader/>
    <appMainUno/>
    <AppMain4 />
    <AppMain5 />
    <AppMain6 />
    <AppMain7 />
    <AppMain8 />
    <footerVue />
   
</template>

<style>
</style>


