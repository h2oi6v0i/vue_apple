import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
// emitter를 모든 컴포넌트에서 사용할 수 있게 해주는 문법
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
// 글로벌한 변수 보관함에 { emitter : emitter } 추가

import store from './store.js'

app.use(store).mount('#app')
// use(store) : 모든 컴포넌트들이 이 store 안에 있는 데이터들을 공유한다.
