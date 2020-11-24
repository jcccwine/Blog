<template>
  <div class="home">
    <m-header :nav="navData"></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/Header/index.vue'
export default {
  components: {
    'm-header': Header
  },
  data(){
    return{
      navData: [
        {path: '/blog', name: '首页'},
        {path: '/blog/file', name: '归档'},
        {path: '/blog/span', name: '标签'},
        {path: '', name: '关于'},
        {path: '', name: '音乐'},
        {path: '', name: '时间轴'},
      ]
    }
  },
  methods: {
    
  },
}
</script>

<style scope>
</style>