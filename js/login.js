const userInfo = document.querySelector(".user-info");
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form__input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS_TOKEN = "hidden";
const USERNAME_KEY = "username";


function paintGreetings(greetingText) {
	greeting.classList.remove(HIDDEN_CLASS_TOKEN);
	greeting.innerText = "Hello " + greetingText;
}

function onLoginSubmit(event) {
	event.preventDefault();
	const typedUsername = loginInput.value;
	localStorage.setItem(USERNAME_KEY, typedUsername);
	loginForm.classList.add(HIDDEN_CLASS_TOKEN);
	paintGreetings(typedUsername);
	loginSectionAnimate();

}

function loginSectionAnimate() {
	let size = parseInt(userInfo.clientHeight, 10);
	let animate = setInterval(() => {
		if (size <= 200) {
			clearInterval(animate);
		}
		else {
			size -= 5;
			userInfo.style.height = `${size}px`;
		}
	}, 10);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
	loginSectionAnimate();
}