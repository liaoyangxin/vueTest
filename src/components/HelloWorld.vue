<template>
  <div class="hello">
    <COne>
      <div slot="count">5645646</div>
      <div slot="count2">2222222222</div>
    </COne>
    <!-- <CTwo/> -->
    <router-link to="/pageOne">跳转到pageOne页面</router-link>
    <router-link to="/pageTwo">跳转到pageTwo页面</router-link>
    <router-link to="/CTwo">跳转到CTwo页面</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import CTwo from './CTwo'
import COne from './COne'
export default {
  components: { CTwo, COne },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
