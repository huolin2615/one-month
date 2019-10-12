<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings" width="375px" height="300px"></ve-line>
    <div class="">月度账单</div>
    <div class=""></div>
    <div class="">年度账单</div>
  </div>
</template>

<script>
export default {
  name: 'BillReport',
  data () {
    this.chartSettings = {
      metrics: ['访问用户'],
      dimension: ['日期']
    }
    return {
      chartData: {
        columns: [ '日期', '访问用户' ],
        rows: [
          { '日期': '1/1', '访问用户': 1333 },
          { '日期': '1/2', '访问用户': 3539 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
