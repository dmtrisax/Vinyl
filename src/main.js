import { createApp } from 'vue'

import App from './App.vue'
import store from "./vuex/store.js"
import router from './router/router';
import  'material-design-icons-iconfont'


createApp(App)

.use(router)
.use(store)
.mount('#app')
