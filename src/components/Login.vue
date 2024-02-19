<template>
  <form>
    <h1 class="font-semibold text-lg mb-5">LOGIN OR SIGN UP</h1>
    <input
      type="email"
      class="rounded-lg w-full p-3 border-2 border-black focus:outline-none font-semibold"
      placeholder="Enter your email"
    />
    <input
      type="password"
      autocomplete="false"
      class="rounded-lg w-full p-3 mt-3 border-2 border-black focus:outline-none font-semibold"
      placeholder="Enter your password"
    />
    <button class="bg-black w-full py-3 mt-5 rounded-lg text-white font-semibold duration-500 hover:bg-red-500">
        LOGIN
    </button>
    <h1 class="font-semibold text-center mt-3">OR</h1>
    <button class="bg-black w-full py-3 mt-3 rounded-lg text-white font-semibold duration-500 hover:bg-red-500">
        SIGN UP
    </button>
  </form>
</template>
