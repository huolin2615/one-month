const Filter = function (val) {
  let strval = val.toString()
  return `${strval.substring(0, 0)}尾号${strval.substring(strval.length - 4)}`
}
export default Filter
// export function Filter (val) {
//   let strval = val.toString()
//   return `${strval.substring(0, 0)}尾号${strval.substring(strval.length - 4)}`
// }

// export default{
//   Filter
// }
