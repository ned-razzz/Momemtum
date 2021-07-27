const clock = document.querySelector("h2#clock");


function getClock() {
	const dateObject = new Date();
	const hours = String(dateObject.getHours()).padStart(2, "0");
	const minutes = String(dateObject.getMinutes()).padStart(2, "0");
	const seconds = String(dateObject.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000, 2000, 3000);
