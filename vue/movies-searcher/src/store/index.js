import { createStore } from 'vuex'
import { API_KEY } from '../../apiKey'

export default createStore({
	state: {
		movies: {},
		pages: 0,
		response: null,
		error: null,
		loading: false,
	},
	mutations: {
		fetchData(state, payload) {
			const {
				Search = [],
				totalResults = 0,
				Response = null,
				Error = null,
			} = payload
			state.movies = Search
			state.pages = Math.ceil(totalResults / 10)
			state.response = Response
			state.error = Error
			state.loading = false
		},
	},
	actions: {
		async fetchData(context, payload) {
			this.loading = true
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${API_KEY}&page=${payload.page}&s=${payload.query}`
			)
			const response = await res.json()
			context.commit('fetchData', response)
		},
	},
	modules: {},
})
