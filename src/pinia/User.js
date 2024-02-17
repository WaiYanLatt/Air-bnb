import { defineStore } from "pinia";
const useUser = defineStore("user", {
  state: () => {
    return {
      currentUserID: null,
      isAuthenicated: false,
      users : [
        //Lisa
        {
            id: 1,
            name: "Lalisa Manobal",
            email: "lisa@gmail.com",
            password : '12345',
          },
          //Rose
          {
            id: 2,
            name: "Rosean Park",
            email: "rose@gmail.com",
            password : '12345',
          },
          //Jisso
          {
            id: 3,
            name: "Kim Jisso",
            email: "jisso@gmail.com",
            password : '12345',
          },
      ]
    };
  },
});
export default useUser;
