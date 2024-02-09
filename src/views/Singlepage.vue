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
        const homeId = Number(this.$route.params.id)
        return homeId;
    },
  },
};
</script>

<template>
  <div class="mt-56">
     {{ currentHome }}
  </div>
</template>



