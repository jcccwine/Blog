<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']" unique-opened :default-active="this.$router.path">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>文章管理</template>
          <el-menu-item-group>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>标签管理</template>
          <el-menu-item-group>
            <el-menu-item index="/tags/create">新建标签</el-menu-item>
            <el-menu-item index="/tags/list">标签列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>全局管理</template>
          <el-menu-item-group>
            <el-menu-item index="/messages/create">留言管理</el-menu-item>
            <el-menu-item index="/about/list">关于页面</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登录</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>username</span>
      </el-header>
      
      <el-main>
        <!-- 路由容器 -->
        <router-view :key="this.$router.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scope>
  * {
    margin: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      
    }
  };
</script>
