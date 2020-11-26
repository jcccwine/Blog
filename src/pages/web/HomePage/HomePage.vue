<template>
  <div class="homePage">
    <article-list :articleData="articleData"></article-list>
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
      articleData: []
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const res = await this.$http.get('/articles')
      this.articleData = res.data
      console.log(res.data);
    }
  },
}
</script>

<style scope>
  .homePage {
    background-color: #eeeded;
    padding: 20px;
  }
</style>