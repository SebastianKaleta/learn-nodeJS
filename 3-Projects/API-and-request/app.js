// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

// jak ustalić co wpisaliśmy?

// console.log(process.argv);

// Pobieramy 3 podawany parametr

const year = process.argv[2] || Math.floor(Math.random() * 2020);
console.log(year);

fetch(`http://numbersapi.com/${year}/year?json`)
  .then(response => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
  }) //żeby to co jest w response.json znalazło się w data w kolejnym promis, musimy używać return (jeśli tylko zwracamy response.json, return nie musimy pisać)
  .then(data => console.log(data.text)) //text to jedna z opcji ktora zwraca response do kolejnego promis
  .catch(error => console.log("error ", error))