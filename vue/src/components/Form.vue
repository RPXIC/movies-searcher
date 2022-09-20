<template>
  <header>
    <h1>Movies Searcher</h1>
    <form @submit.prevent>
      <input type="text" placeholder="Find a movie..." v-model="query" autofocus />
      <button @click="search(query)">Search</button>
    </form>
  </header>
</template>

<script>
export default {
  name: 'form-component',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search(query) {
      if (query.trim() === '') return
      this.$router.push(`/results/1/${query}`)
    }
  }
}
</script>

<style scoped>
header {
  padding-top: 1rem;
  text-align: center;
}
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
