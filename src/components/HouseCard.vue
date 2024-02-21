<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import useStay from "@/pinia/stay.js";
import SearchStay from "@/pinia/SearchStay.js";
import useUser from "@/pinia/User.js";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  emits: ["showAlert"],
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      useUser: useUser(),
      useStay: useStay(),
      SearchStay: SearchStay(),
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
          itemsToShow: 1,
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
      if (this.useUser.isAuthenicated === false) {
        return this.$emit("showAlert");
      }

      if (this.useUser.isAuthenicated === true) {
        this.showFav = !this.showFav;
        const index = this.useStay.fav.findIndex(
          (res) => res.id === this.result.id
        );
        if (index === -1) {
          const guestFav = this.useStay.results.find(
            (res) => res.id === this.result.id
          );
          this.useStay.fav.push(guestFav);
        } else {
          this.useStay.fav.splice(index, 1);
        }
      }
    },
  },
};
</script>

// onerror="this.onerror=null;this.src='/room2.webp';"

<template>
  <div class="w-full">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item w-full">
          <object
            :data="result.xl_picture_url"
            type="image/png"
            class="rounded-lg border-0 shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
          >
            <img
              src="/room2.webp"
              class="rounded-lg border-0 shadow-lg w-full h-[250px] object-cover duration-500 cursor-pointer hover:scale-105"
            />
          </object>
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
      <span v-show="result.price !== null" class="mx-1">
        <i class="fa-solid fa-euro-sign"></i>
        {{ result.price }}
      </span>
      <span v-show="result.price === null"
        ><i class="fa-solid fa-euro-sign"></i> 545
      </span>
      <span class="text-gray-500 ml-2">night</span>
    </p>
  </div>
</template>
