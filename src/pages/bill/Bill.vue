<template>
  <div>
      <common-hea>
      <div class="iconfont back-header" slot="left" @click="gotoHome">&#xec41;</div>
      <div class="title-header" slot="title">账单查询</div>
      <div class="other-header" slot="other">账单补寄</div>
      <div class="iconfont arrow-header" slot="right">&#xe600;</div>
      </common-hea>
      <common-account>
        <div class="iconfont account-img1" slot="left2">&#xe847;</div>
        <div slot="text1">查询账户</div>
        <div slot="text2">个人账户</div>
        <div class="iconfont account-img2" slot="right2">&#xe601;</div>
      </common-account>
      <bill-header></bill-header>
  </div>
</template>

<script>
import CommonHea from '../../common/CommonHea.vue'
import CommonAccount from '../../common/CommonAccount.vue'
import BillHeader from '../../pages/bill/components/Header.vue'
export default {
  name: 'Bill',
  components: {
    CommonHea,
    CommonAccount,
    BillHeader
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
