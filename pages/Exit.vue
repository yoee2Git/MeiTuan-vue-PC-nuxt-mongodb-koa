<template></template>

<script>
  export default {
    layout: 'Blank',
    name: '',
    middleware: async (ctx) => {
      let {status,data} = await ctx.$axios.get('/users/exit');
      if(status === 200 && data.code === 0){
        location.href = "/"
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>