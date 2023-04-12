<template>

<div>
  <div class="menu">
    <a v-for="item in menus" :key="item">{{ item }}</a>
  </div>

  <div v-if="modal" class="black-bg">
    <div class="white-bg">
      <h4>{{ oneroom[ clickedItem ].title }}</h4>
      <p>{{ oneroom[ clickedItem ].content }}</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <div v-for="(a, i) in oneroom" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="modal = true; clickedItem = i">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
  </div>


</div>
 
</template>

<script>

import oneroomList from "./assets/oneroom.js";

export default {
  name: 'App',

   // 현재 상태
  data() {
    return {
      clickedItem: 0, // 번호 저장
      oneroom: oneroomList,
      modal: false,
      products: [ '역삼동 원룸', '마곡동 원룸', '방배동 원룸' ],
      menus : [ 'Home', 'Products', 'About' ],
      신고수: [ 0, 0, 0, ]
    }
  },
}

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0
}

.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  padding: 20px;
  background-color: #FFF;
  border-radius: 8px;
}


.room-img {
  width: 100%;
  margin-top: 40px;
}

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
