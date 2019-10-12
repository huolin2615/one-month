<template>
  <div class="card">
    <div class="card-date">
      <div class="repayment-date">还款日:05/15</div>
      <div class="pending-repaymen">
        <div class="repaymen">待还款</div>
      </div>
    </div>
    <div class="current-issue">
      <div class="bill">本期账单（元）</div>
      <div class="surplus">本期剩余应还（元）</div>
    </div>
    <div class="current-number">
      <div class="bill-number">{{data1 | numFilter}}</div>
      <div class="surplus-number">{{data2 | numFilter}}</div>
    </div>
    <div class="available-quota">
      <div class="quota">可用额度：</div>
      <div class="quota-number">{{data3 | numFilter}}</div>
      <div class="quota-yuan">元</div>
    </div>
    <div class="each-button">
      <div class="query-button" @click="gotoBill">账单查询</div>
      <div class="quota-button" @click="gotoQuota">账户额度</div>
      <div class="repayment-button" @click="gotoRepayment">我要还款</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      data1: '',
      data2: '',
      data3: ''
    }
  },
  mounted: function () {
    axios.get('/api/moneylist').then(res => {
      console.log(res.data)
      this.data1 = res.data.data[0].money1
      this.data2 = res.data.data[0].money2
      this.data3 = res.data.data[0].money3
    }).catch(res => {
      alert('wrong')
    })
  },
  methods: {
    gotoBill () {
      this.$router.push('/bill')
    },
    gotoQuota () {
      this.$router.push('')
    },
    gotoRepayment () {
      this.$router.push('/repayment')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .card
    width : 20.3125rem
    height : 12.5rem
    background-image : url("../../../assets/img/Copy.png")
    margin-left  : 1.5625rem
    margin-right : 1.5625rem
    margin-top : 0.9375rem
    .card-date
      display : flex
      .repayment-date
        position : absolute
        margin-left : 11.5rem
        margin-top : 0.9375rem
        font-family : DINAlternate-Bold
        font-size : 0.75rem
        color : #FFFFFF
        line-height : 1.25rem
      .pending-repaymen
        position : absolute
        margin-left : 16.6875rem
        margin-top : 1.1rem
        font-family: PingFangSC-Regular
        color: #4C6472
        line-height: 0.75rem
        border-radius: 0.2rem
        width : 2.5rem
        opacity: 0.5
        background: #FFFFFF
        transform: skewX(-35deg)
        .repaymen
          font-size: 0.5625rem
          display: inline-block
          transform: skewX(35deg) scale(0.65,0.65)
    .current-issue
      font-size : 0.75rem
      color : #ffffff
      opacity : 0.7
      line-height : 1.125rem
      .bill
        position : absolute
        margin-left : 0.9375rem
        margin-top : 3.4375rem
      .surplus
        position : absolute
        margin-left : 11.5rem
        margin-top : 3.4375rem
    .current-number
      font-size : 1.75rem
      font-family : DINAlternate-Bold
      color : #ffffff
      line-height : 1.375rem
      .bill-number
        position : absolute
        margin-left : 0.9375rem
        margin-top : 4.875rem
      .surplus-number
        position : absolute
        margin-left : 11.5rem
        margin-top : 4.875rem
    .available-quota
      display : flex
      padding-left  : 0.9375rem
      padding-top : 7.1875rem
      line-height : 1rem
      .quota
        opacity : 0.7
        font-family : PingFangSC-Regular
        font-size : 0.875rem
        color : #FFFFFF
      .quota-number
        font-family : DINAlternate-Bold
        font-size : 0.875rem
        color : #FFFFFF
      .quota-yuan
        font-size : 0.5rem
        color : #FFFFFF
        padding-left : .25rem
    .each-button
      .query-button
        padding  : 0.1875rem 1.3125rem
        border : 0.0313rem solid hsla(0,0%,100,.5)
        border-radius : 0.25rem
        position : absolute
        margin-top : 1.5625rem
        margin-left : 0.9375rem
        font-size : 0.75rem
        color : #FFFFFF
        background-color:transparent
      .quota-button
        padding  : 0.1875rem 1.3125rem
        border : 0.0313rem solid hsla(0,0%,100,.5)
        border-radius : 0.25rem
        position : absolute
        margin-top : 1.5625rem
        margin-left : 7.375rem
        font-size : 0.75rem
        color : #FFFFFF
        background-color:transparent
      .repayment-button
        padding  : 0.1875rem 1.3125rem
        border-radius : 0.25rem
        position : absolute
        margin-top : 1.5625rem
        margin-left : 13.75rem
        font-size : 0.75rem
        color :  #4C6472
        background-image : linear-gradient(-1deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.85) 50%, #FFFFFF 100%)
</style>
