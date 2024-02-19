import { defineStore } from "pinia";

const SearchStay = defineStore("searchstay", {
  state: () => {
    return {
      results: [],
      fav: [],
    };
  },
  actions: {
    async getStay(location) {
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

    setStay(results) {
      this.results = results;
    },

    // toggleFavorite(result) {
    //   const index = this.fav.findIndex((res) => res.id === result.id);
    //   if (index === -1) {
    //     this.fav.push(result);
    //   } else {
    //     this.fav.splice(index, 1);
    //   }
    // },
  },
});

export default SearchStay;
