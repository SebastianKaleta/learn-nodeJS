const path = require('path');

// const pathToFile = path.join(__dirname, 'index.js');
// //alternatywnie:  const pathToFile = __dirname+'\\'+'index.js';
// console.log(pathToFile)
// -------------------------------------
// const anotherPath = path.join('/users/pl', 'active', 'users.json');
// console.log(anotherPath)
// users\pl\active\users.json  buduje taką ścieżkę

// --------------
// const parse = path.parse(__filename)
// console.log(parse)
// const parse2 = path.parse(path.join(__dirname, 'index.js'))
// console.log(parse2)

// // sprawdza rozszerzenie
// console.log(path.extname('gkfhgj.js')) //.js

// // sprawdza czy scieżka jest absolutna
// console.log(path.isAbsolute('./file.js')) //false
// console.log(path.isAbsolute('/file.js')) //true
// console.log(path.isAbsolute('file.js')) //false


const os = require('os');

const uptime = os.uptime();
console.log(uptime)

// console.log(os.homedir())  katalog domowy

// dokumentacja dobrze opisuje te moduły i wiele innych