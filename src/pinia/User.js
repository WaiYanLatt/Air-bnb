import { defineStore } from "pinia";
const useUser = defineStore("user", {
  state: () => {
    return {
      currentUserID: null,
      isAuthenicated: false,
      users : [ ]
    };
  },
  actions : {
    createUser(user){
      this.users.push(user);
    },
  }
});
export default useUser;
