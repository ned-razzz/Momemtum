const randImages = ["Mist_Beach.jpg", "Mediterranean.jpg", "Europe.jpg"]

const chosenImage = randImages[getRandInt(0, randImages.length)];

const bgImageElement = document.querySelector(".background");

bgImageElement.style.backgroundImage = `url(../img/${chosenImage})`;

console.log(chosenImage);

document.body.appendChild(bgImageElement);