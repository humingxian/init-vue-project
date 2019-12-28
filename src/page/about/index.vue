<template>
  <div>
    <h1>
      <span @click='$router.push({path: "/home",query: {a: 12}})'>home</span> |
      <span>about</span>
    </h1>
  </div>
</template>
<style lang="less" scoped>
  span{
    cursor: pointer;
  }
</style>
