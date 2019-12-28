<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import "normalize.css";
@import "flex.css";
@import "./assets/style/base.less";
@import "./assets/style/common.less";
#app{
  height: 100%;
}
</style>
