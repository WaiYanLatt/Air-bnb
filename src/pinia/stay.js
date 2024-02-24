import { defineStore } from "pinia";
const useStay = defineStore("stay", {
  state: () => {
    return {
      results: [],
      location: "",
      fav : [],
    };
  },
  actions: {
    async getStay() {
      const options = {
        method: "GET",
        headers: { "User-Agent": "insomnia/8.6.1" },
      };

      const response = await fetch(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?where&order_by=last_scraped%20desc&limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false",
        options
      );
      const data = await response.json();
      // let indicesToRemove = [
      //   1, 5, 6, 13, 17, 21, 23, 24, 28, 30, 34, 35, 37, 39, 40, 42, 45, 46, 48,
      //   56, 59, 60, 64, 66, 71, 72, 75, 76, 78, 80, 82, 84, 85, 87, 91, 93, 95,
      //   99,
      // ]; // indices of the elements you want to remove

      // // Remove elements at the specified indices
      // indicesToRemove.sort((a, b) => b - a); // Sorting in descending order to avoid index issues
      // indicesToRemove.forEach((index) => {
      //   data.results.splice(index, 1);
      // });
      return data.results;
    },


    setStay(results) {
      this.results = results;
    },

    async SearchStay(location) {
      const baseURL =
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records";

      const params = new URLSearchParams({
        where: `search(host_location, "${location}")`,
        order_by: "last_scraped desc",
        limit: "100",
        offset: "0",
        timezone: "UTC",
        include_links: "false",
        include_app_metas: "false",
      });

      const url = `${baseURL}?${params.toString()}`;

      const options = {
        method: "GET",
      };

      const response = await fetch(url, options);
      const data = await response.json();

      return data.results;
    },

    setSearch(results) {
      this.results = results;
    },
  },
});
export default useStay;
