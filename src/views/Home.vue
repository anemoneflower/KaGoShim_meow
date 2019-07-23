<template>
  <div class="home">
    <homecarousel/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Hello.vue'
import homecarousel from '@/components/HomeCarousel.vue'
export default {
  name: 'home',
  components: {
    homecarousel,
    HelloWorld
  }
}
</script>

<style scoped>
    
</style>
