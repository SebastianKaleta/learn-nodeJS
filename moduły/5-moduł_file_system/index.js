const fs = require("fs");
// Access
// fs.access('./names.txt', fs.constants.F_OK, (err) => {
//   console.log(err ? "plik nie istnieje" : "plik istnieje")
// })
// fs.access('./names.txt', fs.constants.W_OK, (err) => {
//   console.log(err ? "pliku nie miżna zapisywać" : "plik można zapisywać")
// })

// RENAME
// try {
//   fs.renameSync("imiona.txt", "names.txt");
// } catch (err) {
//   console.log(err);
// }

// fs.rename("names.txt", "imiona.txt", err => {
//   if (err) return console.log(err);
//   else console.log("nazwa zmieniona");
// });

// console.log("ok");

// READDIR

// console.log(fs.readdirSync("./"));

// fs.readdir("./", (err, files) => {
//   if(err)return console.log("Błąd: ", err);
//   console.log("Zawartość: ", files);
// });

// READFILE

// asynchronicznie
fs.readFile("names.txt", "utf-8", (err, data) => {
  if (err) throw Error(err);
  // używając throw zatrzyma się program a nie tylko przerwie funkcje
  console.log(data);
});

// synchronicznie
// Korzystając z sycnchronicznej metody najczesciej prypisujemy wynik do czegos

// try {
//   console.log(fs.readFileSync("names.txt", "utf8"));
// } catch (err) {
//   console.log(err);
// }

let names = "";

try {
  names = fs.readFileSync("names.txt", "utf8");
} catch (err) {
  // console.log(err);
  names = false;
}
console.log(names);
