<template>
  <div class="heade">
    <div class="header">
      <div class="header-left">
        <slot name="left"></slot>
      </div>
      <div class="header-title">
        <slot name="title"></slot>
      </div>
      <div class="header-other">
        <slot name="other"></slot>
      </div>
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHea',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.heade
  height : 2.75rem
  width : 100%
  .header
    z-index : 1
    position fixed
    top 0
    background #fff
    height : 2.75rem
    width : 100%
    display : flex
    line-height : 2.75rem
    border-bottom : 0.0625rem solid #F2F1F1
    .header-left
      flex 1
      margin-left : 0.9375rem
      .back-header
        font-size : 1.375rem
    .header-title
      width : 35%
      margin-left : 4.5rem
      .title-header
        text-align : center
        font-size : 1.125rem
    .header-other
      width : 5.4rem
      text-align : right
      .other-header
        padding-right : .2rem
        font-size : 0.875rem
    .header-right
      margin-right : 0.9375rem
      .arrow-header
        font-size : 1.375rem
</style>
