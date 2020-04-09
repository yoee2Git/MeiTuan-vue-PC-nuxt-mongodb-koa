<template>
  <div class="m-product-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item,name, item.active ? 'nav-active' : '']"
        @click="handleNavSelect"
      >{{ item.txt }}</dd>
    </dl>
    <ul>
      <list-item v-for="(item,idx) in list" :key="idx" :meta="item" />
    </ul>
  </div>
</template> 

<script>
import ListItem from "./product.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "default",
          txt: "智能排序",
          active: true
        },
        {
          name: "price",
          txt: "价格最低",
          active: false
        },
        {
          name: "visit",
          txt: "人气最高",
          active: true
        },
        {
          name: "comment",
          txt: "评价最高",
          active: true
        }
      ]
    };
  },
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleNavSelect() {}
  }
};
</script>