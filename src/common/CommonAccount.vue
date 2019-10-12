<template>
  <div class="accoun">
    <div class="account">
      <div class="account-left2">
        <slot name="left2"></slot>
      </div>
      <div class="account-text1">
        <slot name="text1"></slot>
      </div>
      <div class="account-text2">
        <slot name="text2"></slot>
      </div>
      <div class="account-right2">
        <slot name="right2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonAccount',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.accoun
  height : 3.125rem
  width : 100%
  .account
    z-index : 1
    position fixed
    top : 2.8125rem
    background : #fff
    display : flex
    height : 3.125rem
    width : 100%
    border-bottom : 0.0625rem solid #F2F1F1
    .account-left2
      eight : 3.125rem
      line-height : 3.125rem
      margin-left : 1.15rem
      .account-img1
        font-size : 1.375rem
    .account-text1
      flex 1
      font-family : PingFangSC-Regular
      font-size : 0.875rem
      color: #333333
      height : 3.125rem
      line-height : 3.125rem
      margin-left : 0.7rem
    .account-text2
      font-family : PingFangSC-Regular
      font-size : 0.875rem
      color : #333333
      eight : 3.125rem
      line-height : 3.125rem
      margin-right : 0.3rem
    .account-right2
      eight : 3.125rem
      line-height : 3.125rem
      margin-right : .9rem
      .account-img2
        font-size : 1.375rem
</style>
