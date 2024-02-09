<script>
import Navbar from './components/Navbar.vue';
   export default {
       data() {
         return {

         }
       },
       components : {
         Navbar : Navbar,
       }
   }
</script>


<template>
    <div class="container-fluid mx-auto">
       <Navbar/>
       <router-view></router-view>
    </div>
</template>