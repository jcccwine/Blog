<template>
  <div class="header">
    <div class="container">
      <img src="" alt="">
      <div class="nav">
        <router-link 
        @click="isActive = true"
        :class="{'active' : isActive}"
        class="nav-span"
        tag="span" 
        :to="item.path" 
        v-for="(item, index) in nav" 
        :key="index"
        ><i></i>{{ item.name }}</router-link>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入搜索内容" class="header-input"><i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {}
  },
  data(){
    return {
      isActive: false
    }
  }
}
</script>

<style scope>
  .header {
    width: 100%;
    height: 60px;
    background-color: #222222;
    box-shadow: 0 10px 10px 10px #eee;
  }
  .header .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 36px;
    padding: 12px 50px;
  }
  .nav-span {
    display: inline-block;
    padding: 0 15px;
    color: #bbb;
    margin-right: 25px;
    cursor: pointer;
    font-size: 15px;
  }
  .nav-span:hover {
    background-color: #111;
    border-radius: 5px;
  }
  .active {
    background-color: beige;
  }
  .header-input {
    background-color: #222222;
    color: #bbb;
    font-size: 16px;
  }
</style>