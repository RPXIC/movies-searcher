<template>
    <div class="detail">
        <img :src='movie.Poster'>
        <p>{{ movie.Title }}</p>
        <p>{{ movie.Year }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Movie',
        props: ['movie']
    }
</script>

<style scoped>
    .detail:hover{
        cursor: pointer;
    }
</style>
