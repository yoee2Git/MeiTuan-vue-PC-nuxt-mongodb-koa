<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <select-city />
      </el-col>
    </el-row>
    <el-row class="hotcity">
      <el-col :span="24">
        <HotCity />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Category />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SelectCity from '@/components/changeCity/SelectCity'
  import HotCity from '@/components/changeCity/HotCity'
  import Category from '@/components/changeCity/Category'

  export default {
    components: {
      SelectCity,
      HotCity,
      Category
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/changeCity/selectCity.scss';
</style>