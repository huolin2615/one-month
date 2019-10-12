<template>
  <div>
      <common-hea>
      <div class="iconfont back-header" slot="left" @click="gotoHome">&#xec41;</div>
      <div class="title-header" slot="title">自动还款</div>
      <div class="other-header" slot="other"></div>
      <div class="iconfont arrow-header" slot="right">&#xe600;</div>
      </common-hea>
      <common-account>
        <div class="iconfont account-img1" slot="left2">&#xe847;</div>
        <div slot="text1">还款账户</div>
        <div slot="text2">个人卡账户</div>
        <div class="iconfont account-img2" slot="right2">&#xe601;</div>
      </common-account>
  </div>
</template>

<script>
import CommonHea from '../../../common/CommonHea.vue'
import CommonAccount from '../../../common/CommonAccount.vue'
export default {
  name: 'Automatic',
  components: {
    CommonHea,
    CommonAccount
  },
  data () {
    return {
    }
  },
  methods: {
    gotoHome () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
