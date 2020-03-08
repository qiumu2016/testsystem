<template>
  <div id="app">
      <router-link to="/device_u">device_u</router-link> |
      <router-link to="/device_uv">device_uv</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
