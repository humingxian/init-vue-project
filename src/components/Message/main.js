import Vue from 'vue'
import Velocity from 'velocity-animate'
import MessageComponent from 'comp/Message'

var MessageConstructor = Vue.extend(MessageComponent)
let instance
let instances = []
let seed = 1

// Message的组件在这里被创建，添加到页面，并完成它的生命周期
const Message = function (options) {
  let id = 'message_' + seed++
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  options.onClose = function () {
    Message.close(id)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  let verticalOffset = options.offset || 20
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset

  instances.push(instance)
}

Message.close = function (id) {
  let len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    // dom.style['top'] =
    //   parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px'
    Velocity(dom, { top: parseInt(dom.style['top'], 10) - removedHeight - 16 }, { duration: 200 })
  }
}

export default Message
