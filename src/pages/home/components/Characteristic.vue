<template>
  <div>
    <div class="recommend">
      <div class="iconfont img-v">&#xe61d;</div>
      <div class="card-recommend">特色权益</div>
      <div class="iconfont ellipsis">&#xe60b;</div>
    </div>
    <div class="card" v-for="item in characteristicList" :key="item.id">
      <img class="card-img" :src="item.card_img" alt="">
      <div class="card-text">
        <div class="card-text1">{{item.card_text1}}</div>
        <div class="card-text2">{{item.card_text2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeCharacteristic',
  data () {
    return {
      characteristicList: []
    }
  },
  mounted: function () {
    axios.get('/api/characteristic').then(res => {
      console.log(res.data)
      this.characteristicList = res.data.characteristicList
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
    .img-v
      line-height : 1rem
      font-size : 1rem
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
  .card
    float left
    position : relative
    margin-left : 1.25rem
    margin-top : .5rem
    width : 10rem
    height : 5.2rem
    .card-img
      position absolute
    .card-text
      position absolute
      width : 10rem
      height : 2.25rem
      margin-top : 1.0625rem
      .card-text1
        font-family : PingFangSC-Regular
        font-size : 0.75rem
        color : #FFFFFF
        text-align : center
        line-height : 1.125rem
      .card-text2
        font-family : PingFangSC-Regular
        font-size : 0.75rem
        color : #FFFFFF
        text-align : center
        line-height : 1.125rem
</style>
