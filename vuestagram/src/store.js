import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'Gary',
            age: 28,
            likes: 32,
            clickedLike: false
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
    }
})

export default store;