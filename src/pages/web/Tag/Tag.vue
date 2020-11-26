<template>
  <div class="tags">
    <div class="tags-top">
      <div class="container">
        <div class="tag-name" 
        @click="setTag(tag._id)" 
        :class="{active: isActive == tag._id}" 
        v-for="(tag, index) in tags" 
        :tags="tags"
        :key="index">
          <span>{{ tag.name }}</span>
          <sub>2</sub>
        </div>
      </div>
    </div>
    <div class="tags-article">
      <article-list :articleData="articleTagData"></article-list>
    </div>
  </div>
</template>

<script>
import ArticleList from '../../../components/articleList/index'
export default {
  components: {
    'article-list': ArticleList
  },
  data() {
    return {
      tags: [],
      articleTagData: [],
      isActive: ''
    }
  },
  created(){
    this.getTags()
  },
  methods: {
    async getTags() {
      const res = await this.$http.get('/tags')
      this.tags = res.data
    },
    async setTag(tagId) {
      this.isActive = tagId
      const res = await this.$http.get(`tags/${tagId}`)
      this.articleTagData = res.data[0].articlesList
      
    }
  },
}
</script>

<style scope>
  .tags {
    display: flex;
    flex-direction: column;
  }
  .tags-top {
    width: 100%;
    height: 380px;
    background-image: url(../../../assets/images/3.jpg);
    background-size: 100% 100%;
    object-fit: cover;
    position: relative;
  }
  .tags-top .container {
    position: absolute;
    width: 70%;
    top: 20%;
    transform: translateX(50%);
  }
  .tags-top .container .active {
    background-color: rgb(15, 146, 233);
    color: #fff;
  }
  .tag-name {
    position: relative;
    display: inline-block;
    margin: 10px 10px 0 0;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    background-color: antiquewhite;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
  }
  .tag-name:hover {
    background-color: rgb(15, 146, 233);
    color: #fff;
  }
  sub {
    position: absolute;
    top: -10px;
    right: -10px;
    border: 1px solid #fff;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
  }
  .tags-article {

  }
</style>