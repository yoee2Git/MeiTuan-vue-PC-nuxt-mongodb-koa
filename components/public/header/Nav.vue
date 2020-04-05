<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list-item">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list-item">
        <nuxt-link to="/mobile">手机APP</nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="order">美团餐饮商户中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">美团智能收银</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">手机免费开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">餐饮代理商招募</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">免费合作美团排队</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list-item">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="sub-menu">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>火锅</dd>
            <dd>代金券</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>北美票房榜</dd>
            <dd>电影排行榜</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://minsu.meituan.com/app/" target="_blank">
                <img
                  class="appicon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>