import { createRouter , createWebHistory } from 'vue-router'

const routes = [
     {
        path : '/',
        name : 'stays',
        component : () => import('./views/StayView.vue')
     },
     {
      path : '/exp',
      name : 'exprience',
      component : () => import('./views/Exprience.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes: routes,
 });


 export default router;
