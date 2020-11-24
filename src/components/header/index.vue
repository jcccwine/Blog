<template>
  <div class="container">
    <div class="header">
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
  .container {
    width: 100%;
    height: 60px;
    background-color: #222222;
    box-shadow: 0 10px 10px 10px #eee;
  }
  .header {
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
</style>