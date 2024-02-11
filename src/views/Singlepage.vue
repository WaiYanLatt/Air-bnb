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
      const homeId = this.$route.params.id;
      const home = this.useStay.results.find((res) => res.id === homeId);
      return home;
    },
  },
};
</script>

<template>
  <div class="mt-56 container-fluid mx-auto px-16 mb-20">
    <div>
      <h1 class="font-semibold text-2xl">{{ currentHome.name }}</h1>
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
      <div class="flex">
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
          <div class="mt-5 flex items-center">
            <div class="relative">
              <object
                :data="currentHome.host_picture_url"
                type="image/png"
                class="rounded-full w-14 h-14"
              >
                <div
                  class="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center"
                >
                  <i class="fa-solid fa-user text-gray-500 text-2xl"></i>
                </div>
              </object>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 14"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                class="block w-[24px] h-[24px] absolute bottom-0 right-0"
              >
                <linearGradient
                  id="a"
                  x1="8.5%"
                  x2="92.18%"
                  y1="17.16%"
                  y2="17.16%"
                >
                  <stop offset="0" stop-color="#e61e4d"></stop>
                  <stop offset=".5" stop-color="#e31c5f"></stop>
                  <stop offset="1" stop-color="#d70466"></stop>
                </linearGradient>
                <path
                  fill="#fff"
                  d="M9.93 0c.88 0 1.6.67 1.66 1.52l.01.15v2.15c0 .54-.26 1.05-.7 1.36l-.13.08-3.73 2.17a3.4 3.4 0 1 1-2.48 0L.83 5.26A1.67 1.67 0 0 1 0 3.96L0 3.82V1.67C0 .79.67.07 1.52 0L1.67 0z"
                ></path>
                <path
                  fill="url(#a)"
                  d="M5.8 8.2a2.4 2.4 0 0 0-.16 4.8h.32a2.4 2.4 0 0 0-.16-4.8zM9.93 1H1.67a.67.67 0 0 0-.66.57l-.01.1v2.15c0 .2.1.39.25.52l.08.05L5.46 6.8c.1.06.2.09.29.1h.1l.1-.02.1-.03.09-.05 4.13-2.4c.17-.1.3-.29.32-.48l.01-.1V1.67a.67.67 0 0 0-.57-.66z"
                ></path>
              </svg>
            </div>
            <div class="ml-3">
              <h1 class="font-semibold text-lg">
                Hosted by {{ currentHome.host_name }}
              </h1>
              <h1 class="font-medium text-gray-500 text-md">
                SuperHost : {{ currentHome.host_since }}
              </h1>
            </div>
          </div>
          <hr class="mt-5 border" />
          <!-- list Process -->
          <div class="mt-10">
            <div class="flex">
              <i class="fa-solid fa-door-closed text-3xl"></i>
              <div class="ml-5">
                <h1 class="font-semibold text-lg">Self check-in</h1>
                <p class="font-semibold text-gray-500">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
            <div class="mt-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                class="bloack w-[30px] h-[30px]"
              >
                <path
                  d="M16 17a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM25.67.33a2 2 0 0 1 2 1.85v6.54a2 2 0 0 1-.97 1.7l-.14.08-9.67 4.84a2 2 0 0 1-1.61.07l-.17-.07-9.67-4.84a2 2 0 0 1-1.1-1.62V2.33a2 2 0 0 1 1.84-2h.15zm0 2H6.33v6.39L16 13.55l9.67-4.83z"
                ></path>
              </svg>
              <div class="ml-5">
                <h1 class="font-semibold text-lg">
                  {{ currentHome.host_name }} is a Superhost
                </h1>
                <p class="font-semibold text-gray-500">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
            <div class="mt-5 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                class="bloack w-[30px] h-[30px]"
              >
                <path
                  d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"
                ></path>
              </svg>
              <div class="ml-5">
                <h1 class="font-semibold text-lg">
                  Free cancellation before 2 March
                </h1>
              </div>
            </div>
          </div>
          <hr class="mt-10 border" />
          <!-- Description -->
          <div class="mt-5">
            <p class="font-medium text-gray-500 leading-8">
              {{ currentHome.description }}
            </p>
          </div>
          <hr class="mt-5 border" />
          <!-- bed slide -->
          
        </div>
        <div class="w-[500px] h-[500px] border rounded-xl shadow-lg"></div>
      </div>
    </div>
  </div>
</template>
