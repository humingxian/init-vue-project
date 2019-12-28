/**
 * 自己的插件，用于为Vue添加一些功能，在项目中使用更方便
 */
import Velocity from 'velocity-animate'
// Vue实例方法
import Message from 'comp/Message/main'

const myPlugin = {
  install: function (Vue, options) {
    Vue.prototype.$message = Message
    Vue.prototype.$Velocity = Velocity

    Vue.directive('appendBpdy', {
      inserted (el) {
        let body = document.body || document.documentElement
        body.appendChild(el)
      }
    })
  }
}

export default myPlugin
