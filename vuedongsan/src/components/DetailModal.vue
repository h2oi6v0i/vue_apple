<template>
   <div v-if="modal" class="black-bg">
    <div class="white-bg">
      <img :src="oneroom[ clickedItem ].image" style="width: 100%">
      <h4>{{ oneroom[ clickedItem ].title }}</h4>
      <p>{{ oneroom[ clickedItem ].content }}</p>
      <!-- <button @click="modal = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailModal',
    
    props: {
        oneroom     : Array,
        clickedItem : Number,
        modal       : Boolean
    }
}
</script>

<style>

</style>