<template>
  <div class="collapse-content">
    <slot></slot>
  </div>
</template>
<script>

import Panel from './components/Panel'
export default {
  name: 'Collapse',
  data () {
    return {}
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {},
  methods: {},
  components: {
    Panel
  }
}
</script>
<style lang="less" scoped>
  .collapse-content{
    border-radius: 5px;
    border-bottom: 1px solid #eee;
    margin-bottom: -1px;
  }
</style>
