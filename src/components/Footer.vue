<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showFooter() {
      this.show = true;
    },
    unShowFooter() {
      this.show = false;
    },
  },
};
</script>

<template>
  <div
    v-show="show === true"
    class="fixed bottom-0 w-full h-[400px] lg:h-[350px] bg-white rounded-t-3xl shadow-lg border z-10 animate__animated animate__fadeInUp"
  >
    <span
      class="block lg:ml-10 ml-5 mt-3 text-3xl cursor-pointer"
      @click="unShowFooter"
    >
      &times
    </span>
    <div class="grid lg:grid-cols-3 grid-cols-2 lg:ml-24 ml-5 mt-3">
      <div>
        <h1 class="font-semibold text-lg text-gray-700">Support</h1>
        <p class="font-semibold text-gray-500 mt-2">Help Center</p>
        <p class="font-semibold text-gray-500 mt-2">
          Get help with a safety issue
        </p>
        <p class="font-semibold text-gray-500 mt-2">AirCover</p>
        <p class="font-semibold text-gray-500 mt-2">Anti-discrimination</p>
        <p class="font-semibold text-gray-500 mt-2">Disability support</p>
        <p class="font-semibold text-gray-500 mt-2">Cancellation options</p>
        <p class="font-semibold text-gray-500 mt-2">
          Report neighborhood concern
        </p>
      </div>
      <div>
        <h1 class="font-semibold text-lg text-gray-700">Hosting</h1>
        <p class="font-semibold text-gray-500 mt-2">Airbnb your home</p>
        <p class="font-semibold text-gray-500 mt-2">AirCover for Hosts</p>
        <p class="font-semibold text-gray-500 mt-2">Hosting resources</p>
        <p class="font-semibold text-gray-500 mt-2">Community forum</p>
        <p class="font-semibold text-gray-500 mt-2">Hosting responsibly</p>
        <p class="font-semibold text-gray-500 mt-2">
          Airbnb-friendly apartments
        </p>
      </div>
      <div class="hidden lg:block">
        <h1 class="font-semibold text-lg text-gray-700">Airbnb</h1>
        <p class="font-semibold text-gray-500 mt-2">Newsroom</p>
        <p class="font-semibold text-gray-500 mt-2">New features</p>
        <p class="font-semibold text-gray-500 mt-2">Careers</p>
        <p class="font-semibold text-gray-500 mt-2">Investors</p>
        <p class="font-semibold text-gray-500 mt-2">Gift cards</p>
        <p class="font-semibold text-gray-500 mt-2">
          Airbnb.org emergency stays
        </p>
      </div>
    </div>
  </div>
  <footer
    class="container-fluid w-full bg-white border-t fixed bottom-0 shadow-lg py-2 lg:px-16 px-5"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="font-semibold">&copy 2024 Airbnb , Inc.</h1>
        <ul class="font-medium text-sm lg:flex *:ml-3 hidden">
          <li>Terms</li>
          <li>Site Map</li>
          <li>Privacy</li>
          <li>Your Privacy Choice</li>
        </ul>
      </div>
      <div class="flex items-center *:ml-3">
        <h1 class="font-semibold text-sm lg:block hidden">
          <i class="fa-solid fa-globe"></i>
          English (US)
        </h1>
        <h1 class="font-semibold text-sm lg:block hidden">
          Kr DKK
        </h1>
        <button
          class="font-semibold text-sm active:underline cursor-pointer"
          @click="showFooter"
        >
          Support & Resources
          <i class="fa-solid fa-angle-down ml-3"></i>
        </button>
      </div>
    </div>
  </footer>
</template>
