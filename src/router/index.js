import Vue from 'vue'
import Router from 'vue-router'
import adminHome from '../pages/admin/home.vue'
import ArticleCreate from '../pages/admin/articleCreate/articleCreate.vue'
import ArticleList from '../pages/admin/articleList/articleList.vue'
import Tags from '../pages/admin/tags/tags.vue'

import webHome from '../pages/web/home.vue'
import HomePage from '../pages/web/HomePage/HomePage.vue'
import Tag from '../pages/web/Tag/Tag.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: adminHome,
      children: [
        {path: '/articles/create', name: 'createArticle', component: ArticleCreate, props: true},
        {path: '/articles/edit/:id', name: 'editArticle', component: ArticleCreate, props: true},
        {path: '/articles/list', component: ArticleList},
        {path: '/tags/tagsinit', component: Tags},
      ]
    },
    {
      path: '/blog',
      component: webHome,
      props: true,
      children: [
        {path: '/blog', component: HomePage, props: true},
        {path: 'span', component: Tag},
      ]
    }
  ]
})

export default router
