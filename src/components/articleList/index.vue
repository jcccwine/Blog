<template>
  <div class="container">
    <div class="article" @click="$route.path" v-for="(item, index) in articleData" :key="index">
      <div class="content">
        <div class="title"><h3>{{ item.title }}</h3></div>
        <span v-for="(tag, index) in item.tags" :key="index">{{ tag.name }}</span>
        <div class="description">终于</div>
        <div class="time">2020-11-25</div>
      </div>
      <div class="images">
        <img :src="item.pic" alt="">
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    articleData: {
      type: Array
    }
  }
}
</script>

<style scope>
.article {
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 250px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px auto;
}
.article:hover {
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.1);
}
.content {
  padding: 20px;
  flex: 1.2;
}
.title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.article span {
  display: inline-block;
  padding: 7px 5px;
  margin: 5px;
  background-color: beige;
  border-radius: 5px;
  font-size: 15px;
  color: #bbb;
}
.description {
  font-size: 17px;
  margin: 20px 0;
}
.time {
  font-size: 13px;
}
.images {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
}
.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>