<template>
  <div class="bg-filter">
    <router-view/>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    color: white;
  }
  #app {
    width: 100%;
    min-height: 100vh;
    background: #fff url('./assets/bg.jpg') 50%/cover no-repeat fixed;
  }
  .bg-filter {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #00000094;
  }
</style>
