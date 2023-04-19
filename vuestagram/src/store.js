import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'Gary'
        }
    }
})

export default store;