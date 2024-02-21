import Vue from 'vue'
// 使用ant-design
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// 使用element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Region from 'v-region'
import App from './App.vue'


// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// Vue.prototype.$echarts = echarts

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'



/* ========== 遍历base工具包内部方法，挂载到vue示例上面 ========== */
import base from '@/common/js/base.js';
Object.keys(base).forEach(item => {
  //将base里面得方法,全部挂载到vue上面,这个在其他地方,就可以用this去获取了
  Vue.prototype[item] = base[item];
});

Vue.use(dataV)

// import { Input } from 'ant-design-vue';
Vue.config.productionTip = false
// Vue.use(Input);
// Vue.use(Antd);
Vue.use(ElementUI);
// Vue.use(Region)


new Vue({
  render: h => h(App),
}).$mount('#app')
