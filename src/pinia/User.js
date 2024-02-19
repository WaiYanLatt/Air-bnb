import { defineStore } from "pinia";
const useUser = defineStore("user", {
  state: () => {
    return {
      currentUserID: null,
      isAuthenicated: false,
      users : [ 
        {
          id : 1,
          email : 'waiyanlatt@gmail.com',
          password : '12345',
        }
      ]
    };
  },
  actions : {
    createUser(user){
      this.users.push(user);
  },
  }
});
export default useUser;
