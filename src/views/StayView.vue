<script>
import Button from '@/components/Button.vue'
import useCatagories from '@/pinia/Catagories.js';
import useStay from '@/pinia/stay';
import HouseCard from '@/components/HouseCard.vue'

export default {
  components: {
    Button: Button,
    HouseCard: HouseCard,
  },
  data() {
    return {
      scrollLeft: 0,
      useCatagories: useCatagories(),
      useStay: useStay(),
      scrollPage: 0,
    }
  },
  async created() {
    const results = await this.useStay.getStay();
    this.useStay.setStay(results);
  },
  methods: {
    scrollLeft1() {
      this.scrollLeft += 610;
      this.scrollPage -= 1;
      if (this.scrollPage < 10) {
        this.scrollLeft = 0;
        this.scrollPage = 0;
      }
    },
    scrollRight() {
      this.scrollLeft -= 610;
      this.scrollPage += 1;
      if (this.scrollPage > 10) {
        this.scrollLeft = 0;
        this.scrollPage = 0;
      }
    },
  }
}
</script>

<template>
  <div class="">
    <div class="bg-white w-full py-3 shadow-lg fixed top-[74px] z-10">
      <div class="px-16 flex lg:flex-row flex-col items-center">
        <div class="flex items-center">
          <button v-show="scrollPage > 0" @click="scrollLeft1"
          class="shadow-lg w-10 h-10 rounded-full lg:block hidden bg-gray-100 text-black mx-3">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div
          class="lg:w-[700px] w-[380px]  flex text-nowrap bg-transparent overflow-hidden overflow-x-scroll no-scrollbar cursor-pointer">
          <Button class="transtion-all duration-500" v-for="(item, index) in useCatagories.items" :key="index"
            :item="item" :style="{ transform: `translateX(${scrollLeft}px)` }" />
        </div>
        <button @click="scrollRight" class="hidden lg:block shadow-lg w-10 h-10 rounded-full bg-gray-100 text-black">
          <i class="fa-solid fa-angle-right"></i>
        </button>
        </div>
        <button class="hover:shadow-lg px-5 py-3 ml-5 rounded-lg duration-700 font-semibold border lg:block hidden">
          <i class="fa-solid fa-bars-progress mr-2"></i>
          Filters
        </button>
        <button class="hover:shadow-lg px-5 py-3 ml-5 rounded-lg duration-700 font-semibold border lg:block hidden">
          Display totals before tax
          <input type="checkbox" class="ml-2 cursor-pointer">
        </button>
      </div>
    </div>
    <div class="container mx-auto px-5 lg:mt-56 mt-72 mb-28">
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
        <HouseCard :result="result" v-for="result in useStay.results" :key="result.id" />
      </div>
    </div>
  </div>
</template>

<!-- <img :src="result.thumbnail_url" alt="">
       <img :src="result.medium_url" alt="">
       <img :src="result.xl_picture_url" alt="">
       <img :src="result.url" alt=""> -->