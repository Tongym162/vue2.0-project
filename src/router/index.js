import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/pages/Menu'
import TestVuex from '@/pages/TestVuex'
import CustomForm from '@/pages/CustomForm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: TestVuex
    },
    {
      path: '/customform/:id',
      name: 'customform',
      component: CustomForm
    }
  ]
})
