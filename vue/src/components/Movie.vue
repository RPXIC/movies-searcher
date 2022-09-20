<template>
  <div class="detail" @click="navigate">
    <img :src="movie.Poster" />
    <p>{{ movie.Title }}</p>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script>
export default {
  name: 'movie-component',
  props: ['movie'],
  methods: {
    navigate() {
      this.$router.push(`/details/${this.movie.imdbID}`)
    }
  }
}
</script>

<style scoped>
.detail:hover {
  cursor: pointer;
}
</style>
