import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/admin/home.vue'
import ArticleCreate from '../pages/admin/articleCreate/articleCreate.vue'
import ArticleList from '../pages/admin/articleList/articleList.vue'
import Tags from '../pages/admin/tags/tags.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home,
      children: [
        {path: '/articles/create', name: 'createArticle', component: ArticleCreate, props: true},
        {path: '/articles/edit/:id', name: 'editArticle', component: ArticleCreate, props: true},
        {path: '/articles/list', component: ArticleList},
        {path: '/tags/tagsinit', component: Tags},
      ]
    
    }
  ]
})

export default router
