<template>
    <nav>
        <button>Prev</button>
        <span>Page: {{page}} / {{totalPages}}</span>
        <button>Next</button>
    </nav>
</template>

<script>
export default {
    name: 'PageNav',
    data(){
        return {
            totalPages: Math.ceil(this.$store.state.results / 10),
            page: this.$route.params.page
        }
    },
    mounted() {
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