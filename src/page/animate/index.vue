<template>
  <div>
    <Button type="primary">666</Button>
    <div class='box' v-hover='{enter: mouseenter, leave: mouseleave}'>
      <div class='text'>Demo</div>

      <!-- 单个元素动画 开始-->
      <transition
        v-on:before-enter='beforeEnter'
        v-on:enter='enter'
        v-on:enter-cancelled="enterCancelled"
        v-on:leave='leave'
        v-on:leave-cancelled="leaveCancelled"
        v-bind:css='false'
      >
        <div class='mask m1' v-show='show'></div>
      </transition>
      <!-- 单个元素动画 结束-->

      <!-- 多个元素动画 开始 -->
      <!-- <transition-group
        v-on:before-enter='beforeEnter'
        v-on:enter='enter'
        v-on:leave='leave'
        v-bind:css='false'
      >
        <div  key="m1" class='mask m1' v-if='show'></div>
        <div key="m2" class='mask m2' v-else></div>
      </transition-group> -->
      <!-- 多个元素动画 结束-->
    </div>
  </div>
</template>
<script>
import Velocity from 'velocity-animate'
import Button from 'comp/baseComponent/Button'
import animateModule from './animateModule'
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    console.log(123)
    this.$store.registerModule('animateModule', animateModule)
  },
  destroyed () {
    this.$store.unregisterModule('animateModule')
  },
  methods: {
    beforeEnter (el) {
      // console.log(el.className.includes('m1'))
      // if (el.className.includes('m1')) el.style.right = '-100px'
      // if (el.className.includes('m2')) el.style.left = '0px'

      // console.log(el.offsetLeft)
    },
    // 单个元素过渡----开始
    enter (el, done) {
      Velocity(el, { right: '0px', opacity: 1 }, { duration: 500, complete: done })
    },
    enterCancelled (el) { // 在动画进入被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    leave (el, done) {
      Velocity(el, { right: '-100px', opacity: 0 }, { duration: 500, complete: done })
    },
    leaveCancelled (el) { // 在动画出去被取消的时候
      Velocity(el, 'stop') // 清除元素上的所有动画队列，防止动画跳变问题
    },
    // 单个元素过渡----结束

    // 多个元素过渡----开始
    // enter (el, done) {
    //   if (el.className.includes('m1')) Velocity(el, { opacity: 0.5, right: '0px' }, { duration: 500, complete: done })
    //   if (el.className.includes('m2')) Velocity(el, { opacity: 0, left: '-100px' }, { duration: 500, complete: done })
    // },
    // leave (el, done) {
    //   if (el.className.includes('m1')) Velocity(el, { opacity: 0, right: '-100px' }, { duration: 500, complete: done })
    //   if (el.className.includes('m2')) Velocity(el, { opacity: 0.5, left: '0px' }, { duration: 500, complete: done })
    // },
    // 多个元素过渡----结束
    mouseenter (el) {
      this.show = true
    },
    mouseleave (el) {
      this.show = false
    }
  },
  components: {
    Button
  },
  directives: {
    hover: {
      inserted (el, binding, vnode) {
        const enter = binding.value.enter
        const leave = binding.value.leave
        el.addEventListener('mouseenter', e => {
          enter()
        })
        el.addEventListener('mouseleave', e => {
          leave()
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.box {
  margin: 50px auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(233, 146, 48);
  cursor: pointer;
  color: #333;
  font-weight: bold;
  // overflow: hidden;
  position: relative;
  .text{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100px;
    position: relative;
    z-index: 10;
  }
  .mask{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 20;
    position: absolute;
    top: 0;
  }
  .m1{
    right: -100px;
    opacity: 0;
    background-color: rgba(168, 252, 175);
  }
  .m2{
    left: 0px;
    opacity: 1;
    background-color: rgba(237, 164, 255);
  }
}
</style>
