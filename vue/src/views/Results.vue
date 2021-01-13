<template>
    <div>
        <Form />
        <PageNav />
        <MoviesList />
    </div>
</template>

<script>
import Form from '../components/Form'
import MoviesList from '../components/MoviesList'
import PageNav from '../components/PageNav'
import { mapActions } from 'vuex'

export default {
    name: 'Results',
    components: {
        Form,
        MoviesList,
        PageNav
    },
    mounted(){
        this.getData()
    },
    watch: {
        '$route': 'getData'
    },
    methods: {
        ...mapActions(['fetchData']),
        getData: function() {
            return this.$store.dispatch('fetchData', { page: this.$route.params.page, query: this.$route.params.query })
        }
    },
}
</script>

<style scoped>
  input {
    height: 2rem;
  }
  button {
    height: 2.38rem;
    background-color: #1ddb46bd;
  }
  button:hover {
    background-color: #1ddb46;
    cursor: pointer;
  }
</style>
