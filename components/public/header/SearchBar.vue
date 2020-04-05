<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="//bj.meituan.com">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" @input="handleInput" @focus="handleFocus" @blur="handleBlur" placeholder="收搜商家或地点"></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hot-search" v-if="isHotSearch">
            <dt>热门收搜</dt>
            <dd v-for="(item,idx) in hotSearch" :key="idx">{{ item }}</dd>
          </dl>
          <dl class="search-list" style="display:block" v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">贵州省德江县</a>
          <a href="#">天坛</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">美团公寓</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="15" class="center">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      search: "",
      isFocus: false,
      hotSearch: [1,2,3,4,5,56],
      searchList: [3,4,6,7,67,67]
    };
  },
  methods: {
    handleFocus() {
      this.isFocus = true;
    },

    handleBlur() {
      setTimeout(() => {
        this.isFocus = false;
      },200)
    },
    handleInput(){
      console.log(111111)
    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>