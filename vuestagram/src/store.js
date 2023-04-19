import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'Gary',
            age: 28,
            likes: 32,
            clickedLike: false,
            more: {},
        }
    },

    /**
     * state 수정 방법 정의하는 곳
     * 이렇게 파라미터 하나 추가하면 위에 있는 state를 뜻한다.
     */
    mutations: {
        changeName(state) {
            state.name = 'Yujung';
        },

        addAge( state, payload ) {
            state.age += payload;
        },

        addLikes( state ) {
            if ( state.clickedLike === false  ) {
                state.likes++;
                state.clickedLike = true,
                console.log( state.likes, state.clickedLike );
            } else {
                state.likes--;
                state.clickedLike = false,
                console.log( state.likes, state.clickedLike );
            }
        },

        morePost( state, payload ) {
            state.more = payload;
        }
    },

    /**
     * ajax 요청 하거나 시간이 오래 걸리는 코드 작성하는 곳
     */
    actions: {
        getData( context ) { // <- 얘
            axios.get("https://codingapple1.github.io/vue/more0.json")
            .then(( realData ) => {
                context.commit( 'morePost', realData.data )
                /**
                 * - morePost 동작시켜 주시고, realData.data 넣어주세요.
                 * - commit 쓸 때 context라는 파라미터를 추가해야 한다.
                 * - actions에 추가한 파라미터는 대충 $store를 뜻한다.
                 */
            })
        }

    }
})

export default store;