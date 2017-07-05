import Vue from 'vue';
import Router from 'vue-router';
//  1、定义组件
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
import Seller from '@/components/seller/seller';

Vue.use(Router); // 如果使用模块化机制编程,导入vue和vue-router,要使用Vue.use(Router)

//  3、创建router实例，然后传routes配置
export default new Router({
  //  2、定义路由，每个路由映射一个组件
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
});

