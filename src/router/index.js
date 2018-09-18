import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import NewAd from '@/components/Ads/NewAd'
import AdList from '@/components/Ads/AdList'
import Orders from '@/components/User/Orders'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ]
})
