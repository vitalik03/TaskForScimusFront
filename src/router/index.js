import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/users/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users/id',
      name: 'getUserById',
      component: UserInfo
    }

  ]
})
