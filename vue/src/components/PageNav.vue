<template>
    <nav>
        <button v-bind:disabled="getPage <= 1 || getPage === pages" @click="prev">Prev</button>
        <span v-if="pages > 0">Page: {{getPage}} / {{pages}}</span>
        <span v-if="pages === 0">No results</span>
        <button v-bind:disabled="getPage >= pages" @click="next">Next</button>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PageNav',
    computed: {
        ...mapState(['pages']),
        getPage(){
            return Number(this.$route.params.page)
        },
        getQuery(){
            return this.$route.params.query
        }
    },
    methods: {
        next: function(){
            this.$router.push(`/results/${this.getPage+1}/${this.getQuery}`)
        },
        prev: function(){
            this.$router.push(`/results/${this.getPage-1}/${this.getQuery}`)
        },
    },
}
</script>

<style scoped>
    nav {
        text-align: center;
        margin: 1rem 0;
    }
    button {
        margin: 1rem 1rem 0.2rem;
        background-color: #1ddb46bd;
    }
    button:hover {
        cursor: pointer;
        background-color: #1ddb46;
    }
</style>