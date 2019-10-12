<template>
  <div>
    <button>获取</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  },
  mounted: function () {
    axios.get('/api/goodslist').then(res => {
      console.log(res.data)
    })
  }
  // methods: {
  //   async getGoodsList () {
  //     const {data: res} = await this.$axios.get('/api/goodslist')
  //     console.log(res)
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
</style>
