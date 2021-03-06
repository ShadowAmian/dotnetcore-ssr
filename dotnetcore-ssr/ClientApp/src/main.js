import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

export function createApp() {
    const app = new Vue({
        router,
        render: h => h(App),
    })
    return { app, router }
}

