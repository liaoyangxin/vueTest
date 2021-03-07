<template>
    <div>
        <button @click="clicked">点击COne在CTwo中触发</button>
        <template>
          <div>
          <slot name="count"></slot>
          <div>dddddddddddddiv</div>
          <slot name="count2"></slot>
          </div>
        </template>
    </div>
</template>
<script>
import busfn from './busEvent.js'
import pubsub from 'pubsub-js'
export default {
  data () {},
  created(){
  },
  methods: {
    clicked () {
      busfn.$emit('fromCOne', '这是COne提交的')
      pubsub.publish('pubsubOne', '在one也没发布的消息')
      const promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve('这里是异步得到的值1')
        }, 100);
      })
      const promise2 = new Promise((resolve, reject) =>{
        setTimeout(() => {
         resolve(promise)
        }, 100);
      })
      promise2.then(data => {
        console.log('????', data)
      })
    }
  }
}
</script>
<style scoped>

</style>
