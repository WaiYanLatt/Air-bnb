<script>
import useUser from "@/pinia/User";

export default {
  data() {
    return {
      useUser: useUser(),
      email : '',
      password : '',
      success : false,
      error : false,
    };
  },
  methods: {
    login() {
      const hasAccount = this.useUser.users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (hasAccount) {
        this.currentUserID = hasAccount.id;
        this.useUser.isAuthenicated = true;
        this.success = true;
      } else {
        this.currentUserID = null;
        this.useUser.isAuthenicated = false;
        this.error = true;
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="login">
    <h1 class="font-semibold text-lg mb-5">LOGIN OR SIGN UP</h1>
    <input
      v-model="email"
      type="email"
      class="rounded-lg w-full p-3 border-2 border-black focus:outline-none font-semibold"
      placeholder="Enter your email"
    />
    <input
      v-model='password'
      type="password"
      autocomplete="false"
      class="rounded-lg w-full p-3 mt-3 border-2 border-black focus:outline-none font-semibold"
      placeholder="Enter your password"
    />
    <button
      class="bg-black w-full py-3 mt-5 rounded-lg text-white font-semibold duration-500 hover:bg-red-500"
    >
      LOGIN
    </button>
    <h1 class="font-semibold text-center mt-3">OR</h1>
    <router-link to="register">
      <button
        @submit.prevent
        class="bg-black w-full py-3 mt-3 rounded-lg text-white font-semibold duration-500 hover:bg-red-500"
      >
        SIGN UP
      </button>
    </router-link>
    <h1 v-show="success === true" class="font-semibold text-lg text-green-500 mt-3 text-right">
      LOGIN SUCESS
    </h1>
    <h1 v-show="error === true" class="font-semibold text-lg text-red-500 mt-3 text-right">
      LOGIN FILLED
    </h1>
  </form>
</template>
