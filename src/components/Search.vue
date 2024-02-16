<script>
const apiKey = "cf34f77472634cee7316957636948e63";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export default {
  data() {
    return {
      weather: null,
      city: "",
    };
  },
  methods: {
    async getWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();

      this.weather = data;
    },
    searchCity() {
      this.getWeather(this.city);
      this.city = "";
    },
  },
};
</script>

<template>
  <div>
    <h1 class="mb-5 font-semibold text-red-500 text-xl">
      Check weather for your travel
    </h1>
    <form class="flex items-center" @submit.prevent="searchCity">
      <input
        type="text"
        v-model="city"
        placeholder="Search by city name or country"
        class="w-[90%] p-3 border-red-500 border font-semibold rounded-lg focus:outline-none"
      />
      <button class="bg-red-500 h-10 w-10 rounded-full ml-3">
        <i class="fa-solid fa-magnifying-glass text-white"></i>
      </button>
    </form>
    <div v-if="weather" class="flex mt-5 items-center">
      <img
        v-show="weather.weather[0].main === 'Clouds'"
        src="/cloudysky.gif"
        alt=""
        class="w-full h-[200px] rounded-lg relative object-cover"
      />
      <img
        v-show="weather.weather[0].main === 'Clouds'"
        src="/cloudy.gif"
        alt=""
        class="w-48 h-48 object-cover absolute"
      />
      <img
        v-show="weather.weather[0].main === 'Clear'"
        src="/sky.gif"
        alt=""
        class="w-full h-[200px] rounded-lg relative object-cover"
      />
      <img
        v-show="weather.weather[0].main === 'Clear'"
        src="/sun.gif"
        alt=""
        class="w-48 h-49 object-cover absolute"
      />
      <img
        v-show="weather.weather[0].main === 'Rain'"
        src="/rain.gif"
        alt=""
        class="w-full h-[200px] rounded-lg relative object-cover"
      />
      <img
        v-show="weather.weather[0].main === 'Rain'"
        src="/Raincloud.gif"
        alt=""
        class="w-52 h-32 object-cover absolute"
      />
      <img
        v-show="weather.weather[0].main === 'Mist'"
        src="/mistcon.gif"
        alt=""
        class="w-full h-[200px] rounded-lg relative object-cover"
      />
      <img
        v-show="weather.weather[0].main === 'Mist'"
        src="/mist.gif"
        alt=""
        class="w-48 h-48 object-cover absolute"
      />
      <img
        v-show="weather.weather[0].main === 'Drizzle'"
        src="/raindrop-gif.gif"
        alt=""
        class="w-full h-[200px] rounded-lg relative object-cover"
      />
      <img
        v-show="weather.weather[0].main === 'Dirzzle'"
        src="/dizzle.gif"
        alt=""
        class="w-48 h-48 object-cover absolute"
      />
      <div class="right-7 lg:right-32 absolute">
        <h1 class="font-semibold text-white lg:text-lg text-sm mt-2">
          City Name -
          <span class="text-white">
            {{ weather.name }}
          </span>
        </h1>
        <h1 class="font-semibold text-white lg:text-lg text-sm mt-2">
          Weather Condition -
          <span class="text-white">
            {{ weather.weather[0].main }}
          </span>
        </h1>
        <h1 class="font-semibold text-white lg:text-lg text-sm mt-2">
          Tempreature -
          <span class="text-white">
            ( {{ Math.round(weather.main.temp) }} ℃ )
          </span>
          <i class="fa-solid fa-temperature-three-quarters text-sky-500"></i>
        </h1>
        <h1 class="font-semibold text-white lg:text-lg text-sm mt-2">
          Humidity -
          <span class="text-white"> {{ weather.main.humidity }} % </span>
        </h1>
        <h1 class="font-semibold text-white lg:text-lg text-sm mt-2">
          Wind Speed -
          <span class="text-white"> {{ weather.wind.speed }} km/h </span>
        </h1>
      </div>
    </div>
    <div v-if="weather">
      <p
        v-show="weather.main.temp > 25"
        class="font-semibold text-sky-500 text-lg mt-3 italic text-right"
      >
        Please Take Some Juice.🥤
      </p>
      <p
        v-show="weather.main.temp < 25"
        class="font-semibold text-sky-500 text-lg mt-3 italic text-right"
      >
        Please Take Some Warm clothes.🧥
      </p>
    </div>
  </div>
</template>
