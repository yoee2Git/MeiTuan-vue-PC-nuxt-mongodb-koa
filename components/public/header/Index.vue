<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="4">
        <geo />
      </el-col>
      <el-col :span="6">
        <user />
      </el-col>
      <el-col :span="14">
        <nav-bar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from "./Geo";
import User from './User';
import NavBar from './Nav'
export default {
  components: {
    Geo,
    User,
    NavBar
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";

</style>