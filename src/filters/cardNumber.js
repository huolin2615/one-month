const hideMiddle = function (val) {
  let strval = val.toString()
  return `${strval.substring(0, 4)} **** **** ${strval.substring(strval.length - 4)}`
}
export default hideMiddle
