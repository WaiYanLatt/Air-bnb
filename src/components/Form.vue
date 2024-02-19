<script>
import useStay from "@/pinia/stay.js";

export default {
  data() {
    return {
      useStay: useStay(),
    };
  },
  watch: {
    location: "searchCity",
  },
  methods: {
    async searchCity() {
      const results = await this.useStay.SearchStay(this.useStay.location);
      this.useStay.setSearch(results);
    },
  },
};
</script>

<template>
  <form @submit.prevent="searchCity">
    <input
      type="text"
      v-model="useStay.location"
      placeholder="Search by city name or country"
      class="lg:w-[90%] w-[80%] p-3 border-red-500 border font-semibold rounded-lg focus:outline-none"
    />
    <button class="bg-red-500 h-10 w-10 rounded-full ml-3">
      <i class="fa-solid fa-magnifying-glass text-white"></i>
    </button>
  </form>
</template>
