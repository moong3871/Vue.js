import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Category from '../views/Category.vue';
import Market from '../views/Market.vue';
import MyLibrary from '../views/MyLibrary.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
  },
  {
    path: '/mylibrary',
    name: 'MyLibrary',
    component: MyLibrary,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
