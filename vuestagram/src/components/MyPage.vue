<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="( item, index ) in follower" :key="index">
      <div class="profile" :style="`background-image: url( ${ item.image })`"></div>
      <span class="profile-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, toRefs, ref, watch, computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  name: "MyPage",
  props: {
    one: Number, // 이걸 써줘야 하는군..
  },

  /**
   * Composition API
   * - setup() 이라는 hook 같은 걸 만들고 항상 그 안에 코드를 짠다.
   * - Lifecycle hook 중에서 created랑 유사하다. '컴포넌트를 만들기 전에 이거부터 실행해 주세요!'
   * - 거의 모든 기능 개발을 setup 한 곳에서 할 수 있다.
   * - setup() 안에서 데이터 생성하는 법 : ref(데이터)
   * - 실시간 재렌더링이 가능한 이유는 reference data 덕분!
   * - mounted() { 컴포넌트가 장착된 후 실행할 코드 }  
   *   Composition API에서는 onMounted( () => {})
   * - Composition API에서 Lifecycle Hook 쓰려면 앞에 on 붙여야 함
   */

  /**
   * 첫 번째 파라미터는 항상 props, 두 번째 파라미터는 특별한 변수들(attr, slots, emit, ...)
   * 둘 다 쓸 필요는 없음 
   */
  setup( props ) {
    let follower = ref( [] );

    /**
     * 🔍 PROPS
     * props; 이렇게만 쓰면 부모에서 데이터 수정해도 실시간 렌더링 안 됨
     * ref( props ); 이렇게 쓰면 됨! ---> let myProps = ref( props );
     * props는 보통 여러 개의 항목이 있다.
     * 여러 개의 항목들을 한 번에 ref로 묶고 싶을 때 쓰는 게 toRefs
     * { one } 이게 바로 Destructuring 문법!
     */

    let { one } = toRefs( props );
    console.log( one.value );

    /**
     * 🔍 WATCH
     * 데이터 감시
     * watch( 감시할 데이터, () => { 데이터가 변경될 때마다 실행할 코드 } )
     */
    watch( one, () => {
        console.log('안녕');
    })

    onMounted( () => {
        axios.get( './follower.json' ).then( ( realData ) => {
            follower.value = realData.data;  // [{…}, {…}, {…}, {…}, {…}]
        })
    })

    /**
      * 🔍 COMPUTED
      * 데이터 연산 결과 잠깐 저장해놓는 곳
      * computed( () => { return 연산 결과 } )
      * 이 경우엔 result라는 변수에 computed 한 결과가 들어가 있을 것이다.
      * computed도 일종의 데이터취급이라서 .value라고 찍어야 제대로 잘 출력된다.
      */
     let result = computed( () => { return follower.value.length });
     console.log( result.value );

     /** 
      * 🔍 VUEX STORE
      * 1. import { useStore } from 'vuex';
      * 2. 변수에 담으면 $store와 같은 기능을 한다.
      * 
      */
     let store = useStore();
     console.log( store.state.name ); // Gary

    return { follower }; // 만든 변수 위에서 갖다 쓰기
  }
};
</script>

<style></style>
