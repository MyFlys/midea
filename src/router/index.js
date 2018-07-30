import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import MdDetailSection from '../components/detail/sectionOne/MdDetailSection'
import MdDetailSectionList from '../components/detail/sectionTwo/MdDetailSectionList'
import MdDetailComment from '../components/detail/sectionThree/MdDetailComment'
//myf
import MideaDetail from '@/pages/MideaDetail'
import MdLogin from '@/pages/MdLogin'
//xll
import Index from '@/pages/Index'
//xj
import MdList from '../pages/MdList.vue'
import MdListli from '../pages/MdListli.vue'
//WQ
import classify from '@/pages/classify'
//lz
import order from '../pages/order.vue'
import addressoutone from "../pages/addressoutone.vue"
import addressin from "../pages/addressin.vue"
import  duihuan from "../pages/duihuan.vue"
import stampbill from "../pages/stampbill.vue"
import cardmi from "../pages/cardmi.vue"
import addresshome from "../components/addressin/addresshome.vue"
//wjh
import Carts from'@/pages/Carts.vue'
import promotion from '../components/Carts/CartsSection/promotion.vue'
import page from '../pages/page.vue'
import main from '../pages/main.vue'
import mysql from'@/pages/mysql.vue'


Vue.use(Router)

export default new Router({
  routes: [
        // {
        //   path: '/',
        //   name: 'page',
        //   component: page,
        //   children:[
        //     {
        //       path: '/',
        //       name: 'Index',
        //       component: Index,
        //     },
        //     {
        //       path: '/classify',
        //       name: 'classify',
        //       component: classify
        //     },
        //   ]
        //
        // },
    {
      path:"/MdLogin",
      name: 'MdLogin',
      component: MdLogin,
    },
    {
      path:"/mysql",
      name: 'mysql',
      component: mysql,
    },
      {
        path: '/',
        name: 'Index',
        component: Index,
      },
      {
        path: '/classify',
        name: 'classify',
        component: classify
      },
        // {
        //   path: '/promotion',
        //   name: 'promotion',
        //   component: promotion
        // },

    //xll
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    //wq
    // {
    //   path: '/classify',
    //   name: 'classify',
    //   component: classify
    // },
    //xj
    {
      path: '/MdList',
      name: 'MdList',
      component: MdList
    },
    {
      path: '/MdListli',
      name: 'MdListli',
      component: MdListli
    },
    //myf
    {
      path: '/MideaDetail',
      name: 'MideaDetail',
      component: MideaDetail,
      children:[

        {
          path: '/MdDetailSection',
          name: 'MdDetailSection',
          component: MdDetailSection,
        },
        {
          path: '/MdDetailSectionList',
          name: 'MdDetailSectionList',
          component: MdDetailSectionList,
        },
        {
          path: '/MdDetailComment',
          name: 'MdDetailComment',
          component: MdDetailComment,
        },
      ]
    },
    //lz
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/addressoutone',
      name: 'addressoutone',
      component: addressoutone
    },
    {
      path: '/addressin',
      name: 'addressin',
      component: addressin
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component: duihuan
    },
    {
      path: '/stampbill',
      name: 'stampbill',
      component: stampbill
    },
    {
      path:'/cardmi',
      name:'cardmi',
      component:cardmi
    },
    {
      path:'/addresshome',
      name:'addresshome',
      component:addresshome
    },
  //  wjh
    {
      path: '/Carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: promotion
    }

  ]
})
