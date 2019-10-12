import { Random } from 'mockjs'

// 创建自定义 Mock 函数
Random.extend({
  methods: function () {
    const arr = [
      '讯销（中国）商贸-银联扫码',
      '微信支付：滴滴出行',
      '支付宝支付：滴滴出行',
      '支付宝支付：淘票票'
    ]
    return this.pick(arr)
  }
})

// Random.extend({
//   numbers: function () {
//     const arr = [
//       '尾号0000',
//       '尾号0001',
//       '尾号0002',
//       '尾号1234',
//       '尾号4321',
//       '尾号2345'
//     ]
//     return this.pick(arr)
//   }
// })
