<template>
  <div>
    <div class="list">
      <div class="card-list">个人卡账户-信用卡列表</div>
      <div @click="toolEventSlot">
        <div class="iconfont up-arrow" v-if="downIcon">&#xe601;</div>
        <div class="iconfont up-arrow" v-if="!downIcon">&#xe602;</div>
      </div>
    </div>
    <div v-if="showEagleMap">
      <div class="card" v-for="item in cardList" :key="item.id">
        <img class="ordinary-card" :src="item.ordinary_card" alt="">
        <div class="card-type">{{item.card_type}}</div>
        <div class="level">
          <div class="card-level">{{item.card_level}}</div>
        </div>
        <dir class="card-nummber">{{item.card | hideMiddle}}</dir>
        <div class="add-card">{{item.add_card}}</div>
        <div class="iconfont right-arrow">&#xe601;</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeList',
  data () {
    return {
      cardList: [],
      downIcon: true,
      showEagleMap: false
    }
  },
  methods: {
    toolEventSlot () {
      this.downIcon = !this.downIcon
      this.showEagleMap = !this.showEagleMap
    }
  },
  mounted: function () {
    axios.get('/api/cardList').then(res => {
      console.log(res.data)
      this.cardList = res.data.data
    }).catch(res => {
      alert('wrong')
    })
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display flex
    margin : 1.25rem 2.1875rem 0.625rem 2.1875rem
    .card-list
      flex 1
      color : #333333
      font-size : 0.875rem
      line-height : 1.25rem
    .up-arrow
      font-size : 1rem
  .card
    display : flex
    width : 20.3125rem
    height : 6.25rem
    margin-left  : 1.5625rem
    margin-right : 1.5625rem
    margin-bottom : 0.8125rem
    background : #FFFFFF
    box-shadow : 0 0.0625rem 0.625rem 0.125rem rgba(223,223,223,0.50);
    border-radius : 0.25rem
    .ordinary-card
      width : 2.375rem
      height : 1.8125rem
      padding-left : 0.8125rem
      padding-top : 1.1875rem
    .card-type
      padding-left : 0.875rem
      padding-top : 1.3125rem
      font-size : 0.875rem
      color : #666666
      height : 1.125rem
      line-height : 1.125rem
    .level
      margin-top : 1.4375rem
      margin-left : 0.625rem
      width : 2.5rem
      height : 0.9375rem
      background : #F0F0F0
      border-radius : 0.125rem
      .card-level
        font-size : 0.5625rem
        transform: scale(0.65,0.65)
        text-align : center
        color : #666666
        height : 0.6875rem
        line-height : 0.9375rem
    .card-nummber
      position : absolute
      font-family: DINAlternate-Bold
      font-size: 1.25rem
      color: #333333
      line-height: 1.875rem
      margin-left : 4.0625rem
      margin-top : 3.1875rem
    .add-card
      margin-top : 2.625rem
      margin-left : 6.2rem
      font-family : PingFangSC-Regular
      font-size : 0.75rem
      color : #333333
    .right-arrow
      position : absolute
      margin-left : 18.3125rem
      margin-top : 2.625rem
      font-size : 1rem

</style>
