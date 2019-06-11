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

fs.readdir("./", (err, files) => {
  console.log("Błąd: ", err);
  console.log("Zawartość: ", files);
});
