<template>
  <div class='content'>
    <Button type='primary' @click='showVisible'>我是按钮</Button>
    <Button @click='show = !show'>Toggle</Button>
    <Button @click='showMessage'>alert</Button>
    <Button @click='$router.push(`/home`)'>home</Button>
    <Button @click='$router.push(`/animate`)'>animate</Button>
    <Icon type="brightness" />

    <div style="margin-top: 100px;">
      <Collapse :value="[1,2,3]">
        <Panel>
          pannel1
          <div slot="content">
            <p>我是内容1</p>
            <p>我是内容2</p>
            <p>我是内容3</p>
          </div>
        </Panel>
        <Panel>
          pannel2
          <div slot="content">
            <p>我是内容1</p>
            <p>我是内容2</p>
            <p>我是内容3</p>
          </div>
        </Panel>
        <Panel>
          pannel3
          <div slot="content">
            <p>我是内容1</p>
            <p>我是内容2</p>
            <p>我是内容3</p>
          </div>
        </Panel>
      </Collapse>
    </div>

    <transition
      v-on:before-enter='beforeEnter'
      v-on:enter='enter'
      v-on:leave='leave'
      v-bind:css='false'
    >
      <p v-if='show'>Demo</p>
    </transition>

    <LazyLoad :time='1000'>
      <Modal :visible='visible' @cancel='cancel'>123</Modal>
    </LazyLoad>
  </div>
</template>
<script>
import Velocity from 'velocity-animate'
import Button from 'comp/baseComponent/Button'
import Icon from 'comp/baseComponent/Icon'
// import Modal from 'comp/Modal'
// const Modal  = () => import('comp/Modal')
import Collapse from 'comp/Collapse'

// services
import { getList } from 'api/test/index'

// console.log(Collapse)
const Panel = Collapse.components.Panel

export default {
  name: 'test',
  data () {
    return {
      visible: false,
      show: false
    }
  },
  methods: {
    showMessage () {
      this.$message('鬼屎一样')
    },
    showVisible () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 500 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(
        el,
        {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        },
        { complete: done }
      )
    }
  },
  mounted () {
    getList().then(res => {
      console.log(res)
    })
  },
  components: {
    Modal: () => import('comp/Modal'), // 异步加载组件，提高页面加载速度、首屏加载速度
    Button,
    Collapse,
    Panel,
    Icon
  }
}
</script>
<style lang='less' scoped>
@import url('../assets/icon/iconfont.css');
.content {
  padding: 50px;
}
</style>
