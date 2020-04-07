<template>
  <div>
		<dl class="m-category">
			<dt>按拼音首字母选择：</dt>
			<dd 
				v-for="item in list"
			  :key="item">
				<a href="/">
					{{ item }}
				</a>
			</dd>
		</dl>
		<dl 
		  v-for="item in block"
		  :key="item.title"
		  class="m-category-section">
			<dt :id="'city-' + item.title">{{ item.title }}</dt>
			<dd>
					<span>
						{{item}}
					</span>
			</dd>
		</dl>
	</div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
				list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
				block: ["安顺", "北京", "成都", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import "@/assets/css/changeCity/category.scss";
</style>