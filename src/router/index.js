import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Bill from '@/pages/bill/Bill'
import Repayment from '@/pages/repayment/Repayment'
import Automatic from '@/pages/repayment/automatic/Automatic'
import Detailed from '@/pages/bill/detailed/Detailed'
import Header from '@/pages/home/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/repayment',
      name: 'Repayment',
      component: Repayment
    },
    {
      path: '/automatic',
      name: 'Automatic',
      component: Automatic
    },
    {
      path: '/detailed',
      name: 'Detailed',
      component: Detailed
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
