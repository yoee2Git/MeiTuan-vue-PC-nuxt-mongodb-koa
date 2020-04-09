<template>
  <div class="m-product-category">
    <dl class="cate">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item,idx) in types" :key='idx'>
        <pop-select
          :name='item.type'
          :list='item.module'
        ></pop-select>
      </dd>
    </dl>
    <dl class="cate">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,idx) in areas" :key='idx'>
        <pop-select
          :name='item.type'
          :list='item.module'
        ></pop-select>
      </dd>
    </dl>
  </div>
</template>

<script>
import popSelect from './PopSelect.vue'
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    components: {
      popSelect
    },
    props: {
      types: {
        type: Array,
        default(){
          return [];
        }
      },
      areas: {
        type: Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>