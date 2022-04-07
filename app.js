const clothingContainer = document.querySelector(".clothings");
const shirtBtn = document.querySelector(".shirt");
const pantsBtn = document.querySelector(".pants");
const skirtBtn = document.querySelector(".skirt");
const blueBtn = document.querySelector(".blue");
const pinkBtn = document.querySelector(".pink");
const yellowBtn = document.querySelector(".yellow");
const logo = document.querySelector(".logo");

// fetching data from json
async function fetchData() {
  const res = await fetch("db.json");
  const data = await res.json();
  return data.clothings;
}

// func for displaying clothes
function displayCloths(arr) {
  for (let item of arr) {
    const clothingBox = document.createElement("div");
    clothingBox.classList.add("clothingBox");
    const img = document.createElement("img");
    img.src = item.img;
    const p = document.createElement("p");
    p.textContent = item.title;
    clothingBox.append(img);
    clothingBox.append(p);
    clothingContainer.append(clothingBox);
  }
}

// init
async function init() {
  const clothings = await fetchData();
  displayCloths(clothings);
}

init();

async function filterByType(type) {
  const clothings = await fetchData();
  const newArr = clothings.filter((c) => c.type === type);
  document.querySelector(".clothings").innerHTML = "";
  displayCloths(newArr);
}

// filter func
async function filterByColor(color) {
  const clothings = await fetchData();
  const newArr = clothings.filter((c) => c.color === color);
  document.querySelector(".clothings").innerHTML = "";
  displayCloths(newArr);
}

// click event func

const showClothesByType = (btn, type) => {
  btn.addEventListener("click", () => {
    filterByType(type);
  });
};

const showClothesByColor = (btn, color) => {
  btn.addEventListener("click", () => {
    filterByColor(color);
  });
};

showClothesByType(shirtBtn, "shirt");
showClothesByType(pantsBtn, "pants");
showClothesByType(skirtBtn, "skirt");
showClothesByColor(blueBtn, "blue");
showClothesByColor(pinkBtn, "pink");
showClothesByColor(yellowBtn, "yellow");

// logo click event
logo.addEventListener("click", () => {
  document.querySelector(".clothings").innerHTML = "";
  init();
});
