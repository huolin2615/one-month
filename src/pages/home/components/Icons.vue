<template>
  <div class="icons">
    <div class="icon" v-for="item of iconsList" :key="item.id">
      <div class="icon-img">
        <img @click="gotoRepayment(item.Event)" class="icon-img-content" :src='item.imgUrl' alt="">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: []
    }
  },
  methods: {
    gotoRepayment (methodsWords) {
      this[methodsWords]()
    },
    tow () {
      this.$router.push('/repayment')
    }
  },
  mounted: function () {
    axios.get('/api/iconsList').then(res => {
      // console.log(res.data)
      this.iconsList = res.data.iconsList
      // console.log(this.iconsList)
    }).catch(res => {
      alert('wrong')
    })
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow : hidden
    padding-bottom : 50%
    height : 0
    .icon
      position : relative
      height : 0
      float : left
      width : 25%
      padding-bottom : 25%
      .icon-img
        position : absolute
        top :0
        left :0
        right : 0
        bottom : 1.5rem
        box-sizing : border-box
        padding : .7rem
        .icon-img-content
          height : 100%
          margin : 0 auto
          display : block
      .icon-desc
        position : absolute
        left :0
        right : 0
        bottom : 0
        height : 1rem
        line-height : .2rem
        text-align : center
        color : #666666
        font-size: 12px
</style>
