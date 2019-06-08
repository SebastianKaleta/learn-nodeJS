const users = [{
    id: 1,
    name: "Adam"
  },
  {
    id: 2,
    name: "Marysia"
  },
  {
    id: 3,
    name: "Jagienka"
  },
  {
    id: 4,
    name: "Mieszko"
  },
];

module.exports = {
  showUsers() {
    const names = users.map(user => user.name);
    console.log('\nNasi użytkownicy to:');
    names.forEach(name => console.log(name))
  },
  showUserObj(id) {
    console.log("szukany użytkownik to: ");
    const user = users.find(user => user.id === id)
    console.log(user)
  },
  userListLength: users.length
}