<template>
  <span>
    <slot v-if="initSuccess"></slot>
  </span>
</template>
<script>
export default {
  name: 'LazyLoad',
  data () {
    return {
      initSuccess: false
    }
  },
  props: {
    time: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.initSlot()
  },
  methods: {
    initSlot () {
      let _this = this
      setTimeout(function () {
        _this.initSuccess = true
      }, (_this.time || 0))
    }
  }
}
</script>
