<script>
import useStay from "@/pinia/stay.js";
import Reviews from '@/components/Reviews.vue';
import Package from '@/components/Package.vue';
import HostDetails from '@/components/HostDetails.vue'



export default {
  components: {
    Reviews,
    Package,
    HostDetails,
  },
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
      const homeId = this.$route.params.id;
      const home = this.useStay.results.find((res) => res.id === homeId);
      return home;
    },
  },
};
</script>

<template>
  <div class="mt-56 container-fluid mx-auto px-16 mb-32">
    <div>
      <h1 class="font-semibold text-2xl">
        {{ currentHome.room_type }} {{ currentHome.property_type }}
      </h1>
      <div class="grid grid-cols-2 gap-2 mt-10 mb-5">
        <div>
          <img
            :src="currentHome.xl_picture_url"
            alt=""
            class="w-full object-cover h-[410px] rounded-s-xl hover:brightness-75 duration-500 cursor-pointer"
          />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <img
            :src="currentHome.xl_picture_url"
            alt=""
            class="w-full object-cover h-[200px] hover:brightness-75 duration-500 cursor-pointer"
          />
          <img
            :src="currentHome.xl_picture_url"
            alt=""
            class="w-full object-cover h-[200px] hover:brightness-75 duration-500 cursor-pointer rounded-tr-xl"
          />
          <img
            :src="currentHome.xl_picture_url"
            alt=""
            class="w-full object-cover h-[200px] hover:brightness-75 duration-500 cursor-pointer"
          />
          <img
            :src="currentHome.xl_picture_url"
            alt=""
            class="w-full object-cover h-[200px] hover:brightness-75 duration-500 cursor-pointer rounded-br-xl"
          />
        </div>
      </div>
      <!-- Room Details -->
      <div class="flex relative">
        <div class="w-full pr-16">
          <h1 class="font-semibold text-xl">{{ currentHome.name }}</h1>
          <ul class="mt-1 font-semibold text-gray-800 text-md flex *:ml-1">
            <li>{{ currentHome.guests_included }} guests ,</li>
            <li>{{ currentHome.bedrooms }} bedrooms ,</li>
            <li>{{ currentHome.beds }} beds,</li>
            <li>{{ currentHome.bathrooms }} bathrooms</li>
          </ul>
          <!-- Reviews -->
          <div class="flex mt-2">
            <h1 class="font-semibold mr-3">
              <i class="fa-solid fa-star"></i>
              {{ currentHome.reviews_per_month }} ,
            </h1>
            <h1 class="font-semibold underline">
              {{ currentHome.number_of_reviews }}
              reviews
            </h1>
          </div>
          <hr class="mt-3 border" />
          <!-- host_url -->
          <HostDetails :currentHome="currentHome"/>
        </div>
        <Package :currentHome="currentHome"/>
      </div>
      <hr class="mt-10 border" />
    </div>
    <div class="container-fluid mx-auto px-16 mt-20">
       <Reviews :currentHome="currentHome"/>
       <hr class="mt-10 border" />
    </div>
  </div>
</template>