<script>
  export default {
    props : {
      item : {
         type : Object,
         required : true,
      }
    }
  }
</script>

<template>
    <button class="mx-5 flex justify-center items-center flex-col p-2 rounded-md my-1">
        <img :src="item.image" alt="" class="w-7 h-7 text-center">
        <p class="font-semibold text-xs">{{ item.title }}</p>
    </button>
</template>