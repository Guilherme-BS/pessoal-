const five = () => {
  console.log('fn5 timeout')
}
const four = () => {
  five()
}

const tree = () => {
  setTimeout(() => four(), 2000)
  console.log('FN3')
}

const two = () => {
  tree()
}

const one = () => {
  two()
}

const main = () => {
  one()
}
main()
console.log('terminou a execuçao')