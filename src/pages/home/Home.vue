<template>
  <div>
    <common-hea>
      <div class="iconfont back-header" slot="left">&#xec41;</div>
      <div class="title-header" slot="title">信用卡</div>
      <div class="other-header" slot="other"></div>
      <div class="iconfont arrow-header" slot="right">&#xe600;</div>
    </common-hea>
    <home-swiper></home-swiper>
    <home-list></home-list>
    <home-icons></home-icons>
    <home-swiper-card></home-swiper-card>
    <home-recommend></home-recommend>
    <home-characteristic></home-characteristic>
  </div>
</template>

<script>
import CommonHea from '../../common/CommonHea.vue'
import HomeSwiper from '../../pages/home/components/Swiper.vue'
import HomeList from '../../pages/home/components/List.vue'
import HomeIcons from '../../pages/home/components/Icons.vue'
import HomeSwiperCard from '../../pages/home/components/SwiperCard.vue'
import HomeRecommend from '../../pages/home/components/Recommend.vue'
import HomeCharacteristic from '../../pages/home/components/Characteristic'
export default {
  name: 'Home',
  components: {
    CommonHea,
    HomeSwiper,
    HomeList,
    HomeIcons,
    HomeSwiperCard,
    HomeRecommend,
    HomeCharacteristic
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
