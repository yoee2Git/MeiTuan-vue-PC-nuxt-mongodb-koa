<template>
  <div class="m-product-select">
    <dt>
      {{ name }}
      <i class="el-icon-arrow-down el-icon-right"></i>
    </dt>
    <dd>
      <h3>{{ name }}</h3>
      <span v-for="(item,idx) in list" :key='idx'>
        {{item}}
      </span>
    </dd>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    list:{
      type: Array,
      default(){
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>