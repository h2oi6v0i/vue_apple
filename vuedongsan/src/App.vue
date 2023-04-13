<template>

<div>

  <transition name="fade">
      <detail-modal :oneroom = "oneroom"
                :clickedItem= "clickedItem"
                :modal = "modal" 
                @closeModal = "modal = false; clickedItem = $event"
                /> 
  </transition>



  <div class="menu">
    <a v-for="item in menus" :key="item">{{ item }}</a>
  </div>

  
  <discount-banner/>

  <product-card v-for="( a, i ) in oneroom" :key="i"
                :oneroom = "oneroom[i]" 
                @openModal = "modal = true; clickedItem = $event"
                @closeModal = "modal = false; clickedItem = $event"
                /> 


</div>
 
</template>

<script>

import oneroomList from "./assets/oneroom.js";
import DetailModal from './components/DetailModal.vue';
import DiscountBanner from './components/DiscountBanner.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  name: 'App',

  components: {
    DiscountBanner,
    DetailModal,
    ProductCard
  },

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0
}

.discount {
  background-color: #EEE;
  padding: 10px;
  margin: 10px;
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
