import Mock from 'mockjs'

Mock.mock('/api/moneylist', 'get', {
  status: 200,
  message: '获取成功',
  data: [
    {
      money1: '@float(0, 10000, 0, 2)',
      money2: '@float(0, 10000, 0, 2)',
      money3: '@float(0, 10000, 0, 2)'
    }
  ]
})

Mock.mock('/api/paymentmethod', 'get', {
  status: 100,
  message: '获取成功',
  'data|5-10': [
    {
      id: '@increment(1)',
      methods: '@methods',
      money: '@float(0,1000,0,2)',
      dates: '@now(yyyy-MM-dd)',
      numbers: '@integer(16)'
    }
  ]
})

Mock.mock('/api/history', 'get', {
  status: 80,
  message: '获取成功',
  data: [{
    year1: '2018',
    year2: '2019'
  }],
  termList: [{
    text1: '4月账单',
    text2: '2018/03/21-2018/04/20',
    text3: '@float(0,99999,0,2)',
    event: 'one'
  }, {
    text1: '3月账单',
    text2: '2018/03/21-2018/04/20',
    text3: '@float(0,99999,0,2)',
    event: 'tow'
  }, {
    text1: '2月账单',
    text2: '2018/03/21-2018/04/20',
    text3: '@float(0,99999,0,2)',
    event: ''
  }, {
    text1: '1月账单',
    text2: '2018/03/21-2018/04/20',
    text3: '@float(0,99999,0,2)',
    event: ''
  }
  ]
})

Mock.mock('/api/cardList', 'get', {
  status: 50,
  message: '获取成功',
  'data|1-3': [
    {
      id: '@increment(1)',
      ordinary_card: require('../assets/img/Ordinary-card.png'),
      card_type: '白金卡',
      card_level: '主卡',
      add_card: '去加挂',
      right_arrow: '&#xe601;',
      card: '@integer(1000000000000000,9999999999999999)'
    }
  ]
})

Mock.mock('/api/iconsList', 'get', {
  status: 25,
  message: '获取成功',
  iconsList: [{
    id: '001',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '账单查询',
    Event: 'one'
  }, {
    id: '002',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '我要还款',
    Event: 'tow'
  }, {
    id: '003',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '我要分期',
    Event: ''
  }, {
    id: '004',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '信用卡转账',
    Event: ''
  }, {
    id: '005',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '卡片激活'
  }, {
    id: '006',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '安全管理'
  }, {
    id: '007',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '资料管理'
  }, {
    id: '008',
    imgUrl: require('../assets/img/repayment.png'),
    desc: '敬请期待'
  }
  ]
})

Mock.mock('/api/swiperCard', 'get', {
  status: 10,
  message: '获取成功',
  'data|4': [
    {
      id: '@increment(1)',
      swiper_text1: '信用卡营销活动',
      swiper_text2: '更懂你的数据银行',
      swiper_img: require('../assets/img/Rectangle.png'),
      swiper_card_small: require('../assets/img/small.jpg')
    }
  ]
})

Mock.mock('/api/recommend', 'get', {
  status: 5,
  message: '获取成功',
  data: [
    {
      card: require('../assets/img/VISA.png'),
      card_name: 'Visa环球白金卡'
    }
  ],
  items: [{
    id: '001',
    detail: '专享味道 个性尊享'
  }, {
    id: '002',
    detail: '积分尊享 轻松翻倍'
  }, {
    id: '003',
    detail: '支付尊享 全球服务'
  }, {
    id: '004',
    detail: '超0减免 资费尊享'
  }, {
    id: '005',
    detail: 'Visa礼遇 专属尊享'
  }
  ],
  cardlist: [{
    id: '01',
    imgUrl: require('../assets/img/Goldencard.png'),
    desc1: '江渝白金卡',
    desc2: '贵宾权益 尊享生活'
  }, {
    id: '02',
    imgUrl: require('../assets/img/Diamondcard.png'),
    desc1: '江渝金卡',
    desc2: '贴心服务 多重保障'
  }, {
    id: '03',
    imgUrl: require('../assets/img/Goldencard.png'),
    desc1: '江渝钻石卡',
    desc2: '尊享30万授信额度'
  }
  ]
})

Mock.mock('/api/characteristic', 'get', {
  status: 4,
  message: '获取成功',
  characteristicList: [{
    id: '01',
    card_img: require('../assets/img/Mask2.png'),
    card_text1: '刷江渝信用卡',
    card_text2: '惠享贵宾洁牙套餐'
  }, {
    id: '02',
    card_img: require('../assets/img/Mask.png'),
    card_text1: '白金卡钻石卡',
    card_text2: '高尔夫俱乐部专享礼遇'
  }]
})
