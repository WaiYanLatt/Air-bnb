<script>

import Search from '@/components/Search.vue'

export default {
  data() {
    return {
      isNavshow: true,
      isSecond : true,
      show : false,
    };
  },
  components : {
    Search : Search,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY === 0) {
        this.isNavshow = true;
        this.isSecond = true;
      }
      if (window.scrollY < 100) {
        this.isNavshow = true;
        this.isSecond = true;
      }
      if (window.scrollY > 50) {
            this.isNavshow = false;
      }
      if (window.scrollY > 100) {
        this.isSecond = false;
      }
    },
    showForm(){
      this.show = true
    },
    unShow(){
      this.show = false
    }
  },
};
</script>

<template>
  <nav class="fixed top-0 z-20 w-full ">
    <div
      class="bg-gray-100 py-5 px-28 border-b-2 border-gray-200"
      v-show="isNavshow === true"
    >
      <h1 class="font-bold underline text-md text-center cursor-pointer">
        Learn about Guest Favorites, the most loved homes on AirBnb
      </h1>
    </div>
    <div
      class="bg-white py-5 px-16 flex justify-center items-center top-0  "
      v-show="isSecond === true"
    >
      <div class="flex items-center">
        <h1 class="font-semibold text-md mr-3">Stays</h1>
        <h1 class="font-semibold text-md text-gray-500 mr-3">Experiences</h1>
        <h1 class="font-semibold text-md text-gray-500 mr-3">
          Online Experiences
        </h1>
      </div>
    </div>
    <div
      class="bg-white container-fluid border-b flex px-16 py-2 items-center "
      :class="{'shadow-lg' : isNavshow === true}"
      >
      <img src="/airbnb.svg" alt="" class="w-24 h-10 mr-56" />
      <div
        class="shadow-md border rounded-full overflow-hidden flex w-[1800px]"
      >
        <button
          class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full"
        >
          AnyWhere
        </button>
        <div class="border my-1 mx-3 border-gray-300"></div>
        <button
          class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full"
        >
          Any week
        </button>
        <div class="border my-1 mx-3 border-gray-300"></div>
        <button
          class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full"
        >
          Add Guests
        </button>
        <div class="border my-1 mx-3 border-gray-300"></div>
        <!-- search icon -->
        <button @click="showForm" class="bg-red-500 h-10 w-10 rounded-full ml-10">
          <i class="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
      <div class="flex items-center w-full pl-10">
        <button
          class="font-semibold mr-4 p-3 hover:bg-gray-100 rounded-full duration-500 hover:shadow-md"
        >
          Airbnb your home
        </button>
        <button
          class="h-10 w-10 hover:shadow-lg rounded-full duration-500 hover:bg-gray-100 flex items-center justify-center mr-3"
        >
          <i class="fa-solid fa-globe"></i>
        </button>
        <div
          class="border px-5 py-2 rounded-full cursor-pointer duration-500 hover:shadow-lg flex items-center justify-center"
        >
          <i class="fa-solid fa-bars mr-3"></i>
          <div
            class="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center"
          >
            <i class="fa-solid fa-user text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- Model Box -->
    <div v-show="show === true" class="bg-white  object-cover bg-no-repeat animate__backInUp animate__animated rounded-lg border shadow-xl h-auto w-[700px] absolute z-10 top-28 left-[22%] p-10">
       <h1 class="text-right text-red-500 cursor-pointer" @click="unShow">
        <i class="fa-solid fa-xmark mb-5 text-xl"></i>
      </h1>
      <Search/>
    </div>
  </nav>
</template>
