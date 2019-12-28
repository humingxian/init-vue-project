<template>
  <transition
    v-on:before-enter='beforeEnter'
    v-on:enter='enter'
    v-on:enter-cancelled='enterCancelled'

    v-on:before-leave='beforeLeave'
    v-on:leave='leave'
    v-on:after-leave="afterLeave"
    v-on:leave-cancelled='leaveCancelled'
    v-bind:css='false'
  >
    <div class="message" :style='positionStyle' v-show="visible">{{message}}</div>
  </transition>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      message: 'message',
      visible: false,
      closed: false,
      duration: 3000,
      verticalOffset: 20,
      timer: null
    }
  },
  computed: {
    positionStyle () {
      return {
        'top': `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    // 控制动画的钩子函数
    beforeEnter (el) {
      // console.log('动画显示刚开始的初始状态', el)
      el.style.opacity = 0
      el.style.top = `${this.verticalOffset - 16}px`
    },
    // 单个元素过渡----开始
    enter (el, done) {
      this.$Velocity(el, { opacity: 1, top: this.verticalOffset }, { duration: 200, complete: done })
    },
    enterCancelled (el) { // 在动画进入被取消的时候
      this.$Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    beforeLeave (el) {
      // console.log('动画隐藏刚开始的初始状态', el)
      el.style.opacity = 1
      el.style.top = `${el.offsetTop}px`
    },
    leave (el, done) {
      this.$Velocity(el, { opacity: 0, top: 0 }, { duration: 200, complete: done })
    },
    afterLeave (el) {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    leaveCancelled (el) { // 在动画出去被取消的时候
      this.$Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
    // keydown (e) {
    //   if (e.keyCode === 27) { // esc关闭消息
    //     if (!this.closed) {
    //       this.close()
    //     }
    //   }
    // }
  },
  mounted () {
    this.startTimer()
    // document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    // document.removeEventListener('keydown', this.keydown)
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.message {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px 30px;
  background-color: rgb(243, 208, 184);
  border-radius: 6px;
  max-width: 200px;
  text-align: center;
}
</style>
