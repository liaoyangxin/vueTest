<template>
<div>
  这里是CTwo 页面
  <div @click="editNameClick">{{name1}} 12313123</div>
    <div @click="clickedName">{{$store.state.name}}</div>
    <input />
</div>
</template>
<script>
import busfn from './busEvent.js'
import pubsub from 'pubsub-js'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      count: 0
    }
    
  },
  computed:{
    ...mapState({
      // 直接获取state中的name的值
      name1: state => state.name
    }),
    
  },
  created () {
    pubsub.subscribe('pubsubOne', (msg , data) => {
      console.log('dddd', msg, data)
    })
  },
  mounted(){
    busfn.$on('fromCOne', (str) => {
        console.log('这里是CTwo' + str)
      })
    
  },
  methods: {
    ...mapActions({
      // 将action中的editName1在页面中以editNameClick执行 如果上下文没有 editNameClick() 会直接执行store index.js 中的 editName1() 方法
      editNameClick: 'editName1'
    }),
    clickedName () {
      this.count += 1
      // 在页面中通过store index.js 中的 action中的editName1()方法修改了state.name的值
      this.$store.dispatch('editName1', '修改了state中的name' + this.count)
      console.log('???', this.$store.state.name)
    },
    editNameClick(){
      console.log('在页面中直接调用action里面的方法')
      // this.$router.push('pageOne')
    }
  }
}
</script>
<style scoped>

</style>
