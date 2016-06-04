const sorting = require('./')
const arr = [1,5,4,3,6,2,6,4,1,0,1,23,4,5,7,7,5]

function check(algo_name) {
  let res = sorting(arr, algo_name)
  console.log(`[${algo_name}] Result: ${res.join(',')}`)
  if (arr.sort((a, b) => a - b).every((el, i) => el == res[i])) {
    console.log(`[${algo_name}] OK! Sorted!`)
  } else {
    console.log('Error! Not sorted!')
  }
}

check('bubble')
