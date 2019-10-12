const numFilter = function (value) {
  if (value === null || value === undefined) {
    return '0.00'
  }
  // 获取整数部分
  let intPart = Number(value).toFixed(0)
  // 每三位加逗号
  let realVal = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  // 获取小数部分
  let valueSplit = value.toString().split('.')
  if (valueSplit.length === 2) {
    let floatPart = valueSplit[1].toString()
    if (floatPart.length === 1) {
      return realVal + '.' + floatPart + '0'
    } else {
      floatPart = floatPart.substring(0, 2)
      return realVal + '.' + floatPart
    }
  } else {
    return realVal + '.00'
  }
}
export default numFilter
