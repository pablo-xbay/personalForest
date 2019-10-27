<template>
  <div id="app" class="bg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body, html {
  height: 100%;
  padding: 0;
  margin: 0;
}

.bg {
  /* The image used */
  background-image: url("./assets/bg.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
