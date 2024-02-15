<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
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
      showFav: false,
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
  methods: {
    fullHeart() {
      this.showFav = !this.showFav;
    },
  },
};
</script>

<template>
  <div class="w-full">
    <!-- <object :data="result.xl_picture_url" type="image/png" class="rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105">
      <img src="/sky.gif"  >
    </object> -->
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <img
            :src="result.xl_picture_url"
            alt=""
            class="relative rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
          <button
            class="bg-white rounded-xl absolute top-3 font-semibold left-5 py-2 px-5"
            v-show="showFav === true"
          >
            Guest Favorite
          </button>
          <i
            class="fa-regular text-red-500 text-2xl cursor-pointer fa-heart absolute top-5 right-5"
            :class="{ 'fa-solid': showFav === true }"
            @click="fullHeart"
          ></i>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <img
            src="/room1.webp"
            alt=""
            class="relative rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
          <button
            class="bg-white rounded-xl absolute top-3 font-semibold left-5 py-2 px-5"
            v-show="showFav === true"
          >
            Guest Favorite
          </button>
          <i
            class="fa-regular text-red-500 text-2xl cursor-pointer fa-heart absolute top-5 right-5"
            :class="{ 'fa-solid': showFav === true }"
            @click="fullHeart"
          ></i>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <img
            src="/room2.webp"
            alt=""
            class="relative rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
          <button
            class="bg-white rounded-xl absolute top-3 font-semibold left-5 py-2 px-5"
            v-show="showFav === true"
          >
            Guest Favorite
          </button>
          <i
            class="fa-regular text-red-500 text-2xl cursor-pointer fa-heart absolute top-5 right-5"
            :class="{ 'fa-solid': showFav === true }"
            @click="fullHeart"
          ></i>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <img
            src="/room3.webp"
            alt=""
            class="relative rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
          <button
            class="bg-white rounded-xl absolute top-3 font-semibold left-5 py-2 px-5"
            v-show="showFav === true"
          >
            Guest Favorite
          </button>
          <i
            class="fa-regular text-red-500 text-2xl cursor-pointer fa-heart absolute top-5 right-5"
            :class="{ 'fa-solid': showFav === true }"
            @click="fullHeart"
          ></i>
        </div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <img
            src="/room4.webp"
            alt=""
            class="relative rounded-lg shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          />
          <button
            class="bg-white rounded-xl absolute top-3 font-semibold left-5 py-2 px-5"
            v-show="showFav === true"
          >
            Guest Favorite
          </button>
          <i
            class="fa-regular text-red-500 text-2xl cursor-pointer fa-heart absolute top-5 right-5"
            :class="{ 'fa-solid': showFav === true }"
            @click="fullHeart"
          ></i>
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
      <router-link :to="`/${result.id}`">
        <h1 class="font-semibold text-md underline">{{ result.name }}</h1>
      </router-link>
      <p class="font-semibold">
        <i class="fa-solid fa-star"></i>
        {{ result.reviews_per_month }}
      </p>
    </div>
    <p class="font-semibold">
      <i class="fa-solid fa-euro-sign ml-2"></i>
       <span v-show="result.price !== null" class="mx-1">
         {{ result.price }}
       </span>
       <span v-show="result.price === null">
         545
       </span>
      <span class="text-gray-500 mr-2">night</span>
    </p>
  </div>
</template>
