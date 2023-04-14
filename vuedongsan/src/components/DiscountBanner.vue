<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discount }}% 할인!</h4>
  </div>
</template>

<script>
export default {
    name: 'DiscountBanner',

    data() {
      return {
        discount: 20,
      }
    },
    
    mounted() {
      setInterval(() => {
        this.discount--;
      }, 1000 );
    },

}
</script>

<style>

</style>