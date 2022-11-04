<template>

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  router
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="/">公交路线查询</el-menu-item>
  <el-menu-item index="users">用户管理</el-menu-item>
  <el-menu-item index="personal">个人信息</el-menu-item>
  <el-menu-item index="login" style="float: right;">退出登录</el-menu-item>
</el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>