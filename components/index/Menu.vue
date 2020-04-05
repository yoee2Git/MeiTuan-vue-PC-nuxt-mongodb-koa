<template>
  <div class="m-menu" @mouseleave="handleLeav">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="idx" @mouseenter="handleEnter">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="handleDetailEnter">
      <template v-for="(item,idx) in curDetail.child">
        <h4 :key="idx.title">{{ item.title }}</h4>
        <span v-for="(childItem,idx) in item.childArr" :key='idx'>
          {{ childItem }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      kind: '',
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              childArr: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡",
                "酒吧",
                "茶馆",
                "云贵菜",
                "其他美食"
              ]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              childArr: ["外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店",
              childArr: ["代金券", "甜点饮品", "火锅自助餐"]
            }
          ]
        },
        {
          type: "homestay",
          name: "民宿",
          child: [
            {
              title: "酒店",
              childArr: ["代金券", "甜点饮品", "火锅自助餐"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curDetail() {
      return this.menu.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    handleEnter(e){
      this.kind = e.target.getElementsByTagName('i')[0].className
    },
    handleLeav(){
      setTimeout(() => {
        this.kind = ""
      },200)
    },
    handleDetailEnter(){
      
    },
    handleDetailLavle(){

    }
  }
};
</script>

<style lang="scss" scoped>
</style>