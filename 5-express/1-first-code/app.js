const express = require("express");

const app = express(); //stworzenie serwera
//nasłuchiwanie
app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening at http://localhost:3000");
}); //0.0.0.0 można podać opcjonalnie - znaczy nasłuchiwanie na wszystkich interfejsach sieciowych

//odpowiedź/request

//metody zapytań jak get, post, put,delete w express wystarczy po prostu wpisac
//app.get, natomiast app.all oznacza wykonanie bloku kodu nie zaleznie co przyjdzie

// app.get("/", req => {
//   console.log("Nazwa hostu: ", req.hostname); //wyswieta hostname
//   console.log("IP: ", req.ip); //odczytuje ip zapytania
//   console.log("IPS z proxy: ", req.ips); //jesli adres przychodzi z proxy, ips pozwala nam odczytać prawdziwy adres, a nie zmieniony przez inne serwery
//   console.log("Adres url: ", req.url); //adres url
//   console.log("Główny url: ", req.originalUrl); //oryginalny url-podstawowy link w przypadku przekierowania odwiedzającego
//   console.log("Ścieżka w url: ", req.path); //ostatnie cześci adresu url
//   console.log("Typ połączenia: ", req.protocol); //nieszyfrowane połączenie
//   console.log("Czy zabezpieczone połączenie: ", req.secure); //szyfrowane połączenie
//   // if (req.protocol !== "https") {
//   if (!req.secure) {
//     console.log("Protokuł niezabezpieczony!");
//   }
//   console.log("Odbiór danych: ", req.query);

//   const { name, surname } = req.query;
//   console.log("Hello ", name + " " + surname);
//   console.log("Referer", req.get("referer"));
// });

//-----------------------------------------
// Routing

// Poniżej podstawowa struktura REST

// app.get("/", req => {
//   console.log("Spis ludzi")
// });
// app.get("/:id", req => {
//   console.log("Informacja szczegółowa na temat osoby o ID 1,"+req.params.id)
// });

// app.post('/', req => {
//   console.log('Dodawanie nowej osoby')
// })
// // patch - aktualizuje poszczególne pojedyncze elementy
// // put- zastepuje, nadpisuje całe obiekty
// app.patch('/:id', req => {
//   console.log('Aktualizacja osoby o ID 1')
// })
// app.delete('/:id', req => {
//   console.log('Usuwanie osoby o ID 1')
// })
// -----------------
// app.get('/hello/new-user', req => {
//   console.log('Dodawanie nowego użytkownika')
// })

// app.get('/hello/:name', req => {
//   console.log("Hello, " + req.params.name)
// })
// -----------
app.get('/article/:id/:title?', req => {
  console.log(req.params);

})