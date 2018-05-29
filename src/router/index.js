import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/home';
import User from '@/page/user/user';
import Product from '@/page/product/product';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
});
