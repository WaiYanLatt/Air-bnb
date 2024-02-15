import { defineStore } from "pinia";
const useTrip = defineStore("Trip", {
  state: () => {
    return {
      trips : [
        {
          id: 1,
          description: "Learm a Plan a tokyo trip with advisor Yuko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jp1.webp',
          secondUrl : '/jp2.webp',
        },
        {
          id: 2,
          description: "Plan the perfect customize Japan trip.",
          price: 42,
          review: '5.0',
          address: "Japan",
          firstUrl : '/monk.jfif',
          secondUrl : '/monkg.gif',
        },
        {
          id: 3,
          description: "Create a customized Guide Book of Toyko",
          price: 31,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jpplace.webp',
          secondUrl : '/jpgif.gif',
        },
        {
          id: 4,
          description: "Plan a Tour Not Crowed but Cool Sites in toyko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/fuji.jpg',
          secondUrl : '/fujig.gif',
        },
        {
          id: 5,
          description: "Design a perfect Toyko trip with a Toyko expret",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/japansakura.jpg',
          secondUrl : '/sakura.gif',
        },
        {
          id: 6,
          description: "Plan A Dream Japan Vacation",
          price: 8,
          review: '5.0',
          address: "Japan",
          firstUrl : '/japansakura1.jfif',
          secondUrl : '/river.gif',
        }
      ],
    };
  },
});
export default useTrip;
