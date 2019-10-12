<template>
  <div class="term">
    <div class="detailed2">
      <div class="detailed-test2">本期账单(元)</div>
      <div class="detailed-money2">8,888.88</div>
    </div>
    <div class="line"></div>
    <div class="detailed2">
      <div class="detailed-test2">最低还款(元)</div>
      <div class="detailed-money2">800.00</div>
    </div>
    <div class="text">
      <div class="text1">4月账单 03/21-04-20</div>
      <div class="text2">还款日:05/20</div>
    </div>
    <div class="payment-method" v-for="item of termList" :key="item.id">
      <div class="method-text1">{{item.text1}}</div>
      <div class="method-text2">{{item.text2}}</div>
      <div class="method-text3">{{item.text3}}</div>
      <div class="method-text4">{{item.text4}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailedBody',
  data () {
    return {
      termList: [{
        id: '001',
        text1: '讯销（中国）商贸-银联扫码',
        text2: '295.00元',
        text3: '2018-05-10',
        text4: '尾号0000'
      }, {
        id: '002',
        text1: '讯销（中国）商贸-银联扫码',
        text2: '604.00元',
        text3: '2018-05-10',
        text4: '尾号2345'
      }, {
        id: '003',
        text1: '微信支付：滴滴出行',
        text2: '604.00元',
        text3: '2018-05-10',
        text4: '尾号2345'
      }, {
        id: '004',
        text1: '讯销（中国）商贸-银联扫码',
        text2: '604.00元',
        text3: '2018-05-10',
        text4: '尾号2345'
      }, {
        id: '005',
        text1: '讯销（中国）商贸-银联扫码',
        text2: '604.00元',
        text3: '2018-05-10',
        text4: '尾号2345'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .term
    display : flex
    flex-wrap : wrap
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
        padding-top : 1.5rem
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
</style>
