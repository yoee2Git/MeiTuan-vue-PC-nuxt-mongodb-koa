<template>
  <div>
   <el-row>
      <el-col :span='14'>
        <Carousel />
      </el-col>
      <el-col :span='4'>1</el-col>
      <el-col :span='6'>1</el-col>
   </el-row>
    <el-row>
      <el-col :span='7'>1</el-col>
      <el-col :span='7'>1</el-col>
      <el-col :span='4'>1</el-col>
      <el-col :span='6'>1</el-col>
   </el-row>
  </div>
</template>

<script>
import Carousel from '@/components/index/Carousel'
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    components: {
      Carousel
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/index/life.scss'
</style>