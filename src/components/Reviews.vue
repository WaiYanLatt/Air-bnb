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
  <div>
    <div class="flex justify-center">
      <img src="/review1.jpg" class="w-24" />
      <p class="font-semibold text-8xl">4.92</p>
      <img src="/review.jpg" class="w-24" />
    </div>
    <div class="text-center">
      <h1 class="font-semibold text-2xl mb-3">Guest favorite</h1>
      <h1 class="font-semibold text-lg text-gray-500">
        One of the most loved homes on Airbnb
      </h1>
      <h1 class="font-semibold text-lg text-gray-500">
        based on ratings, reviews, and reliability
      </h1>
    </div>
    <!-- Clean reviews -->
    <div class="mt-10 flex justify-between">
      <!-- over all reviews -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold mb-2">Overall rating</h1>
        <div class="flex items-center">
          <h1 class="font-semibold mr-2 text-xs">5</h1>
          <div class="w-full bg-gray-200 rounded-full h-1">
            <div class="bg-gray-600 h-1 rounded-full w-[90%]"></div>
          </div>
        </div>
        <div class="flex items-center">
          <h1 class="font-semibold mr-2 text-xs">4</h1>
          <div class="w-full bg-gray-200 rounded-full h-">
            <div class="bg-gray-600 h-1 rounded-full w-[80%]"></div>
          </div>
        </div>
        <div class="flex items-center">
          <h1 class="font-semibold mr-2 text-xs">3</h1>
          <div class="w-full bg-gray-200 rounded-full h-1">
            <div class="bg-gray-600 h-1 rounded-full w-[60%]"></div>
          </div>
        </div>
        <div class="flex items-center">
          <h1 class="font-semibold mr-2 text-xs">2</h1>
          <div class="w-full bg-gray-200 rounded-full h-1">
            <div class="bg-gray-600 h-1 rounded-full w-[40%]"></div>
          </div>
        </div>
        <div class="flex items-center">
          <h1 class="font-semibold mr-2 text-xs">1</h1>
          <div class="w-full bg-gray-200 rounded-full h-1">
            <div class="bg-gray-600 h-1 rounded-full w-[20%]"></div>
          </div>
        </div>
      </div>
      <!-- cleanliess -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold">Cleanliness</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_cleanliness }} / 10
        </h1>
        <i class="fa-solid fa-broom mt-5 text-2xl text-gray-500"></i>
      </div>
      <!-- Accuracy -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold">Accuracy</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_accuracy }} / 10
        </h1>
        <i class="fa-solid fa-circle-check text-2xl text-gray-500 mt-5"></i>
      </div>
      <!-- Check In -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold">Check-in</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_checkin }} / 10
        </h1>
        <i class="fa-solid fa-key text-2xl text-gray-500 mt-5"></i>
      </div>
      <!-- Check In -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold">Communication</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_communication }} / 10
        </h1>
        <i class="fa-solid fa-message text-2xl text-gray-500 mt-5"></i>
      </div>
      <!-- location -->
      <div class="border-e-2 px-5 py-3 w-full">
        <h1 class="font-semibold">Location</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_location }} / 10
        </h1>
        <i class="fa-solid fa-map-location-dot text-2xl text-gray-500 mt-5"></i>
      </div>
      <!-- tags -->
      <div class="px-5 py-3 w-full">
        <h1 class="font-semibold">Value</h1>
        <h1 class="font-semibold">
          {{ currentHome.review_scores_value }} / 10
        </h1>
        <i class="fa-solid fa-tag text-2xl text-gray-500 mt-5"></i>
      </div>
    </div>
  </div>
</template>
