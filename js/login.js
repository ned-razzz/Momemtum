const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS_TOKEN = "hidden";
const USERNAME_KEY = "username";


function paintGreetings(greetingText) {
	greeting.innerText = "Hello " + greetingText;
	greeting.classList.remove(HIDDEN_CLASS_TOKEN);
}

function onLoginSubmit(event) {
	event.preventDefault();
	const typedUsername = loginInput.value;
	localStorage.setItem(USERNAME_KEY, typedUsername);
	loginForm.classList.add(HIDDEN_CLASS_TOKEN);
	paintGreetings(typedUsername);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit", onLoginSubmit);	
} else {
	paintGreetings(savedUsername);
}	