const images=["EdvinRyding.jpg","EdvinRyding1.jpg","EdvinRyding2.jpg","EdvinRyding3.jpg"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.getElementById("target");

bgImages.src = `./img/${chosenImages}`;

console.log(bgImages.src);

