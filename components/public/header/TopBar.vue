<template>
  <div>
    <el-row :gutter="0" class="m-header">
      <el-col :span="5">
        <geo />
      </el-col>
      <el-col :span="5">
        <user />
      </el-col>
      <el-col :span="14">
        <Nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from "./Geo";
import User from './User';
import Nav from './Nav';
export default {
  components: {
    Geo,
    User,
    Nav
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";


</style>