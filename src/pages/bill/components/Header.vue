<template>
  <div>
    <div class="navba">
      <mt-navbar class="navbar" v-model="selected">
        <mt-tab-item id="1">本期账单</mt-tab-item>
        <mt-tab-item id="2">未出账单</mt-tab-item>
        <mt-tab-item id="3">历史账单</mt-tab-item>
        <mt-tab-item id="4">消费报告</mt-tab-item>
      </mt-navbar>
    </div>
    <div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <bill-term></bill-term>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <bill-soon></bill-soon>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <bill-history></bill-history>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <bill-report></bill-report>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import BillTerm from './Term.vue'
import BillSoon from './Soon.vue'
import BillHistory from './History.vue'
import BillReport from './Report.vue'
export default {
  name: 'BillHeader',
  components: {
    BillTerm,
    BillSoon,
    BillHistory,
    BillReport
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style lang="stylus" scoped>
.navba
  height 3.75rem
  border-bottom : 0.0625rem solid #F2F1F1
  .navbar
    height : 2.75rem
    padding-top : 0.9375rem
  .navbar >>> .is-selected
    color #BE3A41
    border-bottom: 0.09375rem solid #BE3A41
</style>
