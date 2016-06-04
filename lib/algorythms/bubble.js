module.exports = (_arr) => {
  let arr = _arr.slice(0)
  for (let i = arr.length; i--;) {
    for (let j = arr.length; j--;) {
      if (i == j || arr[i] <= arr[j]) continue
      let x = arr[i]
      arr[i] = arr[j]
      arr[j] = x
    }
  }
  return arr
}
