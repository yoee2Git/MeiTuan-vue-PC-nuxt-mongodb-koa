<template>
  <div
    :id="id"
    :style="{ width: width+ 'px',height: height+'px',margin: '34px auto'}"
    class="m-map"
  ></div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id: "map",
      key: "8b3b7ac85d45c5bbc674c3773001aa60"
    };
  },
  methods() {
    let _this = this;
    this.id = `map${Math.random()
      .toString()
      .slice(2, 4)}`;
    window.onLoad = function() {
      var map = new AMap.Map(_this.id, {
        zoom: 10,
        center: _this.point,
        resizeEnable: true
      });
      // 同时引入工具条插件，比例尺插件和鹰眼插件
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.OverView",
          "AMap.MapType",
          "AMap.Geolocation"
        ],
        function() {
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar());

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale());

          // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
          map.addControl(new AMap.OverView({ isOpen: true }));

          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          map.addControl(new AMap.MapType());

          // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
          map.addControl(new AMap.Geolocation());
          // 创建一个 Marker 实例：
          let marker = new AMap.Marker({
            position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "贵阳市"
          });

          // 将创建的点标记添加到已有的地图实例：
          map.add(marker);

          // 移除已创建的 marker
          map.remove(marker);
        }
      );
      var url =
        `https://webapi.amap.com/maps?v=1.4.15&key=${_this.key}&callback=onmapload`;
      var jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
    };
  },
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Number,
      default() {
        return [106.650049, 26.597095];
      }
    }
  }
};
</script>

<style lang="" scoped>
</style>