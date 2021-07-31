const randImages = ["Mist Beach.jpg", "Mediterranean.jpg", "Europe.jpg"]

const chosenImage = randImages[getRandInt(0, randImages.length)];

const bgImageElement = document.createElement("img");

bgImageElement.src = `../img/${chosenImage}`;

console.log(bgImageElement);

document.body.appendChild(bgImageElement);