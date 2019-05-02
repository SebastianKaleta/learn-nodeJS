// const add = (x, y) => x + y;
// const division = (number1, number2) => number1 / number2;

// const math = (a, b, callback) => {
//   console.log(callback(a, b))
// }

// math(5, 4, add)
// math(4, 2, division)

// setTimeout(() => console.log("Co u ciebie?"), 2000)
// console.log("Hej ")

const fs = require('fs')

fs.readFile('./text.txt', 'utf8', (error, file) => console.log(file))
console.log('Linia wykonywana po odczytaniu - widziana przed odczytaniem')