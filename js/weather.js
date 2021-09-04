window.onload = function () {
	navigator.geolocation.getCurrentPosition(onNaviSuccess, onGeoError);
};

const API_KEY = "4c8ad30f2364d1fa08d48a863ac16632";

function onNaviSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	//console.log("You live in", lat, lon);

	getGeoData(lat, lon)
		.then((geoData) => {
			const city = geoData.name;
			const weather = geoData.weather[0].main;
			const weatherIcon = geoData.weather[0].icon;
			const cityHTML = document.querySelector(".loc-info__city");
			const weatherHTML = document.querySelector(".loc-info__weather");
			cityHTML.innerText = city;
			// weatherHTML.innerText = weather;
			weatherHTML.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}.png)`;
		});
}

async function getGeoData(lat, lon) {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	let response = await fetch(url);
	let data = await response.json();

	return await data;
}

function onGeoError() {
	alert("Cant't find you. No weather for you.");
}
