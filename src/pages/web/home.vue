<template>
  <div class="home">
    <m-header :nav="navData"></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
export default {
  components: {
    'm-header': Header,
    'm-footer': Footer
  },
  data(){
    return{
      navData: [
        {path: '/blog', name: '首页'},
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