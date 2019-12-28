<template>
  <div
    @click='click'
    :class='[`btn`, `btn-${type}`]'
    :style='{
      display: `inline-block`,
      width: width === 0 ? `100px` : `${width}px`
    }'
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    width: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../../assets/style/default-variable.less');
.btn {
  padding: 10px 0;
  text-align: center;
  border: 1px solid @c-e5;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.btn-primary:hover{
  background-color: #4392ff;
}
.btn-default:hover{
  color: @c-primary;
  border-color: @c-primary;
}
.btn-danger:hover{
  background-color: #fd525a;
}
</style>
