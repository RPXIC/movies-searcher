import { createStore } from 'vuex'
import { API_KEY } from '../../apiKey'

export default createStore({
	state: {
		movies: {},
		pages: 0,
		response: null,
		error: null,
		loading: false,
		actors: null,
		awards: null,
		country: null,
		director: null,
		genre: null,
		metascore: null,
		plot: null,
		poster: null,
		production: null,
		ratings: null,
		released: null,
		runtime: null,
		title: null,
		type: null,
		writer: null,
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
		fetchDetails(state, payload) {
			const {
				Actors,
				Awards,
				Country,
				Director,
				Genre,
				Metascore,
				Plot,
				Poster,
				Production,
				Ratings,
				Released,
				Runtime,
				Title,
				Type,
				Writer,
			} = payload
			state.actors = Actors
			state.awards = Awards
			state.country = Country
			state.director = Director
			state.genre = Genre
			state.metascore = Metascore
			state.plot = Plot
			state.poster = Poster
			state.production = Production
			state.ratings = Ratings
			state.released = Released
			state.runtime = Runtime
			state.title = Title
			state.type = Type
			state.writer = Writer
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
		async fetchDetails(context, payload) {
			this.loading = true
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${API_KEY}&i=${payload.id}`
			)
			const response = await res.json()
			context.commit('fetchDetails', response)
		},
	},
	modules: {},
})
