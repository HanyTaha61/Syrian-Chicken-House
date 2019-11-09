import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menu from '@/components/menu'
import contact from '@/components/contact'
import branches from '@/components/branches'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/', component: home},
    {path:'/menu', component: menu},
    {path:'/contact', component: contact},
    {path:'/branches', component: branches}
  ]
})
