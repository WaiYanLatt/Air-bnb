<script>
export default {
  props: {
    trip: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      showFav: false,
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
  <div
    class="cursor-pointer relative"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <i
      class="fa-regular text-white text-2xl cursor-pointer fa-heart absolute top-5 right-5"
      :class="{ 'fa-solid': showFav === true }"
      @click="fullHeart"
    ></i>
    <img
      :src="trip.firstUrl"
      class="w-full h-[250px] object-cover rounded-xl"
      alt=""
      v-show="show === false"
    />
    <img
      :src="trip.secondUrl"
      class="w-full h-[250px] object-cover rounded-xl"
      v-show="show === true"
    />
    <div class="mt-5">
      <div class="flex items-center">
        <i class="fa-solid fa-star text-gray-500 mr-3"></i>
        <p class="font-semibold text-gray-500">
          {{ trip.review }} . {{ trip.address }}
        </p>
      </div>
      <h1 class="font-semibold mt-1">{{ trip.description }}</h1>
      <h1 class="font-semibold mt-1">
        From <i class="fa-solid fa-euro-sign"></i> {{ trip.price }} / person
      </h1>
    </div>
  </div>
</template>
