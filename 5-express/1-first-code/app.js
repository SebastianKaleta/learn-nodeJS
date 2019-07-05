const express = require("express");
const path = require("path");

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
// app.get('/article/:id/:title?', req => {
//   console.log(req.params);

// })

// -------------------------------------------
// RESPONSE

// app.get('/', (req, res) => {
//   res.write('Hello, World!'); //wyświetlnie informacji
//   res.end();

// })
// app.get('/', (req, res) => {

//   const str = 'Zażółć gęslą jaźń'
//   const ar = str.split(' ')
//   res.send(ar); //robi to samo co wyżej, z tym ze dodaje kilka rzeczy: uzywa domyslnej czcionki html, nadaje kodowanie utf-8 i podaje długość zawartości
// })
// app.get('/world', (req, res) => {
//   res.send({
//     text: 'hello world',
//     isGood: true
//   });
// })
// express dba za nas by odpowiednio konwertować obiekty i tablice do formatu json, metoda send wyręcza nas na wielu płaszczyznach i najczesciej wykorzystujemy ją do tego typu rzeczy
// jednak do przesyłania json wykorzystuje się res.json()

// PRZEKIEROWANIE

// app.get('/', (req, res) => {
//   // res.location('/another/path') //teraz dostajemy w nagłówku kod odpowiedzi 200, który nie jest taki jak potrzebujemy a potrzeba nam <300

//   // res.sendStatus(302) // możemy użyć zamiast res.end i podać tu status jaki nas interesuje, co da nam oczekiwane przekierowanie

//   // res.end() //przy res.location pamietać musimy o zakończeniu połączenia, ponieważ nie ma tego wbudowane jak w res.send np
//   // --------
//   // TUTAJ PRZYCHODZI Z POMOCA EXPRESS
//   // Express daje nam metode res.redirect(), która daje nam w jednej komendzie kilka rzeczy:
//   // 1.Używanie specjalnych ścieżek - względnych i cofających
//   // 2.Ustawia odpowiedni kod odpowiedzi HTTP i pozwala go zmienić
//   // 3. Tworzy prosty szablon HTML do przekierowania jeżeli standardowe kody zawiodą
//   res.redirect('https://google.com')
// })

// app.get('/', (req, res) => {
//   res.send('<a href="/go_back">Cofnij</a>')
// });

// app.get('/go_back', (req, res) => {
//   // res.redirect('..');
//   res.redirect('back'); //odczytuje z jakiej ściezki przyszliśmy i do niej nas cofa, domyślnie cofa nas na strone główną
// })

// ----------------
// PRZESYŁANIE PLIKU

// app.get("/", (req, res) => {
//   const fileName = "index.html";
//   res.sendFile(fileName, {
//     root: path.join(__dirname, "static")
//   });
// });

// app.get("/logo", (req, res) => {
//   // const fileName = path.join(__dirname, "static/image.png");
//   // uzywająć zaimportowanego path(path pozwala nam pobrac scieżkę główną i wygodnie utworzyć kolejną poprzez dopisanie do niej)
//   const fileName = "image.png";
//   res.sendFile(fileName, {
//     root: path.join(__dirname, "static") //kolejna opcja express, któa ustawia naszą domową/główną ścieżkę i nie pozwala wychodzić wyżej, dzięki temu zapobiegamy odczytu plików aplikacji lub waznych danych, powinno się znaleźć w każdekj aplikacji
//   });
// });

// app.get("/logo", (req, res) => {
//   const fileName = "image.png";
//   res.attachment(fileName, {
//     root: path.join(__dirname, "static")
//     //res.attachment wymusza na przeglądarce pobieranie pliku
//   });
//   res.end(); //uzycie attachment wymaga rownież użycia res.end, by zakończyć działanie
// });

// kolejną opcją jest res.download - jest to połaczenie res.sendFile i res.attachment, czyli wywołuje pobieranie ale pozwala dopisać opcje z sendFile,np( lastModified,headers,dotfiles-allow/deny/ignore(domyślnie), i inne)

// app.get("/logo", (req, res) => {
//   const fileName = path.join(__dirname, "static/image.png");
//   res.download(fileName, "Jakis moj plik.png", {
//     // musimy pamiętać, że root tu nie działa, również nie podajemy res.end
//   });
// });
// -----------------
// NAGŁÓWKI

// app.get("/", (req, res) => {
//   res.send("Strona główna");
// });

// app.get("/hi/:name", (req, res) => {
//   const { name } = req.params;

//   // const newDate = new Date();
//   // newDate.setDate(newDate.getDate() + 7);
//   // // ustawienie by sesja ciastka trwała 7 dni nawet po wyłączeniu przeglądarki
//   res.cookie("visitor_name", name, {
//     // expires: newDate,
//     maxAge: 5 * 60 * 1000 //inna opcja która wymaga podania tylko ilości czasu jaki ma być w pamieci przeglądarki
//   });
//   res.send("Imię zapisano");
// });
// app.get("/logout", (req, res) => {
//   res.clearCookie("visitor_name");
//   //czyszczenie ciastek z przeglądarki
//   res.redirect("/"); //przekierowanie
// });

// ------------------------
// MIDDLEWARE

// middleware zawsze dajemy przed ścieżkami
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Strona główna");
// });
// app.post("/hello", (req, res) => {
//   console.log(req.body);
//   const { name, surname } = req.body;

//   res.send(`Witaj ${name} ${surname}`);
// });


// ---------------------
// MIDDLEWARE plików statycznych

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

//express.static rozwiązuje za nas dodawanie plików statycznych, gdzie poprzednio wymagało od nas napisanie kilku linijek kodu(poniżej), natomiast teraz rozwiązuje to za nas :
// app.use(express.static(path.join(__dirname, 'static')))
// gdzie podajemy ściezkę dla naszego folderu z plikami statycznymi



// app.get('/', (req, res) => {
//   const fileName = 'index.html';
//   res.sendFile(filename, {
//     root: path.join(__dirname, 'static')
//   })
// })