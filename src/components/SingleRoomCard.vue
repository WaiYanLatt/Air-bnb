<script>
  export default {
     props : {
         result : {
             type : Object,
             required : true,
         }
     },
     computed : {
        currentHome() {
         const homeId = Number(this.$route.params.id);
         return this.result.find((result) => result.id === homeId);
        }
    },
  }

</script>


<template>
    <div class="">
        {{ currentHome }}
    </div>
</template>