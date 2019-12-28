<template>
  <div class='content'>
    <div id='canvas-frame'></div>
  </div>
</template>
<script>
// 引入 three.js
const THREE = require('three')
export default {
  name: 'Example_04',
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
        camera.position.set(0, 0, 600)
        camera.up.set(0, 1, 0)
        camera.lookAt(0, 0, 0)
      }

      function initScene () {
        scene = new THREE.Scene()
      }

      function initLight () {
        light = new THREE.AmbientLight(0xFFFFFF)
        light.position.set(100, 100, 200)
        scene.add(light)
        light = new THREE.PointLight(0x00FF00)
        light.position.set(0, 0, 300)
        scene.add(light)
      }
      // 画线
      function initObject () {
        // 声明一个几何体 geometry
        var geometry = new THREE.CylinderGeometry(100, 150, 400)
        var material = new THREE.MeshLambertMaterial({color: 0xFFFF00})
        var mesh = new THREE.Mesh(geometry, material)
        mesh.position = new THREE.Vector3(0, 0, 0)
        scene.add(mesh)
      }

      function animation () {
        camera.position.x = camera.position.x + 1
        renderer.render(scene, camera)
        requestAnimationFrame(animation)
      }

      function threeStart () {
        initTHREE()
        initCamera()
        initScene()
        initLight()
        initObject()
        animation()
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
