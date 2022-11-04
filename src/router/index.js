import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/index.vue'
import users from '../views/users/index.vue'
import personal from '../views/personal/index.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: layout,
		meta:{
			// isLogin:true
			
		}
	},
	{
		path: '/users',
		component: users,
		meta:{
			// isLogin:true
			
		}
	},
	{
		path: '/login',
		component: login,
		meta:{
			// isLogin:true+
		}
	},
	{
		path: '/personal',
		component: personal,
		meta:{
			// isLogin:true
			
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
