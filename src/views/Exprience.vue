<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
  <div class="container-fluid mx-auto px-16 mt-56">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-semibold">New This Week</h1>
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
      class="mySwiper my-20"
    > 
      <swiper-slide class="overflow-hidden">
          <img src="/sand.webp" class="w-full rounded-xl">
      </swiper-slide>
      <swiper-slide>
          <img src="/girl.webp" class="w-full rounded-xl">
      </swiper-slide>
      <swiper-slide>
          <img src="/metting.webp"  class="w-full rounded-xl">
      </swiper-slide>
      <swiper-slide>
          <img src="/babt.webp"  class="w-full rounded-xl">
      </swiper-slide>
    </swiper>
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
