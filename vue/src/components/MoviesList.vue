<template>
    <ul class="container">
        <li class="content" v-for='movie of movies' :key="movie.imdbID" >
            <Movie :movie='movie' />
        </li>
    </ul>
</template>

<script>
import Movie from '../components/Movie'

export default {
   name: 'MoviesList',
   components:{
       Movie
   },
   computed: {
       movies(){
           return this.$store.state.movies
       }
   },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
    }
    .content {
        list-style: none;
        border: 1px solid hsla(0,0%,50.2%,.30980392156862746);
        margin: 0 auto;
        text-align: center;
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
        padding: .5rem;
    }
</style>