<template>
  <div class="content">
    <div class="mycanvas" ref='mycanvas'></div>
  </div>
</template>
<script>
import Button from 'comp/baseComponent/Button'
// 引入 three.js
const THREE = require('three')
export default {
  data () {
    return {
      message: 1
    }
  },
  mounted () {
    console.dir(THREE)
    this.initRect()
  },
  methods: {
    /**
     * 这里的代码就是利用 THREE.js 在页面中渲染一个正方体
     * 三大组件：场景（scene）、相机（camera）、渲染器（renderer）
     * 场景：就相当于一个背景环境
     * 相机：现实中的相机（拍出来的照片渲染到页面，呈现给用户看）
     * 相机有很多种：透视相机（THREE.PerspectiveCamera）等等
     * 渲染器：渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制。
     * 渲染器renderer的domElement元素，表示渲染器中的画布，所有的渲染都是画在domElement上的，
     * 所以这里的appendChild表示将这个domElement挂接在body下面，这样渲染的结果就能够在页面中显示了。
     * 渲染有两种方式：实时渲染和离线渲染 。
     */
    initRect () {
      // new 一个场景
      var scene = new THREE.Scene()
      // 架设一台透视相机
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000)
      // 生成一个渲染器
      var renderer = new THREE.WebGLRenderer()
      renderer.setClearColor(0xffffff, 1.0)
      // 为渲染器设定大小
      renderer.setSize(this.$refs.mycanvas.offsetWidth, this.$refs.mycanvas.offsetHeight)
      // 将渲染器中的画布挂载到页面的元素中
      this.$refs.mycanvas.append(renderer.domElement)
      // 创建一个长方体
      var geometry = new THREE.CubeGeometry(1, 1, 1)
      // 生成一个粉色的材质
      var material = new THREE.MeshBasicMaterial({color: 0xffe4f7})
      // 将长方体和粉色材质组合在一起，生成新的物体
      var cube = new THREE.Mesh(geometry, material)
      // 将物体放入场景中去
      scene.add(cube)
      // 调整相机的位置
      camera.position.z = 5
      // 最后渲染场景
      function render () {
        // 这个函数就是让浏览器去执行一次参数中的函数，这样通过上面render中调用requestAnimationFrame()函数，
        // requestAnimationFrame()函数又让rander()再执行一次，就形成了我们通常所说的游戏循环了。
        requestAnimationFrame(render)
        cube.rotation.x += 0.1
        cube.rotation.y += 0.1
        renderer.render(scene, camera)
      }
      render()
    }
  },
  components: {
    Button
  }
}
</script>
<style lang="less" scoped>
.content{
  height: 100%;
  width: 100%;
  .mycanvas{
    height: 500px;
    width: 500px;
    margin: 100px auto;
    canvas{
      height: 100%;
      width: 100%;
    }
  }
}
</style>
