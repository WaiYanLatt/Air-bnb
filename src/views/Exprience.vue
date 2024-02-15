<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import useTrip from "@/pinia/tripStore.js";
import tripCard from "@/components/tripCard.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    tripCard,
  },
  data() {
    return {
      useTrip : useTrip(),
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
};
</script>

<template>
  <div class="container-fluid mx-auto lg:px-16 px-5 lg:mt-64 mt-72">
    <div class="flex justify-between items-center">
      <h1 class="lg:text-2xl text-lg font-semibold">New This Week</h1>
      <div>
        <button
          class="h-10 w-10 text-black border rounded-full mr-2 cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          class="h-10 w-10 text-black border rounded-full cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <swiper
      :slidesPerView="'auto'"
      :options="swiperOptions"
      :spaceBetween="10"
      :breakpoints="{
      '320': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    }"
      class="mySwiper my-10"
    >
      <swiper-slide class="overflow-hidden relative">
        <img src="/sand.webp" class="w-full rounded-xl" />
        <div class="absolute top-5 left-5">
          <p class="font-semibold text-start text-sm text-white">Collection</p>
          <h1 class="font-semibold text-start text-xl text-white">
            Most popular around the world
          </h1>
        </div>
        <button
          class="absolute bottom-5 left-5 text-sm bg-white px-5 py-2 rounded-lg font-semibold shadow-md"
        >
          Show all
        </button>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="/girl.webp" class="w-full rounded-xl" />
        <div class="absolute top-5 left-5">
             <p class="font-semibold text-start text-sm text-white">Collection</p>
             <h1 class="font-semibold text-start text-xl text-white">Easy for itinerary planning</h1>
          </div>
          <button class="absolute bottom-5 left-5 text-sm bg-white px-5 py-2 rounded-lg font-semibold shadow-md">
              Show all
          </button>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="/metting.webp" class="w-full rounded-xl" />
        <div class="absolute top-5 left-5">
             <p class="font-semibold text-start text-sm text-white">Collection</p>
             <h1 class="font-semibold text-start text-xl text-white">Great for team building</h1>
          </div>
          <button class="absolute bottom-5 left-5 text-sm bg-white px-5 py-2 rounded-lg font-semibold shadow-md">
              Show all
          </button>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="/babt.webp" class="w-full rounded-xl" />
        <div class="absolute top-5 left-5">
             <p class="font-semibold text-start text-sm text-white">Collection</p>
             <h1 class="font-semibold text-start text-xl text-white">Fun for family</h1>
          </div>
          <button class="absolute bottom-5 left-5 text-sm bg-white px-5 py-2 rounded-lg font-semibold shadow-md">
              Show all
          </button>
      </swiper-slide>
    </swiper>
    <div class="flex justify-between items-center">
      <h1 class="lg:text-2xl text-lg font-semibold">Plan a trip with help from local Hosts around the world</h1>
      <div class="flex">
        <button
          class="h-10 w-10 text-black border rounded-full mr-2 cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          class="h-10 w-10 text-black border rounded-full cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-6 lg:gap-3 gap-y-5 mt-10 mb-20">
       <tripCard v-for="trip in useTrip.trips" :key="trip.id" :trip="trip"/>
    </div>
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Best sellers</h1>
      <div>
        <button
          class="h-10 w-10 text-black border rounded-full mr-2 cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          class="h-10 w-10 text-black border rounded-full cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-6 lg:gap-3 gap-y-5 mt-10 mb-20">
       <tripCard v-for="trip in useTrip.trips" :key="trip.id" :trip="trip"/>
    </div>
    <div class="flex justify-between items-center">
      <h1 class="lg:text-2xl text-lg font-semibold">Make plans this weekend</h1>
      <div>
        <button
          class="h-10 w-10 text-black border rounded-full mr-2 cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          class="h-10 w-10 text-black border rounded-full cursor-not-allowed"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-6 lg:gap-3 gap-y-5 mt-10 mb-20">
       <tripCard v-for="trip in useTrip.trips" :key="trip.id" :trip="trip"/>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  z-index: 0 !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 48%;
}
</style>
