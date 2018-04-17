import Vue from 'vue'
import Router from 'vue-router'
import GoodIndex from '@/pages/index/Index.vue'
import Category from '@/pages/category/Category.vue'
import Admin from '@/pages/admin/admin.vue'
import MyCollection from '@/pages/myCollection/MyCollection'
import Active from '@/pages/active/Active'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    },
    {
      path: '/goods',
      name: 'GoodIndex',
      component: GoodIndex
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/admin_m',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/my_collecion',
      name: 'MyCollection',
      component: MyCollection
    }
  ]
})
