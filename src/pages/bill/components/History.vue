<template>
  <div class="term">
    <div class="text">
      <div class="text1">{{year2}}</div>
    </div>
    <div @click="gotoDetailed(item.event)" class="payment-method" v-for="item of termList" :key="item.id">
      <div class="method-text1">{{item.text1}}</div>
      <div class="method-text2">{{item.text2}}</div>
      <div class="method-text3">{{item.text3 | numFilter}}</div>
    </div>
    <div class="text">
      <div class="text1">{{year1}}</div>
    </div>
    <div class="payment-method" v-for="item of termList" :key="item.id">
      <div class="method-text1">{{item.text1}}</div>
      <div class="method-text2">{{item.text2}}</div>
      <div class="method-text3">{{item.text3 | numFilter}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BillHistory',
  data () {
    return {
      year1: '',
      year2: '',
      termList: []
    }
  },
  mounted: function () {
    axios.get('/api/history').then(res => {
      console.log(res.data)
      this.termList = res.data.termList
      this.year1 = res.data.data[0].year1
      this.year2 = res.data.data[0].year2
    }).catch(res => {
      alert('wrong')
    })
  },
  methods: {
    gotoDetailed (methodsWords) {
      this[methodsWords]()
    },
    one () {
      this.$router.push('/detailed')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .term
    display : flex
    flex-wrap : wrap
    .text
      width : 100%
      height : 1.875rem
      background #F6F6F6
      .text1
        font-family : PingFangSC-Regular
        font-size : 0.75rem
        color : #999999
        letter-spacing : 0
        line-height : 1.875rem
        margin-left : 0.9375rem
    .payment-method
      width : 100%
      height : 4.0625rem
      border-bottom : 0.0625rem solid #F0F0F0
      margin-left : 0.9375rem
      margin-right : 0.9375rem
      .method-text1
        ont-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #333333
        line-height : 1.125rem
        margin-top : 0.8125rem
      .method-text2
        ont-family: PingFangSC-Regular
        font-size: 0.75rem
        color: #999999
        line-height: 1rem
        margin-top : 0.3125rem
        float left
      .method-text3
        float : right
        ont-family : PingFangSC-Regular
        font-size : 0.875rem
        line-height : 1rem
        margin-top : -0.3125rem
</style>
