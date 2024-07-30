//引入createApp用于创建应用
import {createApp} from'vue'
// 引入App根组件
import App from "./App.vue"
import router from './router'

const app = createApp(App)
// 使用router
app.use(router)
// 挂载整个应用到app中
app.mount('#app')





