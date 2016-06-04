module.exports = (arr, algo_name) => {
  let algo
  try {
    algo = require(`./lib/algorythms/${algo_name}.js`)
  } catch(e) {
    throw `Can't find algorythm ${algo_name}`
  }
  return algo(arr)
}
