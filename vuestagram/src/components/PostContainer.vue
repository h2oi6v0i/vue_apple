<template>
  <div>
    <!-- ="" 여기에 데이터뿐만 아니라 props 이름도 쓸 수 있음 (props도 일종의 데이터) -->
    <post-item v-for="(item, index) in postContent" :key="index"
               :post-content="postContent[index]" 
    />

  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: { 
    PostItem 
  },
  
  name: 'PostContainer',

  props: {
    postContent: Array
  },
}
</script>

<style>

</style>