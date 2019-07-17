const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true
});


client.connect(err => {
  if (err) {
    console.log('Błąd połączenia!', err);
  } else {
    console.log('Połączenie udane!');

    const db = client.db('test');

    const clients = db.collection('clients');

    // clients.insertOne({
    //   brand: 'Infinity',
    //   model: 'Q50',
    // })
    // clients.deleteOne({
    //   _id: mongo.ObjectID("5d3895f5d354553cb0a216f9")
    // })

    // clients.find({}).toArray((err, clientsList) => {
    //   if (err) {
    //     console.log('Błędne zapytanie!');
    //   } else {
    //     console.log('Klienci:', clientsList);
    //   }
    // });

    clients.updateMany({
      age: {
        $gt: 18,
      },
    }, {
      $set: {
        active: false
      },
    }, err => {
      if (err) {
        consol.log('Błąd podczas aktualizacji!')
      } else {
        console.log('Aktualizacja udana!')
      }
    })

    client.close();
  }
});