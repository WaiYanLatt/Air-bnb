<script>
import Button from "@/components/Button.vue";
import useCatagories from "@/pinia/Catagories.js";
import useStay from "@/pinia/stay";
import HouseCard from "@/components/HouseCard.vue";
import Srp from "@/components/Srp.vue";
import SearchStay from "@/pinia/SearchStay";

export default {
  components: {
    Button: Button,
    HouseCard: HouseCard,
    Srp: Srp,
  },
  data() {
    return {
      scrollLeft: 0,
      useCatagories: useCatagories(),
      useStay: useStay(),
      SearchStay: SearchStay(),
      scrollPage: 0,
      slideShow: false,
      alertShow: false,
    };
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
    favSlide() {
      this.slideShow = true;
    },
    unfavSlide() {
      this.slideShow = false;
    },
    showAlert() {
      this.alertShow = true;
      setTimeout(() => {
        this.alertShow = false;
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="">
    <!-- alert box -->
    <div v-show="alertShow === true" class="bg-red-500 fixed bottom-[30%] z-20 left-[15%] w-[70%] py-5 rounded-lg">
      <h1 class="text-center font-semibold text-white">PLEASE LOGIN FIRST</h1>
    </div>
    <!-- favorite array -->
    <div class="fixed right-5 z-10 lg:top-64 top-[17rem]" @click="favSlide">
      <div class="relative inline-flex w-fit">
        <div
          class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-slate-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
          {{ this.useStay.fav.length }}
        </div>
        <button type="button" class="px-3 py-3 shadow-xl bg-white ml-5 rounded-lg duration-700 font-semibold">
          <i class="fa-solid fa-house-circle-check text-slate-700 text-2xl"></i>
        </button>
      </div>
    </div>
    <!-- button scrollbar -->
    <div class="bg-white w-full py-3 shadow-lg fixed top-[74px] z-10">
      <div class="lg:px-16 flex items-center">
        <div class="flex items-center">
          <button v-show="scrollPage > 0" @click="scrollLeft1"
            class="shadow-lg w-10 h-10 rounded-full lg:block hidden bg-gray-100 text-black mx-3">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div
            class="lg:w-[700px] w-[380px] flex text-nowrap bg-transparent overflow-hidden overflow-x-scroll no-scrollbar cursor-pointer">
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
        <button class="hover:shadow-lg px-5 py-3 ml-2 rounded-lg duration-700 font-semibold border lg:block hidden">
          Display totals before tax
          <input type="checkbox" class="ml-2 cursor-pointer" />
        </button>
      </div>
    </div>
    <div class="container mx-auto px-5 lg:mt-72 mt-72 mb-28">
      <div
        class="w-[350px] h-screen bg-white no-scrollbar duration-1000 transition-all shadow-lg fixed top-0 z-20 right-[-100%] p-5 pt-10 overflow-y-scroll"
        :class="{ 'right-[0%]': slideShow === true }">
        <button class="bg-white w-10 fixed top-3 h-10 rounded-full shadow-sm border flex justify-center items-center"
          @click="unfavSlide">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <div v-for="fav in useStay.fav" :key="fav.id">
          <div class="mt-5 flex border shadow-md p-3 rounded-md bg-slate-900">
            <object :data="fav.xl_picture_url" type="image/png"
              class="w-[100px] h-[100px] flex-shrink-0 object-cover rounded-lg mr-5">
              <img src="/room2.webp" class="w-[100px] h-[100px] flex-shrink-0 object-cover rounded-lg mr-5">
            </object>
            <div>
              <h1 class="font-semibold text-white text-sm">{{ fav.name }}</h1>
              <h1 class="font-semibold text-white text-sm">
                <span v-show="fav.price !== null" class="font-semibold">
                  {{ fav.price }}
                </span>
                <span v-show="fav.price === null"> 545 </span>
                Kr DKK
              </h1>
            </div>
          </div>
        </div>
        <!-- <div v-for="favorite in SearchStay.fav" :key="favorite.id">
          <div class="mt-5 flex border items-center justify-between shadow-md p-3 rounded-md bg-slate-900">
            <img
              :src="favorite.xl_picture_url"
              alt=""
              class="w-[100px] h-[100px] object-cover rounded-lg mr-5"
            />
            <div>
              <h1 class="font-semibold text-white text-sm">{{ favorite.name }}</h1>
              <h1 class="font-semibold text-white text-sm">
                <span v-show="favorite.price !== null" class="font-semibold">
                  {{ favorite.price }}
                </span>
                <span v-show="favorite.price === null"> 545 </span>
                Kr DKK
              </h1>
            </div>
          </div>
        </div> -->
      </div>
      <!-- HouseCard -->
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
        <HouseCard v-if="useStay.location === ''" :result="result" @showAlert="showAlert" v-for="result in useStay.results" :key="result.id" />
        <Srp v-else />
      </div>
    </div>
  </div>
</template>
