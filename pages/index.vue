<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <side-menu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <has-style />
        <homestay />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideMenu from "@/components/index/Menu.vue"
import Life from '@/components/index/Life.vue'
import HasStyle from '@/components/index/HasStyle.vue'
import Homestay from '@/components/index/Homestay.vue'
export default {
  name: 'index',
  components: {
    SideMenu,
    Life,
    HasStyle,
    Homestay
  }
};
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss'
</style>
