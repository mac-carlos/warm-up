<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-2">
      <SideBar />
    </div>
    <div class="column">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>
@font-face {
  font-family: 'cerebri';
  src: url(./assets/fonts/cerebri-sans-pro/CerebriSansPro-Regular.ttf) format('ttf');
}

:root {
  --font-dark: #1B1B2B;
  --blue: #33f;
  --gray-text: #373753;
}

.cerebri-typeface {
  font-family: 'cerebri', sans-serif;
}

main {
  background: #f5f5f5;
}

footer img {
  width: 100%;
  margin: 0;
}
</style>