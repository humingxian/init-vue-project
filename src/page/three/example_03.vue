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
        camera.position.set(0, 2000, 0) // 相机放在了
        camera.up.set(0, 0, 1) // 相机放在z轴
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
        geometry.vertices.push(new THREE.Vector3(-500, 0, 0))
        geometry.vertices.push(new THREE.Vector3(500, 0, 0))
        /**
         * lineBasicMaterial( parameters ) 定义一种线条的材质，接受一个对象作为参数
         * color：线条的颜色，用16进制来表示，默认的颜色是白色。
         * linewidth：线条的宽度，默认时候1个单位宽度。
         * linecap：线条两端的外观，默认是圆角端点，当线条较粗的时候才看得出效果，如果线条很细，那么你几乎看不出效果了。
         * linejoin：两个线条的连接点处的外观，默认是“round”，表示圆角。
         * vertexColors：定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。（如果关于插值不是很明白，可以QQ问我，QQ在前言中你一定能够找到，嘿嘿，虽然没有明确写出）。
         * fog：定义材质的颜色是否受全局雾效的影响。
         */

        for (var i = 0; i <= 20; i++) {
          // 生成横着的线
          let line1 = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}))
          line1.position.z = (i * 50) - 500
          scene.add(line1)
          // 生成竖着的线
          let line2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}))
          line2.position.x = (i * 50) - 500
          line2.rotation.y = 90 * Math.PI / 180
          scene.add(line2)
        }
        // let line1 = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}))
        // let line2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}))
        // line2.position.x = 500
        // line2.rotation.y = 90 * Math.PI / 180
        // scene.add(line1)
        // scene.add(line2)
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
