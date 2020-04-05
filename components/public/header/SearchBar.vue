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
          <el-input placeholder="收搜商家或地点"></el-input>
          <button class="el-button el-button-primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hot-search" style="display: none">
            <dt>热门收搜</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
          <dl class="=search-list" style="display: none">
            <dt>热门收搜</dt>
            <dd>烧烤🔥</dd>
            <dd>烧烤🔥</dd>
            <dd>烧烤🔥</dd>
            <dd>烧烤🔥</dd>
            <dd>烧烤🔥</dd>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>