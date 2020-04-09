<template>
  <dl class="product-info">
    <dt>
      <img src="meta.img" alt="商品图片" />
    </dt>
    <dd>
      <h3>
        <nuxt-link :to="{ path: 'detail',query:{ keyword:meta.name,type: meta.module } }"></nuxt-link>
      </h3>
      <el-rate v-model="meat.rate" :colors="colors"></el-rate>
      <span v-if="mate.rate > 4" class="info-comment">很好</span>
      <span v-if="mate.rate > 3" class="info-comment">一般</span>
      <span v-if="mate.rate > 2" class="info-comment">差</span>
      <span class="info-comment-detail">{{ meat.rate }} 分</span>
      <span class="info-comment-detail">{{ meta.comment }}人评论</span>
      <p>
        <span class="info-type">{{ meta.type }}</span>
        <span class="info-addr">{{ meta.addr }}</span>
      </p>
      <p>
        <span class="info-price">￥{{ meta.price }}起</span>
        <b>{{ meta.status }}</b>
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
</style>