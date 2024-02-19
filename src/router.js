import { createRouter , createWebHistory } from 'vue-router'

const routes = [
     {
        path : '/',
        name : 'stays',
        component : () => import('./views/StayView.vue')
     },
     {
        path : '/:id',
        name : 'singleview',
        component : () => import('./views/Singlepage.vue')
     },
     {
      path : '/exp',
      name : 'exprience',
      component : () => import('./views/Exprience.vue')
     },
     {
      path : '/register',
      name : 'register',
      component : () => import('./views/Register.vue')
     },
]

const router = createRouter({
   history: createWebHistory(),
   routes: routes,
 });


 export default router;
