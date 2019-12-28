<template>
  <div>
    <h1>
      <span>home</span> |
      <span @click='goAbout'>about</span>
    </h1>
    <div @click='add'>本地: {{count}}</div>
    <div @click='increment'>store: {{storeCount}}</div>
    <div>
      <p>
        用户姓名： {{userInfo.name}}
      </p>
      <p @click='addAge'>
        用户年龄： {{userInfo.age}}
      </p>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapState({
      storeCount: state => state.storeCount
    }),
    ...mapState('user', {
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapMutations({
      increment: 'increment'
    }),
    ...mapMutations('user', {
      addAge: 'addAge'
    }),
    add () {
      this.count++
    },
    goAbout () {
      this.$router.push({
        path: '/about',
        query: {
          b: 21
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  div{
    cursor: pointer;
  }
</style>
