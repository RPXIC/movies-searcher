<template>
    <div class="container">
        <button class="button" @click="goBack">Go Back</button>
        <h1>{{details.title}}</h1>
        <div>
            <img :src='details.poster' :alt='details.title' />
        </div>
        <h3>Actors: {{details.actors}}</h3>
        <p>Description: {{details.plot}}.</p>
        <div>
            <p>Awards: {{details.awards}}.</p>
            <p>Country: {{details.country}}.</p>
            <p>Metascore: {{details.metascore}}.</p>
            <p>Director: {{details.director}}.</p>
            <p>Genre: {{details.genre}}.</p>
            <p>Production: {{details.production}}.</p>
            <p>Ratings:</p>
                <p v-for='rating of details.ratings' :key="rating.imdbID">
                    Source: {{rating.Source}} - Value: {{rating.Value}}
                </p>

            <p>Released: {{details.released}}. </p>
            <p>Runtime: {{details.runtime}}. </p>
            <p>Type: {{details.type}}. </p>
            <p>Writer: {{details.writer}}. </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Details',
    mounted(){
        this.getDetails()
    },
    methods: {
        ...mapActions(['fetchDetails']),
        getDetails: function() {
            return this.$store.dispatch('fetchDetails', { id: this.$route.params.id })
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    computed: {
        details(){
            return {
                actors: this.$store.state.actors,
                awards: this.$store.state.awards,
                country: this.$store.state.country,
                director: this.$store.state.director,
                genre: this.$store.state.genre,
                metascore: this.$store.state.metascore,
                plot: this.$store.state.plot,
                poster: this.$store.state.poster,
                production: this.$store.state.production,
                ratings: this.$store.state.ratings,
                released: this.$store.state.released,
                runtime: this.$store.state.runtime,
                title: this.$store.state.title,
                type: this.$store.state.type,
                writer: this.$store.state.writer,
            }
       }
   },
}
</script>

<style scoped>
    .container{
        text-align: center;
    }
    .button{
        width: 100%;
        height: 2.38rem;
        background-color: rgba(29,219,70,.7411764705882353);
    }
    .button:hover{
        background-color: #1ddb46;
        cursor: pointer;
    }
</style>
