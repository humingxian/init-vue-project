<template>
  <div class="panel" ref="panel">
    <div class='panel-title' key='panel-title' ref='panel-title' @click='handleShowChange'>
      <slot></slot>
    </div>
    <transition
      v-on:before-enter='beforeEnter'
      v-on:enter='enter'
      v-on:enter-cancelled='enterCancelled'

      v-on:before-leave='beforeLeave'
      v-on:leave='leave'
      v-on:leave-cancelled='leaveCancelled'
      v-bind:css='false'
    >
      <div class='panel-content' key='panel-content' ref='panel-content' v-show='show'>
        <slot name='content'></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import Velocity from 'velocity-animate'
export default {
  name: 'Collapse-Panel',
  data () {
    return {
      show: true,
      panelContentHeight: 0
    }
  },
  mounted () {
    this.panelContentHeight = this.$refs['panel-content'].offsetHeight
    // this.show = false
    // this.$Velocity(this.$refs['panel-content'], 'finish')
  },
  methods: {
    // 按钮改变
    handleShowChange () {
      // console.log(this.$slots.content[0].elm.offsetHeight)
      this.show = !this.show
    },
    // 控制动画的钩子函数
    beforeEnter (el) {
      // console.log('动画显示刚开始的初始状态', el)
      // const rect = el.getBoundingClientRect()
      // console.log(rect)
      // console.log('beforeEnter', this.$refs['panel-content'])
      // el.style.height = '0px'
    },
    // 单个元素过渡----开始
    enter (el, done) {
      Velocity(el, { opacity: 1, height: this.panelContentHeight }, { duration: 500, complete: done })
    },
    enterCancelled (el) { // 在动画进入被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    beforeLeave (el) {
      // console.log('动画隐藏刚开始的初始状态', el)
      // el.style.height = `${this.panelContentHeight}px`
      // console.log('beforeLeave', this.$refs['panel-content'].offsetHeight)
    },
    leave (el, done) {
      Velocity(el, { opacity: 0, height: 0 }, { duration: 500, complete: done })
    },
    leaveCancelled (el) { // 在动画出去被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    }
  }
}
</script>
<style lang='less' scoped>
.panel{
  // margin-bottom: -1px;
}
.panel-title{
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  margin-top: -1px;
}
.panel-content{
  overflow: hidden;
  font-size: 14px;
  // border-top: 1px solid #eee;
  // margin-bottom: -1px;
}
</style>
