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
          description: "Learm a Plan a tokyo trip with advisor Yuko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jp1.webp',
          secondUrl : '/jpgif.gif',
        },
        {
          id: 4,
          description: "Learm a Plan a tokyo trip with advisor Yuko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jp1.webp',
          secondUrl : '/jpgif.gif',
        },
        {
          id: 5,
          description: "Learm a Plan a tokyo trip with advisor Yuko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jp1.webp',
          secondUrl : '/jpgif.gif',
        },
        {
          id: 6,
          description: "Learm a Plan a tokyo trip with advisor Yuko",
          price: 7,
          review: '5.0',
          address: "Japan",
          firstUrl : '/jp1.webp',
          secondUrl : '/jpgif.gif',
        }
      ],
    };
  },
});
export default useTrip;
