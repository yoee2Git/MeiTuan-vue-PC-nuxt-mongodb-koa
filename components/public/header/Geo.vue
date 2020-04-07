<template>
  <div class="m-geo">
    <i class="el-icon-location">
      贵阳市
      <!-- {{ $store.state.geo.position.city }} -->
    </i>
    <nuxt-link to="/changeCity">
      切换城市
    </nuxt-link>
    [德江 上海 北京]
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>