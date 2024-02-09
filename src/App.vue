<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
   export default {
       data() {
         return {

         }
       },
       components : {
         Navbar : Navbar,
         Footer : Footer,
       }
   }
</script>


<template>
    <div class="container-fluid mx-auto">
       <Navbar/>
       <router-view></router-view>
       <Footer/>
    </div>
</template>