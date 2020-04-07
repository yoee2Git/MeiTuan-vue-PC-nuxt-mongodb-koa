<template>
  <section class="m-has-style">
    <dl @mouseover="handleOver">
      <dt>民宿推荐</dt>
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
    data() {
      return {
        kind: 'spa',
        list: {
          all: [
            {
              img: "https://img.meituan.net/phoenix/b68f21fb1c5b2b0931b85a166e0dc1e5133937.jpg@740w_416h_1e_1c",
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
              img: "https://img.meituan.net/phoenix/b68f21fb1c5b2b0931b85a166e0dc1e5133937.jpg@740w_416h_1e_1c",
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
              img: 'https://img.meituan.net/phoenix/32e5635f85aa80331a9a1412be84cc5a147188.jpg@740w_416h_1e_1c',
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
              img: 'http://p1.meituan.net/iphoenix/1431515cb8092ac20dead528f51fe5855397075.jpg@740w_416h_1e_1c',
              title: "星海大观舒适大床房整套1居室·",
              pos: '大连森林动物园',
              price: '￥88'
            },
            {
              img: 'https://img.meituan.net/phoenix/c74834bc8209d51cde211eb717455721648656.jpg@740w_416h_1e_1c',
              title: "万达广场整套1居室",
              pos: '万达广场干',
              price: '￥188'
            },
            {
              img: 'http://p0.meituan.net/iphoenix/4a97302b5fdc3c3a5f5dae32c9400ec11429900.jpg@740w_416h_1e_1c',
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
  @import '@/assets/css/index/homestay.scss'
</style>