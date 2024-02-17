<script>
import useStay from "@/pinia/stay";
export default {
  data() {
    return {
      useStay: useStay(),
    };
  },
};
</script>

<template>
    <div>
      <input
        type="text"
        v-model="useStay.country"
        placeholder="Search city name in Demark"
        class="lg:w-[90%] w-[80%] p-3 border-red-500 border font-semibold rounded-lg focus:outline-none"
      />
      <button class="bg-red-500 h-10 w-10 rounded-full ml-3">
        <i class="fa-solid fa-magnifying-glass text-white"></i>
      </button>
    </div>
</template>