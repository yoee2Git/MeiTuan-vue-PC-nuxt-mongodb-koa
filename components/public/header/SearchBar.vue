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
          <el-input
            v-model="search"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            placeholder="收搜商家或地点"
          ></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hot-search" v-if="isHotSearch">
            <dt>热门搜索</dt>
            <dd v-for="(item, idx) in $store.state.home.hotSearch.slice(0, 5)" :key="idx">
              <a :href="'/products?keyword=' + encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="search-list" v-if="isSearchList">
            <dd v-for="(item, idx) in searchList" :key="idx">
              <a :href="'/products?keyword=' + encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
					<a :href="'/products?keyword=' + encodeURIComponent(item.name)" 
							v-for="(item, idx) in $store.state.home.hotSearch.slice(0, 5)" :key="idx">
						{{ item.name }}
					</a>
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
import _ from "lodash";

export default {
  name: "",
  data() {
    return {
      search: "",
      isFocus: false,
      hotSearch: [],
      searchList: []
    };
  },
  methods: {
    handleFocus: function() {
      this.isFocus = true;
    },
    handleBlur: function() {
      let _self = this;
      setTimeout(function() {
        _self.isFocus = false;
      }, 200);
    },
    handleInput: _.debounce(async function() {
      let city = this.$store.state.geo.position.city;
      this.searchList = [];
      if (this.search.length) {
        let {
          status,
          data: { top }
        } = await this.$axios.get("/search/top", {
          params: {
            input: this.search,
            city
          }
        });
        this.searchList = top.slice(0, 10);
      }
    }, 300)
  },
  computed: {
    isHotSearch: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>