<script>
import useUser from "@/pinia/User";

export default {
  data() {
    return {
      useUser: useUser(),
      user: {
        id: null,
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    addUser() {
      if (this.user.name.length !== 0 && this.user.email.length !== 0 && this.user.password.length !== 0) {
        this.user.id = this.useUser.users.id + 1;
        this.useUser.createUser(this.user);
        this.useUser.isAuthenicated = true;
        this.$router.push("/");
      }
    },
  },
};
</script>

<template>
  <div
    class="bg-white object-cover lg:rounded-lg border shadow-xl h-auto w-full lg:w-[700px] absolute z-20 top-36 lg:top-28 lg:left-[22%] left-0 p-5 lg:p-10"
  >
    <!-- <h1 class="text-right text-red-500 cursor-pointer" @click="unShow">
        <i class="fa-solid fa-xmark mb-5 text-xl"></i>
      </h1> -->
    <form @submit.prevent="addUser">
      <h1 class="font-semibold text-lg mb-5">REGISTER FORM</h1>
      <input
        type="text"
        v-model="user.name"
        class="rounded-lg w-full p-3 border-2 border-black focus:outline-none font-semibold"
        placeholder="Enter your name"
      />
      <input
        type="email"
        v-model="user.email"
        class="rounded-lg w-full mt-3 p-3 border-2 border-black focus:outline-none font-semibold"
        placeholder="Enter your email"
      />
      <input
        type="password"
        v-model="user.password"
        autocomplete="false"
        class="rounded-lg w-full p-3 mt-3 border-2 border-black focus:outline-none font-semibold"
        placeholder="Enter your password"
      />
      <button
        class="bg-black w-full py-3 mt-5 rounded-lg text-white font-semibold duration-500 hover:bg-red-500"
      >
        REGISTER
      </button>
    </form>
    <router-link to="/">
      <button
        class="bg-black w-full py-3 mt-5 rounded-lg cursor-pointer text-white font-semibold duration-500 hover:bg-red-500"
      >
        CANCEL
      </button>
    </router-link>
  </div>
</template>
