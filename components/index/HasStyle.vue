<template>
  <section class="m-has-style" @click="go">
    <dl @mouseover="handleOver">
      <dt>有格调</dt>
      <dd :class="{active:kind === 'all'}" kind='all'>天津</dd>
      <dd :class="{active:kind === 'data'}" kind='data'>济南</dd>
      <dd :class="{active:kind === 'spa'}" kind='spa'>贵阳</dd>
      <dd :class="{active:kind === 'movie'}" kind='movie'>大连</dd>
      <dd :class="{active:kind === 'travel'}" kind='travel'>泰安</dd>
    </dl>
    <ul class="has-style-body">
      <li v-for="item in curList" :key="item.title">
        <el-card :body-style="{padding: '0px'}" shadow="never">
          <img :src="item.img" alt="" class="image">
          <ul class="content-body">
            <li class="title">{{ item.title }}</li>
            <li class="pos">{{ item.pos }}</li>
            <li class="price">¥<em>{{ item.price }}起</em></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name:'HasStyle',
    data() {
      return {
        kind: 'spa',
        list: {
          all: [
            {
              img: "https://p0.meituan.net/dnaimgdark/077b8e8ff3cb035045836c0a6f06d01f4192087.jpg@368w_208h_1e_1c",
              title: "Sm景公寓",
              pos: '秦皇岛区民宿',
              price: '¥ 124'
            },
            {
              img: "https://img.meituan.net/phoenix/b68f21fb1c5b2b0931b85a166e0dc1e5133937.jpg@740w_416h_1e_1c",
              title: "Smile景公寓",
              pos: '秦皇岛海港区民宿',
              price: '¥ 124'
            },
            {
              img: "https://p0.meituan.net/tdchotel/0838875a23e8cbe689c15a0c775f6ab3562154.jpg@368w_208h_1e_1c",
              title: "Smil景公寓",
              pos: '秦皇岛民宿',
              price: '¥ 124'
            }
          ],
          data: [
            {
              img: "https://img.meituan.net/phoenix/0785a01cafb4877e43d4a342b365f9c81051441.jpg@740w_416h_1e_1c",
              title: "魁华馨苑两厅临燕大",
              pos: "秦皇岛海港区民宿",
              price: '¥ 124'
            },
            {
              img: 'https://p1.meituan.net/tdchotel/654bf15247fccd2b6be3b155c1b41df6802726.png@368w_208h_1e_1c',
              title: "新澳海底世界",
              pos: '秦皇岛区民宿',
              price: '¥ 124'
            },
            {
              img: 'https://img.meituan.net/phoenix/c8c5e3fbc3f5344a954255431910b959571908.jpg@740w_416h_1e_1c',
              title: "整套能做饭雅静复式公寓",
              pos: '肿瘤医院对面',
              price: "￥286"
            }

          ],
          spa: [
            {
              img: 'https://p0.meituan.net/tdchotel/b814e99995beeca8fb4e0d15a2e456c7377585.jpg@368w_208h_1e_1c',
              title: "星海大观舒适大床房整套1居室·",
              pos: '大连森林动物园',
              price: '￥88'
            },
            {
              img: 'https://img.meituan.net/phoenix/25dee2c92057a308168bb9b7f2d154f41366448.jpg@740w_416h_1e_1c',
              title: "万达广场整套1居室",
              pos: '万达广场干',
              price: '￥188'
            },
            {
              img: 'https://p1.meituan.net/tdchotel/654bf15247fccd2b6be3b155c1b41df6802726.png@368w_208h_1e_1c',
              title: "星海大观舒适",
              pos: '星海广场',
              price: '￥128'
            }
          ],
          movie: [
            {
              img: 'http://p1.meituan.net/iphoenix/1431515cb8092ac20dead528f51fe5855397075.jpg@740w_416h_1e_1c',
              title: "星海大观舒适大床",
              pos: '大连森林动物园',
              price: '￥88'
            },
            {
              img: 'https://img.meituan.net/phoenix/c74834bc8209d51cde211eb717455721648656.jpg@740w_416h_1e_1c',
              title: "万达广场干净温馨甜蜜房随机分房",
              pos: '万达广场干',
              price: '￥188'
            },
            {
              img: 'http://p0.meituan.net/iphoenix/4a97302b5fdc3c3a5f5dae32c9400ec11429900.jpg@740w_416h_1e_1c',
              title: "星海大观舒适房整套1居室",
              pos: '大连森林动物园',
              price: '￥128'
            }
          ],
          travel: [
            {
              img: 'http://p1.meituan.net/iphoenix/1431515cb8092ac20dead528f51fe5855397075.jpg@740w_416h_1e_1c',
              title: "星海大观舒整套1居室",
              pos: '大连森林动物园',
              price: '￥88'
            },
            {
              img: 'http://p1.meituan.net/iphoenix/1431515cb8092ac20dead528f51fe5855397075.jpg@740w_416h_1e_1c',
              title: "万达广场干净温房随机分房++整套1居室·可住2人+%7C+",
              pos: '万达广场干',
              price: '￥188'
            },
            {
              img: 'http://p1.meituan.net/iphoenix/1431515cb8092ac20dead528f51fe5855397075.jpg@740w_416h_1e_1c',
              title: "万达广净温房随机分房++整套1居室·可住2人+%7C+",
              pos: '万达干',
              price: '￥188'
            }
          ]
        }
      }
    },
    computed: {
      curList: function(){
        return this.list[this.kind]
      }
    },
    methods: {
      go(){
      this.$router.push('products')
      },
      handleOver(e){
        // console.log(e.target);
        let dom = e.target;
        let tag = dom.tagName.toLowerCase();
        if(tag === 'dd'){
          this.kind = dom.getAttribute('kind');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/index/hasStyle.scss'
</style>