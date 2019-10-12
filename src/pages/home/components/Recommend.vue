<template>
  <div>
    <div class="recommend">
      <div class="iconfont img-hand">&#xe642;</div>
      <div class="card-recommend">卡片推荐</div>
      <div class="iconfont ellipsis">&#xe60b;</div>
    </div>
    <div class="card-all">
      <img class="card" :src="card" alt="">
      <div class="card-name">{{card_name}}</div>
      <div class="card-details">
        <ul class="details">
          <li class="card-detail" v-for="item in items" :key="item.id">{{item.detail}}</li>
        </ul>
      </div>
    </div>
    <div class="card-background">
      <div class="card-all2" v-for="cardlist in cardlist" :key="cardlist.id">
        <img class="card2" :src='cardlist.imgUrl' alt="">
        <div class="card-name2">{{cardlist.desc1}}</div>
        <div class="card-detail2">{{cardlist.desc2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeRecommend',
  data () {
    return {
      card: [],
      card_name: [],
      items: [],
      cardlist: []
    }
  },
  mounted: function () {
    axios.get('/api/recommend').then(res => {
      // console.log(res.data)
      this.card = res.data.data[0].card
      this.card_name = res.data.data[0].card_name
      this.items = res.data.items
      this.cardlist = res.data.cardlist
    }).catch(res => {
      alert('wrong')
    })
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    margin-top : 2.5rem
    display : flex
    .img-hand
      line-height : 1rem
      margin-left : 1.25rem
      color : #DBC38A
    .card-recommend
      flex : 1
      font-family : PingFangSC-Regular
      font-size : 0.875rem
      color : #333333
      line-height : 1.125rem
      margin-left : 0.3125rem
    .ellipsis
      margin-right : 1.25rem
      font-size : 1.2rem
  .card-all
    display : flex
    margin : 1.25rem
    width : 20.9375rem
    height : 5.625rem
    .card
      position : absolute
      width : 3.375rem
      height : 5rem
      margin-top : 0.2rem
      margin-left : 0.8125rem
    .card-name
      position : absolute
      font-family : PingFangSC-Medium
      font-size : 0.875rem
      color : #333333
      line-height : 1.125rem
      margin-left : 6.0625rem
    .card-details
      width : 21rem
      height : 3.375rem
      margin-left : .1rem
      margin-top : 1.875rem
      background : #f6f6f6
      border-radius : .2rem
      .details
        line-height : 1.125rem
        margin-left : 6rem
        .card-detail
          float : left
          font-family : PingFangSC-Regular
          font-size : 0.625rem
          color : #999999
          width : 7rem
          transform: scale(0.84,0.84)
  .card-background
    width : 23rem
    height : 4.5rem
    .card-all2
      float left
      overflow : hidden
      width : 7.5rem
      .card2
        margin-left : 1.8125rem
      .card-name2
        font-family : PingFangSC-Medium
        font-size : 0.75rem
        color : #333333
        line-height : 1.125rem
        margin-left : 1.8125rem
      .card-detail2
        font-family : PingFangSC-Regular
        font-size : 0.625rem
        margin-left : 1.2rem
        color : #999999;
        line-height : 0.75rem
        transform: scale(0.84,0.84)
</style>
