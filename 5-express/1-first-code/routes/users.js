function usersRoutes(app) {

  app.get("/", (req, res) => {
    const {
      visitor_name
    } = req.cookies

    if (visitor_name) {
      res.send(`Witaj ${visitor_name}`)
    } else {
      res.send('Czy my się znamy?')
    }
    // powyżej pobieramy podaną nazwę użytkownika i wykorzystujemy ją, we wszystkim pomaga nam express i wykonuje za nas duż część pracy, pobiera dane, zapisuje w cookies, odczytuje je i wylogowuje nas

    res.send("Strona główna");
  });

  app.get("/hi/:name", (req, res) => {
    const {
      name
    } = req.params;
    res.cookie("visitor_name", name, {
      // expires: newDate,
      maxAge: 5 * 60 * 1000
    });
    res.send("Imię zapisano");
  });
  app.get("/logout", (req, res) => {
    res.clearCookie("visitor_name");
    //czyszczenie ciastek z przeglądarki
    res.redirect("/"); //przekierowanie
  });
}

module.exports = usersRoutes;