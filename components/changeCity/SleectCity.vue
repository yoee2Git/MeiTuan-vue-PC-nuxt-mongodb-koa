<template>
  <div>
    <div class="m-selectCity">
      <span class="name">按省份选择:</span>
      <el-select v-model="pvalue" placeholder="省份">
        <el-option
          v-for="item in province"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
        <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pvalue: "",
      province: [],
      cvalue: "",
      city: [],
      input: "",
      allCities: []
    };
  },
  watch: {
    pvalue: async function(newPvalue) {
      let {
        status,
        data: { city }
      } = await this.$axios.get(`/geo/province/${newPvalue}`);
      if (status === 200) {
        this.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        this.cvalue = "";
      }
    }
  },
  async mounted() {
    let {
      status,
      data: { province }
    } = await this.$axios.get("/geo/province");

    if (status === 200) {
      this.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/changeCity/selectCity.scss";
</style>