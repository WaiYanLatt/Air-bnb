<script>
import Search from "@/components/Search.vue";
import Form from "./Form.vue";
import Login from "./Login.vue";
import useUser from "@/pinia/User.js";

export default {
  data() {
    return {
      useUser: useUser(),
      isNavshow: true,
      isSecond: true,
      show: false,
      showForm: false,
      stay: false,
      onlineExp: false,
      exp: false,
      login: false,
    };
  },
  components: {
    Search: Search,
    Form: Form,
    Login: Login,
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
    showForm1() {
      this.show = true;
    },
    unShow() {
      this.show = false;
      this.showForm = false;
      this.login = false;
    },
    form() {
      if (this.useUser.isAuthenicated === true) {
        this.showForm = true;
        this.$router.push("/");
      }
    },
    showStay() {
      this.stay = true;
      this.exp = false;
      this.onlineExp = false;
    },
    showExp() {
      this.stay = false;
      this.exp = true;
      this.onlineExp = false;
    },
    showOnlineExp() {
      this.stay = false;
      this.exp = false;
      this.onlineExp = true;
    },
    showLogin() {
      this.login = true;
    },
    logout() {
      this.useUser.isAuthenicated = false;
      this.$router.push('/')
    },
  },
};
</script>

<template>
  <nav class="fixed top-0 z-20 w-full">
    <div
      class="bg-gray-100 py-5 lg:px-28 px-5 border-b-2 border-gray-200"
      v-show="isNavshow === true"
    >
      <h1
        class="font-bold underline lg:text-md text-sm text-center cursor-pointer"
      >
        Learn about Guest Favorites, the most loved homes on AirBnb
      </h1>
    </div>
    <div
      class="bg-white py-2 lg:px-16 px-5 flex justify-center items-center top-0"
      v-show="isSecond === true"
    >
      <div class="flex items-center">
        <router-link to="/">
          <button
            class="font-semibold cursor-pointer text-md text-gray-500 lg:mr-3 hover:bg-slate-100 duration-500 px-5 py-2 rounded-full"
            :class="{ '!text-black underline': stay === true }"
            @click="showStay"
          >
            Stays
          </button>
        </router-link>
        <button
          class="font-semibold cursor-pointer text-md text-gray-500 lg:mr-3 hover:bg-slate-100 duration-500 px-5 py-2 rounded-full"
          :class="{ '!text-black underline': exp === true }"
          @click="showExp"
        >
          Experiences
        </button>
        <router-link to="/exp">
          <button
            class="font-semibold cursor-pointer text-md text-gray-500 lg:mr-3 hover:bg-slate-100 duration-500 px-5 py-2 rounded-full"
            :class="{ '!text-black underline': onlineExp === true }"
            @click="showOnlineExp"
          >
            Online Experiences
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="bg-white container-fluid border-b flex lg:flex-row flex-col lg:px-16 px-5 py-2 items-center"
      :class="{ 'shadow-lg': isNavshow === true }"
    >
      <div class="flex justify-between my-2">
        <img src="/airbnb.svg" alt="" class="w-24 h-10 lg:mr-60 mr-3" />
        <div
          class="shadow-md border rounded-full overflow-hidden flex w-[200px] lg:w-[589px]"
        >
          <button
            class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full"
            @click="form"
          >
            AnyWhere
          </button>
          <div class="border my-1 lg:mx-3 border-gray-300"></div>
          <button
            class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full lg:block hidden"
          >
            Any week
          </button>
          <div class="border my-1 mx-3 border-gray-300 lg:block hidden"></div>
          <button
            class="font-semibold duration-500 hover:bg-gray-100 py-2 px-5 hover:rounded-full lg:block hidden"
          >
            Add Guests
          </button>
          <div class="border my-1 mx-3 border-gray-300 hidden"></div>
          <!-- search icon -->
          <button
            @click="showForm1"
            class="bg-red-500 h-10 w-10 rounded-full ml-10"
          >
            <i class="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
      </div>
      <div class="flex items-center w-full lg:pl-24">
        <button
          v-show="useUser.isAuthenicated === true"
          @click="logout"
          class="font-semibold mr-5 w-full border px-5 lg:py-3 py-1 hover:bg-gray-100 rounded-full duration-500 hover:shadow-md"
        >
          LOG OUT
        </button>
        <button
          class="h-10 w-10 hover:shadow-lg rounded-full duration-500 hover:bg-gray-100 flex items-center justify-center mr-3"
        >
          <i class="fa-solid fa-globe"></i>
        </button>
        <div
          @click="showLogin"
          class="border px-5 py-1 lg:py-2 rounded-full w-full cursor-pointer duration-500 hover:shadow-lg flex items-center justify-center"
        >
          <i class="fa-solid fa-bars mr-3"></i>
          <div
            class="bg-gray-100 lg:h-10 lg:w-10 w-7 h-7 rounded-full flex items-center justify-center"
          >
            <i class="fa-solid fa-user text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- Model Box -->
    <div
      v-show="show === true"
      class="bg-white object-cover bg-no-repeat animate__backInUp animate__animated rounded-lg border shadow-xl h-auto w-full lg:w-[700px] absolute z-10 top-36 lg:top-28 lg:left-[22%] p-5 lg:p-10"
    >
      <h1 class="text-right text-red-500 cursor-pointer" @click="unShow">
        <i class="fa-solid fa-xmark mb-5 text-xl"></i>
      </h1>
      <Search />
    </div>
    <div
      v-show="showForm === true"
      class="bg-white object-cover bg-no-repeat animate__backInUp animate__animated rounded-lg border shadow-xl h-auto w-full lg:w-[700px] absolute z-10 top-36 lg:top-28 lg:left-[22%] p-5 lg:p-10"
    >
      <h1 class="text-right text-red-500 cursor-pointer" @click="unShow">
        <i class="fa-solid fa-xmark mb-5 text-xl"></i>
      </h1>
      <Form />
    </div>
    <div
      v-show="login === true"
      class="bg-white object-cover bg-no-repeat animate__backInUp animate__animated rounded-lg border shadow-xl h-auto w-full lg:w-[700px] absolute z-10 top-36 lg:top-28 lg:left-[22%] p-5 lg:p-10"
    >
      <h1 class="text-right text-red-500 cursor-pointer" @click="unShow">
        <i class="fa-solid fa-xmark mb-5 text-xl"></i>
      </h1>
      <login />
    </div>
  </nav>
</template>
