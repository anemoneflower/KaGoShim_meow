<template>
    <header class="header">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            냥이들 홈
          </router-link>
        </div>

        <div class="navbar-end">
          <router-link to="/goods/add" class="navbar-item">냥이템 등록</router-link>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'contactsheader'
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
  }
  .navbar {
    background: #ffd9df;
    color: white;
  }
  .navbar-item, .navbar-link {
    color: white;
  }
  a {
    color: white;
  }
</style>