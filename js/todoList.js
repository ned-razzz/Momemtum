const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")

function deleteTodo(event) {
	const targetTodo = event.target.parentElement;
	todoList.removeChild(targetTodo);
}

function addTodo(newTodo) {
	if (newTodo === "") return;

	const todoItem = document.createElement("li");

	const description = document.createElement("span");
	description.innerText = newTodo;

	const deleteButton = document.createElement("button");
	deleteButton.innerText = "X";
	deleteButton.addEventListener("click", deleteTodo);

	todoItem.appendChild(description);
	todoItem.appendChild(deleteButton);
	todoList.appendChild(todoItem);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	
	const submitedTodo = todoInput.value;
	todoInput.value = "";
	addTodo(submitedTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);