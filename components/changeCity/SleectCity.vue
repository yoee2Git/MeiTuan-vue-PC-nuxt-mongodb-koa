<template>
  <div>
    <div class="m-selectCity">
      <span class="name">按省份选择:</span>
      <el-select v-model="value" placeholder="省份">
        <el-option
          v-for="item in sf"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="cvalue" placeholder="城市">
        <el-option
          v-for="item in cs"
          :key="item.cvalue"
          :label="item.label"
          :value="item.cvalue"
        ></el-option>
      </el-select>
      <span>直接收搜</span>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        {{ item }}
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      pvalue: "",
      cs: ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "黔西南", "毕节", "黔东南", "黔南", "凯里", "仁怀", "盘州市", "金沙", "开阳", "威宁", "织金", "赤水", "清镇", "兴义市"],
      cvalue: "",
      sf: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东"
      ],
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
        "北京",
        "天津",
        "河北",
        "北京",
        "上海",
        "广州",
        "深圳",
        "贵阳",
        "德江",
        "鞍山",
        "安庆",
        "安阳",
        "安顺",
        "安康",
        "安丘",
        "安岳",
        "安陆市",
        "阿克苏",
        "安州区",
        "阿图什市",
        "安吉",
        "阿拉善盟",
        "阿荣旗安",
        "平安溪",
        "重庆",
        "成都"
      ]
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "@/assets/css/changeCity/selectCity.scss";
</style>