<template>
  <div>
      <common-hea>
      <div class="iconfont back-header" slot="left" @click="gotoHome">&#xec41;</div>
      <div class="title-header" slot="title">2018年4月账单</div>
      <div class="other-header" slot="other"></div>
      <div class="iconfont arrow-header" slot="right">&#xe600;</div>
      </common-hea>
      <detailed-body></detailed-body>
  </div>
</template>

<script>
import CommonHea from '../../../common/CommonHea.vue'
import CommonAccount from '../../../common/CommonAccount.vue'
import DetailedBody from './components/Body.vue'
export default {
  name: 'Detailed',
  components: {
    CommonHea,
    CommonAccount,
    DetailedBody
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
