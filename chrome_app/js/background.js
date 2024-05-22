const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = Math.floor(Math.random() * 10);
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

const background = document.querySelector("#background")
background.style.backgroundImage = `url('background/${chosenImage}.jpg')`;
console.log(chosenImage);

