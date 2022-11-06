const images=["EdvinRyding.jpg","EdvinRyding1.jpg","EdvinRyding2.jpg","EdvinRyding3.jpg"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");

bgImages.src = `../img/${chosenImages}`;

// console.log(bgImages);

document.body.appendChild(bgImages);


