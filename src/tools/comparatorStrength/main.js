import * as vue from 'vue'
import App from './App.vue'

const targetEl = document.querySelector('.mcdfTool[data-type="comparatorStrength"]')
vue.createApp(App).mount(targetEl)