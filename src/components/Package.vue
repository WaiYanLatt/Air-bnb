<script>
export default {
  props: {
    currentHome: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="w-[500px] h-[450px] border rounded-xl shadow-lg sticky top-28 p-5"
  >
    <h1 class="font-semibold text-xl text-gray-500">
      <i class="fa-solid fa-euro-sign text-2xl text-black mr-2"></i>
      <span class="text-2xl text-black" v-show="currentHome.price !== null">
        {{ currentHome.price }}
      </span>
      <span class="text-2xl text-black" v-show="currentHome.price === null">
        545
      </span>
      / night
    </h1>
    <table class="border w-full mt-5 border-collapse shadow-xl table-fixed">
      <tr class="*:border *:text-center *:border-pink-500 w-full *:py-1">
        <td>
          <p class="font-semibold text-sm">Check In</p>
          <p class="font-semibold text-sm text-pink-500">
            {{ currentHome.first_review }}
          </p>
        </td>
        <td>
          <p class="font-semibold text-sm">Check Out</p>
          <p class="font-semibold text-sm text-pink-500">
            {{ currentHome.last_review }}
          </p>
        </td>
      </tr>
      <tr
        class="*:text-center w-full *:py-1 border-collapse *:border-e-0 *:border-pink-500 *:border border border-pink-500"
      >
        <td>
          <p class="font-semibold text-sm">Guests</p>
          <p class="font-semibold text-md text-pink-500">
            {{ currentHome.guests_included }}
          </p>
        </td>
      </tr>
    </table>
    <button
      class="bg-pink-500 w-full py-3 mt-3 shadow-xl rounded-xl font-semibold text-white"
    >
      Reserve
    </button>
    <!-- Pakage -->
    <div class="mt-5">
      <div class="flex justify-between mb-3">
        <h1 class="text-gray-700 text-lg font-semibold underline">
          Monthly Price
        </h1>
        <h1 class="text-gray-700 font-semibold underline">
          <i class="fa-solid fa-euro-sign"></i>
          <span v-show="currentHome.price !== null">
            {{ currentHome.price * 30 }}
          </span>
          <span v-show="currentHome.price === null">
            {{ 545 * 30 }}
          </span>
        </h1>
      </div>
      <h1 class="font-semibold text-lg">Maximun Nights</h1>
      <div class="flex justify-between mt-2">
        <h1 class="text-gray-700 font-semibold underline">
          <i class="fa-solid fa-euro-sign"></i>
          <span v-show="currentHome.price !== null">
            {{ currentHome.price }}
          </span>
          <span v-show="currentHome.price === null"> 545 </span>
          x {{ currentHome.maximum_nights }} nights
        </h1>
        <h1 class="text-gray-700 font-semibold underline">
          <i class="fa-solid fa-euro-sign"></i>
          <span v-show="currentHome.price !== null">
            {{ currentHome.price * currentHome.maximum_nights }}
          </span>
          <span v-show="currentHome.price === null">
            {{ 545 * currentHome.maximum_nights }}
          </span>
        </h1>
      </div>
      <h1 class="font-semibold text-lg mt-2">Minimun Nights</h1>
      <div class="flex justify-between mt-2">
        <h1 class="text-gray-700 font-semibold underline">
          <i class="fa-solid fa-euro-sign"></i>
          <span v-show="currentHome.price !== null">
            {{ currentHome.price }}
          </span>
          <span v-show="currentHome.price === null"> 545 </span>
          x {{ currentHome.minimum_nights }} nights
        </h1>
        <h1 class="text-gray-700 font-semibold underline">
          <i class="fa-solid fa-euro-sign"></i>
          <span v-show="currentHome.price !== null">
            {{ currentHome.price * currentHome.minimum_nights }}
          </span>
          <span v-show="currentHome.price === null">
            {{ 545 * currentHome.minimum_nights }}
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>
