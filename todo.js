let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

console.log(arrayOfTodos[0].userId); // => 14
console.log(arrayOfTodos[1].userId); // => 20

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  let ol = document.getElementById("todo-list");
  // get OL element from HTML page
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    const li = document.createElement("li");
    const title = document.createTextNode(todo.title);
    li.appendChild(title);
    ol.appendChild(li);

    console.log(arrayOfTodos[index]);
  }
  // loop thru arrayOfTodos
  // individual todo item in arrayOfTodos array
  //create LI element
  //create text using the title of each obj in the array
  // append text to LI element
  // append LI element to  OL element
};

let storedFilter = [];

const filterTodo = () => {
  let ol = document.getElementById("todo-list");
  ol.innerHTML = "";
  storedFilter = []
  let userId = document.getElementById("userId").value;
  let filterArray = arrayOfTodos.filter((todo) => todo.userId == userId);

  for (let index = 0; index < filterArray.length; index++) {
    const todo = filterArray[index];
    const li = document.createElement("li");
    const title = document.createTextNode(todo.title);
    li.appendChild(title);
    ol.appendChild(li);
    storedFilter.push(todo);
    console.log(filterArray[index]);
  }
};

const completedTodo = () => {
  let ol = document.getElementById("todo-list");
  ol.innerHTML = "";
  for (let index = 0; index < storedFilter.length; index++) {
    const todo = storedFilter[index];
    if (todo.completed == true) {
      const li = document.createElement("li");
      const title = document.createTextNode(todo.title);
      li.appendChild(title);
      ol.appendChild(li);
    }
  }
};

const pendingTodo = () => {
  let ol = document.getElementById("todo-list");
  ol.innerHTML = "";
  for (let index = 0; index < storedFilter.length; index++) {
    const todo = storedFilter[index];
    if (todo.completed == false) {
      const li = document.createElement("li");
      const title = document.createTextNode(todo.title);
      li.appendChild(title);
      ol.appendChild(li);
    }
  }
};