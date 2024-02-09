<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<template>
  <div class="w-full">
    <!-- <object :data="result.xl_picture_url" type="image/png" class="rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105">
      <img src="/sky.gif"  >
    </object> -->
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 5" :key="slide">
        <div class="carousel__item w-full">
          <img
            :src="result.xl_picture_url"
            alt=""
            class="rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
        </div>
      </Slide>

      <template #addons>
      <Navigation />
    </template>
    </Carousel>
    <!-- <img
      :src="result.xl_picture_url"
      alt=""
      class="rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
    /> -->
    <div class="flex items-center mt-5 justify-between">
      <h1 class="font-semibold text-md">{{ result.name }}</h1>
      <p class="font-semibold">
        <i class="fa-solid fa-star"></i>
        {{ result.reviews_per_month }}
      </p>
    </div>
    <p class="font-semibold">
      <i class="fa-solid fa-euro-sign"></i>
      {{ result.price }}
      <span class="text-gray-500">night</span>
    </p>
  </div>
</template>
