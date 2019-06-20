// http://numbersapi.com/random/year?json

// const fetch = require('node-fetch');

// jak ustalić co wpisaliśmy?

// console.log(process.argv);

// Pobieramy 3 podawany parametr

// const year = process.argv[2] || Math.floor(Math.random() * 2020);
// console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then(response => {
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
//   }) //żeby to co jest w response.json znalazło się w data w kolejnym promis, musimy używać return (jeśli tylko zwracamy response.json, return nie musimy pisać)
//   .then(data => console.log(data.text)) //text to jedna z opcji ktora zwraca response do kolejnego promis
//   .catch(error => console.log("error ", error))

// ZADANIE 2

// `http://numbersapi.com/${number}/${type}?json`
// const fetch = require('node-fetch');
// const arg = process.argv[2];

// let type = ""

// if (arg.indexOf("--year") === 0) {
//   console.log("szukamy informacji o roku..")
//   type = "year"
// } else if (arg.indexOf("--math") === 0) {
//   console.log("szukamy informacji o liczbie..")
//   type = "math"
// }
// if (arg.indexOf("--trivia") === 0) {
//   console.log("szukamy liczby-ciekawostki..")
//   type = "trivia"
// }

// const equalSign = arg.search("=");

// if (equalSign === -1) {
//   console.log("Nie wpisałeś liczby!")

// }

// const number = arg.slice(equalSign + 1) || 1; //wycina nam z polecenia od wartosci qualSign + jeden znak, wiec np. z --year=2000, wytnie --year= a wyswietli 2000

// if (number === "" || isNaN(Number(number))) {
//   console.log("To nie jest liczba!")
//   process.exit();
// }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
//   .then(response => {
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error("ooooo coś nie tak " + response.status)
//     }
//   })
//   .then(data => console.log(data.text))
//   .catch(error => console.log("Błąd: ", error))

// ZADANIE 3 NBP API - REQUEST

// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const request = require('request');
const fs = require('fs');

const validCodes = ['usd', 'eur', 'gbp', 'chf']

const code = process.argv[2];
const isValid = validCodes.find(currency => currency === code) ? true : false;
if (!isValid) process.exit();
console.log(isValid)
const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

console.log(url)

request(url, {
  json: true
}, (err, res, body) => {

  if (err) {
    return console.log("Błąd: ", err)
  }
  if (res.statusCode !== 200) {
    return console.log("Coś poszło nie tak, sprawdź url")
  };

  const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`;

  fs.appendFile('currences.txt', message + '\n', (err) => {
    console.log("dane dodane do pliku")
  })
  console.log(message)
})