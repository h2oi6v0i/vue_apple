<template>
<div>

  <div class="menu">
    <a v-for="item in menus" :key="item">{{ item }}</a>
  </div>

  <div v-for="(item, i) in products" :key="i">
    <h4>{{ item }}</h4>
    <p>30 만원</p>
  </div>
</div>
 
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: [ '역삼동 원룸', '마곡동 원룸', '방배동 원룸' ],
      menus : [ 'Home', 'Products', 'About' ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: cornflowerblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  padding: 10px;
  color: #FFF;
  font-weight: 500;
}
</style>
