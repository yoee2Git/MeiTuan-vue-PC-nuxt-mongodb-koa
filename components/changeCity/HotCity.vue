<template>
	<div class="m-hcity">
		<dl>
			<dt>热门城市：</dt>
			<dd 
				v-for="item in list"
				:key="item.id">
				{{ item }}
			</dd>
		</dl>
	</div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        list: ['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/changeCity/hotCity.scss";
  
</style>

