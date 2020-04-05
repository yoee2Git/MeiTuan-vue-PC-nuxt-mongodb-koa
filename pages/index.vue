<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <side-menu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">3</el-col>
    </el-row>
  </div>
</template>

<script>
import SideMenu from "@/components/index/Menu"
import Life from '@/components/index/Life'
export default {
  components: {
    SideMenu,
    Life
  }
};
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss'
</style>
