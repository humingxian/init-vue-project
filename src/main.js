// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 导入自定义主题
// import './assets/style/project-theme.scss'
// 语言本地化
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'

// 兼容ie的 babel 垫片
import 'babel-polyfill'

// 导入 mock 接口
import 'mock/test/index'

// 加载组件
import LazyLoad from 'bComp/LazyLoad'

// 加载插件
import myPlugin from './lab/vue-plugin/index'

Vue.use(myPlugin)

Vue.component('LazyLoad', LazyLoad)
Vue.config.productionTip = false

// 设置语言
// locale.use(lang)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
