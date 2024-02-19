<script>
import HouseCard from "./HouseCard.vue";
import useStay from "@/pinia/stay.js";
export default {
  components: {
    HouseCard: HouseCard,
  },
  data() {
    return {
      useStay: useStay(),
    };
  },
};
</script>

<template>
  <HouseCard
    v-for="result in useStay.results"
    :result="result"
    :key="result.id"
  ></HouseCard>
</template>
