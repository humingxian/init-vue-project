<template>
  <transition
    v-on:before-enter='beforeEnter'
    v-on:enter='enter'
    v-on:enter-cancelled="enterCancelled"
    v-on:leave='leave'
    v-on:leave-cancelled="leaveCancelled"
    v-bind:css='false'
  >
    <div class='modalBox' v-appendBpdy v-show="visible">
      <div class='modal' flex='dir:top' :style='{ width: `${width}px`, height: `${height}px`}'>
        <div v-if='title' class='modal-title' flex='main:justify cross:center' flex-box='0'>
          <div>{{title}}</div>
          <svg @click='cancel' t="1575011890628" class="icon closeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1388" width="24" height="24"><path d="M822.003 776.822l0.023-0.022-575.522-575.483c-5.788-5.792-13.786-9.374-22.621-9.374-17.662 0-31.98 14.318-31.98 31.98 0 8.834 3.582 16.832 9.373 22.62L776.112 821.34c5.84 6.278 14.167 10.21 23.417 10.21 17.662 0 31.98-14.318 31.98-31.98 0-8.901-3.638-16.949-9.506-22.747z" p-id="1389" fill="#8a8a8a"></path><path d="M776.784 201.448l-0.023-0.022-575.483 575.521c-5.792 5.788-9.374 13.786-9.374 22.621 0 17.663 14.318 31.98 31.98 31.98 8.834 0 16.832-3.582 22.62-9.373L821.301 247.34c6.278-5.839 10.21-14.166 10.21-23.416 0-17.662-14.318-31.98-31.98-31.98-8.902 0-16.95 3.637-22.747 9.505z" p-id="1390" fill="#8a8a8a"></path></svg>
        </div>
        <slot v-else name='title'></slot>
        <div class="modal-body" flex-box='1' :style='{ bottom: footer ? `54px` : `0`}'>
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="footer" flex-box='0'>
          <Button @click='cancel'>取消</Button>
          <Button @click='ok' type='primary'>确认</Button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Velocity from 'velocity-animate'
import Button from '../baseComponent/Button'
export default {
  name: 'Modal',
  data () {
    return {}
  },
  props: {
    width: {
      default: 600,
      type: Number
    },
    height: {
      default: 560,
      type: Number
    },
    title: {
      default: '标题',
      type: [String, Function]
    },
    footer: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  mounted () {},
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      this.$emit('ok')
    },
    // 控制动画的钩子函数
    beforeEnter (el) {
      // console.log('动画刚开始的初始状态', el)
    },
    // 单个元素过渡----开始
    enter (el, done) {
      Velocity(el, { opacity: 1 }, { duration: 500, complete: done })
    },
    enterCancelled (el) { // 在动画进入被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    leave (el, done) {
      Velocity(el, { opacity: 0 }, { duration: 500, complete: done })
    },
    leaveCancelled (el) { // 在动画出去被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    }
  },
  watch: {
    visible (v) {
      const html = document.getElementsByTagName('html')[0] || document.documentElement
      const body = document.body
      if (v) {
        html.style.height = '100%'
        body.style.height = '100%'
        body.style.overflow = 'hidden'
      } else {
        html.style.height = 'auto'
        body.style.height = 'auto'
        body.style.overflow = 'auto'
      }
    }
  },
  components: {
    Button
  }
}
</script>
<style lang='less' scoped>
@import url('./style.less');
</style>
