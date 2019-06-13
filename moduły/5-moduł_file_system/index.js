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
// fs.readFile("names.txt", "utf-8", (err, data) => {
//   if (err) throw Error(err);
// używając throw zatrzyma się program a nie tylko przerwie funkcje
//   console.log(data);
// });

// synchronicznie
// Korzystając z sycnchronicznej metody najczesciej prypisujemy wynik do czegos

// try {
//   console.log(fs.readFileSync("names.txt", "utf8"));
// } catch (err) {
//   console.log(err);
// }

// let names = "";

// try {
//   names = fs.readFileSync("names.txt", "utf8");
// } catch (err) {
//   // console.log(err);
//   names = false;
// }
// console.log(names);

// 5.WRITEFILE
// Odczyt pliku i zapisanie do innego jego zawartosci
// fs.readFile("names.txt", "utf8", (err, data) => {
//   if (err) console.log("nie udało się");
//   fs.writeFile("users.txt", data, err => {
//     if (err) console.log(err);
//     else console.log("Udało się zapisać w pliku");
//   });
// });

// domyślnie kodowanie utf8
// const names = "A Dawid i Ania idą na spacer\n";
// fs.appendFile("users.txt", names, err => {
//   if (err) console.log(err);
//   else console.log("Udało się zapisać w pliku");
// });


// readfile ma kodowanie null, dostajemy wartosc pliku binarnie ale append ma domyslnie kodowanie utf8 więc zamienia treść binarna z buffera na tekst a nastepnie zapisuje
fs.readFile("names.txt", (err, data) => {
  fs.appendFile("users.txt", data, err => {
    if (err) console.log(err);
    else console.log("Udało się zapisać w pliku");
  });
});