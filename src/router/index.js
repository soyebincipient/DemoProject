import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../components/Registration.vue';
import Dashboard from '../components/Dashboard.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// const currentUser = localStorage.getItem('user');
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !currentUser)  next('/');
//   else next()
// })
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = localStorage.getItem('user');
  console.log('@@', requiresAuth, currentUser);
  if (requiresAuth && !currentUser) {
    console.log('token not found');
    next('/');
  } else {
    console.log('token  found');
    next();
  }
});

export default router
