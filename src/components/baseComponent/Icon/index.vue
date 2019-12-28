<template>
  <i :class='["iconfont",`icon-${type}`]'></i>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      require: true
    }
  }
}
</script>
