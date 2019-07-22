import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/views/home/index'
import layout from '@/views/layout/index'
import brand from '@/views/brand/index'
import product from '@/views/product/index'
import event from '@/views/event/index'
import notFound from '@/views/notfound'

import proLayout from '@/views/layout/proLayout'
import bagsGift from '@/views/product/components/bagsGift'
import bagsGroup from '@/views/product/components/bagsGroup'
import bagsMax from '@/views/product/components/bagsMax'
import bagsTaste from '@/views/product/components/bagsTaste'
import giftLight from '@/views/product/components/giftLight'
import giftSouvenir from '@/views/product/components/giftSouvenir'
import styleTop from '@/views/product/components/styleTop'
import styleYear from '@/views/product/components/styleYear'

// const brand = () => import(/* webpackChunkName: "group-brand" */ '../views/brand/index.vue')

export const constantRouterMap = [
  {
    path: '',
    // redirect: '/home',
    component: home,
    meta: {
      // title: '三品五味'
    }
  }, {
    path: '/index',
    // redirect: '/',
    component: layout,
    children: [
      {
        name: 'brand',
        path: 'brand',
        component: brand,
        meta: {
          // title: '品牌介绍'
        }
      }, {
        name: 'product',
        path: 'product',
        component: product,
        meta: {
          // title: '产品介绍'
        },
      }, {
        name: 'event',
        path: 'event',
        component: event,
        meta: {
          // title: '茶事报道'
        }
      }
    ]
  }, {
    path: '/product',
    component: proLayout,
    children: [
      {
        path: 'bags-gift',
        component: bagsGift
      }, {
        path: 'bags-group',
        component: bagsGroup
      }, {
        path: 'bags-max',
        component: bagsMax
      }, {
        path: 'bags-taste',
        component: bagsTaste
      }, {
        path: 'gift-light',
        component: giftLight
      }, {
        path: 'gift-souvenir',
        component: giftSouvenir
      }, {
        path: 'style-top',
        component: styleTop
      }, {
        path: 'style-year',
        component: styleYear
      }
    ]
  }, {
    name: '404',
    path: '*',
    component: notFound
  }
]

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  // mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})