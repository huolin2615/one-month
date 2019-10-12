<template>
  <div>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperCard" :key="item.id">
          <div class="swiper-card">
            <div class="swiper-text1">{{item.swiper_text1}}</div>
            <div class="swiper-text2">{{item.swiper_text2}}</div>
            <img class="swiper-img" :src="item.swiper_img" alt="">
            <img class="swiper-card-small" :src="item.swiper_card_small" alt="">
          </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeSwiperCard',
  data () {
    return {
      swiperCard: [],
      swiperOption: {
        loop: true,
        // initialSlide: 2
        slidesPerView: '1.1'
      }
    }
  },
  mounted: function () {
    axios.get('/api/swiperCard').then(res => {
      // console.log(res.data)
      this.swiperCard = res.data.data
      // console.log(this.iconsList)
    }).catch(res => {
      alert('wrong')
    })
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-card
    position relative
    width : 20.9375rem
    height : 4.875rem
    margin : 1.2rem 1.2rem 0 1.2rem
    .swiper-text1
      position : absolute
      font-family : Helvetica
      font-size : 1.125rem
      color : #7D5734
      line-height : 1.3125rem
      margin-left : 1.25rem
      margin-top : 1.3125rem
    .swiper-text2
      position : absolute
      font-family : PingFangSC-Regular
      font-size : 0.75rem
      color : #937557
      margin-left : 1.25rem
      margin-top : 2.6875rem
    .swiper-card-small
      position : absolute
      z-index : 1
      width : 4.4375rem
      height : 2.8125rem
      margin-left : -7.3125rem
      margin-top : 1.0625rem
</style>
