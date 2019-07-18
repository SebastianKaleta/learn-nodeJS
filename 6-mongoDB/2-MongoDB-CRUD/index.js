const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true
});


function addNewTodo(todosCollection, title) {

  todosCollection.insertOne({
    title,
    done: false,
  }, err => {
    if (err) {
      console.log('Błąd podczas dodawania', err);
    } else {
      console.log('Dodawanie udane.')
    }

    client.close();
  });

}

function showAllTodos(todosCollection) {
  todosCollection.find({}).toArray((err, todos) => {
    if (err) {
      console.log('Błąd podczas pobierania', err);
    } else {
      const todosToDo = todos.filter(todo => !todo.done);
      const todosDone = todos.filter(todo => todo.done);

      console.log(`# Lista zadań do zrobienia (niezakończone):${todosToDo.length}`)
      for (const todo of todosToDo) {
        console.log(`- [${todo._id}] ${todo.title} `)
      }
      console.log(`# Lista zadań zrobionych (zakończone):${todosDone.length}`)

      for (const todo of todosDone) {
        console.log(`- [${todo._id}] ${todo.done}`)
      }
    }
    client.close();
  });
}


function markTaskAsDone(todosCollection, id) {
  todosCollection.updateOne({
    _id: mongo.ObjectID(id),
  }, {
    $set: {
      done: true,
    },
  }, err => {
    if (err) {
      console.log('Błąd podczas ustawiania zakończenia', err);
    } else {
      console.log('Zadanie oznaczone jako zakończone.')
    }

    client.close();
  });
}

function doTheToDo(todosCollection) {

  const [command, ...args] = process.argv.splice(2);

  switch (command) {
    case 'add':
      addNewTodo(todosCollection, args[0]);
      break;
    case 'list':
      showAllTodos(todosCollection);
      break;
    case 'done':
      markTaskAsDone(todosCollection, args[0]);
      break;
  }

};

client.connect(err => {
  if (err) {
    console.log('Błąd połączenia!', err);
  } else {
    console.log('Połączenie udane!');

    const db = client.db('test');

    const todosCollection = db.collection('todos');

    doTheToDo(todosCollection);

  }
});