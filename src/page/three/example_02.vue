<template>
  <div class='content'>
    <div id='canvas-frame'></div>
  </div>
</template>
<script>
// 引入 three.js
const THREE = require('three')
export default {
  mounted () {
    this.initRect()
  },
  methods: {
    initRect () {
      let renderer, camera, scene, light
      let width = document.getElementById('canvas-frame').clientWidth
      let height = document.getElementById('canvas-frame').clientHeight

      function initTHREE () {
        renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        renderer.setSize(width, height)
        document
          .getElementById('canvas-frame')
          .append(renderer.domElement)
        renderer.setClearColor(0xffffff, 1.0)
      }

      function initCamera () {
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
        camera.position.set(0, 1000, 0)
        camera.up.set(0, 0, 1)
        camera.lookAt(0, 0, 0)
      }

      function initScene () {
        scene = new THREE.Scene()
      }

      function initLight () {
        light = new THREE.DirectionalLight(0xff0000, 1.0, 0)
        light.position.set(100, 100, 200)
        scene.add(light)
      }
      // 画线
      function initObject () {
        // 声明一个几何体 geometry
        var geometry = new THREE.Geometry()
        /**
         * lineBasicMaterial( parameters ) 定义一种线条的材质，接受一个对象作为参数
         * color：线条的颜色，用16进制来表示，默认的颜色是白色。
         * linewidth：线条的宽度，默认时候1个单位宽度。
         * linecap：线条两端的外观，默认是圆角端点，当线条较粗的时候才看得出效果，如果线条很细，那么你几乎看不出效果了。
         * linejoin：两个线条的连接点处的外观，默认是“round”，表示圆角。
         * vertexColors：定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。（如果关于插值不是很明白，可以QQ问我，QQ在前言中你一定能够找到，嘿嘿，虽然没有明确写出）。
         * fog：定义材质的颜色是否受全局雾效的影响。
         */
        var material = new THREE.LineBasicMaterial({
          // 顶点颜色vertexColors: THREE.VertexColors，就是线条的颜色会根据顶点来计算
          vertexColors: THREE.VertexColors,
          linewidth: 5
        })
        // 定义两个颜色 分别表示线条两个端点的颜色
        var color1 = new THREE.Color(0x444444)
        var color2 = new THREE.Color(0xff0000)
        // 定义两个端点
        var p1 = new THREE.Vector3(-100, 0, 100)
        var p2 = new THREE.Vector3(100, 0, -100)
        // 几何体里面有一个vertices变量，可以用来存放点
        geometry.vertices.push(p1, p2)
        // 线的材质可以由2点的颜色决定 为定义的2个顶点，设置不同的颜色
        geometry.colors.push(color1, color2)
        // 定义一条线
        /**
         * 第一个参数是几何体geometry，里面包含了2个顶点和顶点的颜色。
         * 第二个参数是线条的材质，或者是线条的属性，表示线条以哪种方式取色。
         * 第三个参数是一组点的连接方式，我们会在后面详细讲解。
         */
        var line = new THREE.Line(geometry, material, THREE.LineSegments)
        // 将这条线添加到场景中去
        scene.add(line)
      }

      function render () {
        renderer.clear()
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }

      function threeStart () {
        initTHREE()
        initCamera()
        initScene()
        initLight()
        initObject()
        render()
      }

      threeStart()
    }
  }
}
</script>
<style lang='less' scoped>
.content {
  height: 100%;
  width: 100%;
  #canvas-frame {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 600px;
    background-color: #eeeeee;
  }
}
</style>
