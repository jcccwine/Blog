<template>
  <div class="article">
    <div class="container">
      <div class="content">
        <div class="title"><h3>2021秋招总结</h3></div>
        <div class="tags"><span>html</span></div>
        <div class="time">2020-11-25</div>
      </div>
      <img src="" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style scope>
.article {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  /* align-items: center; */
  
}
.article .container {
  width: 75%;
  height: 43%;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0;
}
.article .container:hover {
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.1);
}
.content {
  padding: 40px 30px;
}
.title {
  font-size: 25px;
  font-weight: bold;
}
.tags {
  margin: 25px 0;
}
.tags span {
  display: inline-block;
  padding: 10px;
  background-color: beige;
  border-radius: 5px;
  font-size: 15px;
  color: #bbb;
}
</style>