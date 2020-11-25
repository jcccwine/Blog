<template>
  <div class="homePage">
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '../../../components/articleList/index'
export default {
  components: {
    'article-list': ArticleList
  }
}
</script>

<style scope>
  .homePage {
    width: 100%;
    background-color: #eeeded;
  }
</style>