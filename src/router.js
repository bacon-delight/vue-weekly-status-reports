import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('./views/Dashboard.vue')
		},
		{
			path: '/template1',
			name: 'template1',
			component: () => import('./views/Template1.vue')
		},
		{
			path: '/archive1',
			name: 'archive1',
			component: () => import('./views/Archive1.vue')
		},
		{
			path: '/template2',
			name: 'template2',
			component: () => import('./views/Template2.vue')
		},
		{
			path: '/archive2',
			name: 'archive2',
			component: () => import('./views/Archive2.vue')
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: () => import('./views/Feedback.vue')
		},
	]
})
