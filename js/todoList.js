const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")



const TODO_DB_KEY = "todoDB";

const todoDB = loadTodoDB();
todoDB.forEach(addTodo);

function loadTodoDB() {
	const savedTodos = localStorage.getItem(TODO_DB_KEY);
	return JSON.parse(savedTodos) || [];
}

function saveTodoDB() {
	localStorage.setItem(TODO_DB_KEY, JSON.stringify(todoDB));
}



function deleteTodo(event) {
	const targetTodo = event.target.parentElement;
	
	const idx = todoDB.findIndex(todo => todo.id === parseInt(targetTodo.id));
	todoDB.splice(idx, 1);
	saveTodoDB();

	targetTodo.remove();
}

function addTodo(newTodo) {
	const todoItem = document.createElement("li");
	todoItem.id = newTodo.id;

	const todoDesc = document.createElement("span");
	todoDesc.innerText = newTodo.text;

	const delButton = document.createElement("button");
	delButton.innerText = "X";
	delButton.addEventListener("click", deleteTodo);

	todoItem.appendChild(todoDesc);
	todoItem.appendChild(delButton);
	todoList.appendChild(todoItem);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	
	const submitedTodo = {
		text: todoInput.value,
		id: Date.now(),
	};
	todoInput.value = "";

	if (submitedTodo.text !== "") {
		addTodo(submitedTodo);
		todoDB.push(submitedTodo);
		saveTodoDB();
	}
}

todoForm.addEventListener("submit", handleToDoSubmit);



