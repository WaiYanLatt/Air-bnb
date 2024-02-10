<script>
import useStay from "@/pinia/stay.js";

export default {
  data() {
    return {
      useStay: useStay(),
    };
  },
  async created() {
      const results = await this.useStay.getStay();
      this.useStay.setStay(results);
  },
  computed: {
    currentHome() {
        const homeId = Number(this.$route.params.id);
        const home = this.useStay.results.find((res) => res.id === homeId);
        return home;
    },
  },
};
</script>

<template>
  <div class="mt-56">
     {{ currentHome }}
  </div>
</template>



