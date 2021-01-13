import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/results/:page/:query',
		name: 'Results',
		component: () =>
			import(/* webpackChunkName: "results" */ '../views/Results.vue'),
	},
	{
		path: '/details/:id',
		name: 'Details',
		component: () =>
			import(/* webpackChunkName: "details" */ '../views/Details.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
