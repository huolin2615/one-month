<template>
  <div class="term">
    <div class="detailed">
      <div class="detailed-test1">本期未还金额(元)</div>
      <div class="detailed-money1">{{data1 | numFilter}}</div>
    </div>
    <div class="detailed2">
      <div class="detailed-test2">本期账单(元)</div>
      <div class="detailed-money2">{{data2 | numFilter}}</div>
    </div>
    <div class="line"></div>
    <div class="detailed2">
      <div class="detailed-test2">最低还款(元)</div>
      <div class="detailed-money2">{{data3 | numFilter}}</div>
    </div>
    <div class="text">
      <div class="text1">5月账单 04/21-05-20</div>
      <div class="text2">还款日:06/20</div>
    </div>
    <div class="payment-method" v-for="item in termList" :key="item.id">
      <div class="method-text1">{{item.methods}}</div>
      <div class="method-text2">{{item.money | numFilter}}</div>
      <div class="method-text3">{{item.dates}}</div>
      <div class="method-text4">{{item.numbers | Filter}}</div>
    </div>
    <div class="payment-butten">
      <div class="term-butten">
        <div class="butten1">账单分期</div>
        <div class="butten2" @click="gotoRepayment">我要还款</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BillTerm',
  data () {
    return {
      data1: '',
      data2: '',
      data3: '',
      termList: []
    }
  },
  mounted: function () {
    axios.get('/api/moneylist').then(res => {
      this.data1 = res.data.data[0].money1
      this.data2 = res.data.data[0].money2
      this.data3 = res.data.data[0].money3
    }).catch(res => {
      alert('wrong')
    })
    axios.get('/api/paymentmethod').then(res => {
      this.termList = res.data.data
    }).catch(res => {
      alert('wrong')
    })
  },
  methods: {
    gotoRepayment () {
      this.$router.push('/repayment')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .term
    display : flex
    flex-wrap : wrap
    .detailed
      margin : 0 auto
      width : 21.5625rem
      height : 7.0625rem
      border-bottom : 0.0625rem solid #F2F1F1
      .detailed-test1
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        padding-top : 1.8125rem
        color : #999999
        text-align : center
        line-height : 1.125rem
      .detailed-money1
        font-family : DINAlternate-Bold
        font-size : 1.625rem
        color : #333333
        text-align : center
        line-height : 2rem
    .detailed2
      width : 49%
      height : 5.125rem
      border-bottom : 0.6875rem solid #f6f6f6
      .detailed-test2
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #999999
        text-align : center
        line-height : 1.125rem
        padding-top : 0.9375rem
      .detailed-money2
        font-family : DINAlternate-Bold
        font-size : 1.125rem
        color : #333333
        text-align : center
        line-height : 1.375rem
    .line
      margin-top : 1.375rem
      width : 0.0625rem
      height : 1.875rem
      background: #F2F1F1
    .text
      width : 100%
      height : 3.125rem
      border-bottom : 0.6875rem solid #f6f6f6
      .text1
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #333333
        line-height : 1.125rem
        float : left
        padding-top : 1rem
        height : 1.125rem
        margin-left : 0.9375rem
      .text2
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #333333;
        text-align : right
        line-height : 1.125rem;
        float : right
        padding-top : 1rem
        height : 1.125rem
        margin-right : 0.9375rem
    .payment-method
      width : 100%
      height : 4.0625rem
      overflow : hidden
      border-bottom : 0.0625rem solid #F0F0F0
      margin-left : 0.9375rem
      margin-right : 0.9375rem
      .method-text1
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #333333
        line-height : 1.125rem
        float : left
        margin-top : 0.8125rem
      .method-text2
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #000000
        text-align : right
        line-height : 1.125rem
        margin-top : 0.8125rem
      .method-text3
        ont-family : PingFangSC-Regular
        font-size : 0.75rem
        color : #999999
        line-height : 1rem
        float : left
        margin-top : 0.3125rem
      .method-text4
        font-family : PingFangSC-Regular
        font-size : 0.75rem
        color : #999999
        text-align : right
        line-height : 1rem
        margin-top : 0.3125rem
    .payment-butten
      width : 100%
      height : 3.75rem
      .term-butten
        display flex
        width : 100%
        height : 3.75rem
        background : #fff
        position fixed
        bottom 0
        .butten1
          font-family : PingFangSC-Regular
          font-size : 1rem
          width : 9.375rem
          height : 2.25rem
          color : #B7252D
          text-align : center
          line-height : 2.25rem
          border : 0.0625rem solid #B7252D
          border-radius : 0.25rem
          margin-top : 0.75rem
          margin-left : 1.75rem
        .butten2
          font-family : PingFangSC-Regular
          font-size : 1rem
          width : 9.375rem
          height : 2.25rem
          color : #FFFFFF
          text-align : center
          line-height : 2.25rem
          background-image : linear-gradient(-121deg, #CD2530 0%, #B5252D 100%)
          border-radius : 0.25rem
          margin-top : 0.75rem
          margin-left : 1.25rem
</style>
