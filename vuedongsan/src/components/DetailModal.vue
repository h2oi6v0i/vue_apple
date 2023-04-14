<template>
   <div v-if="modal" class="black-bg">
    <div class="white-bg">
      <img :src="oneroom[ clickedItem ].image" style="width: 100%">
      <h4>{{ oneroom[ clickedItem ].title }}</h4>
      <p>{{ oneroom[ clickedItem ].content }}</p>
      <input v-model="month"> 
      <p>{{ month }}개월 선택함 : {{ oneroom[ clickedItem ].price * month }}</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>

  <!-- TODO: 모달창 내에 input이 있는데 여기에 2를 기입했을 때 알림창 alert() 띄우기 -->

</template>

<script>

export default {
    name: 'DetailModal',

    data() {
      return {
        month: 1, // 초기값
      }
    },

    /**
     * input에 문자 입력하면 경고문 띄우기 -> watch(data 감시하는 함수) 사용
     * - 감시할 데이터 이름으로 함수명 만들기
     */
    watch: {
      month( month ) { // month라는 데이터가 변할 때마다 이 함수 실행됨
        if ( isNaN( month ) ) {
          alert( '문자 입력은 안 됩니다.' );
          this.month = 1;
        }
      }
    },
    
    props: {
        oneroom     : Array,
        clickedItem : Number,
        modal       : Boolean
    },

    methods: {
      closeModal() {
        this.$emit( 'closeModal', this.oneroom.id );
      }
    },
    
    beforeUpdate() {
      if( this.month == 2 ) {
        alert( "2 입력은 안 됨" );
      }
    },
}
</script>

<style>

</style>