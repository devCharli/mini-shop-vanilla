const clothingContainer = document.querySelector(".clothings");
const shirtBtn = document.querySelector(".shirt");
const pantsBtn = document.querySelector(".pants");
const skirtBtn = document.querySelector(".skirt");
const blueBtn = document.querySelector(".blue");
const pinkBtn = document.querySelector(".pink");
const yellowBtn = document.querySelector(".yellow");
const logo = document.querySelector(".logo");

async function fetchData() {
  const res = await fetch("db.json");
  const data = await res.json();
  return data.clothings;
}

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

async function filterByColor(color) {
  const clothings = await fetchData();
  const newArr = clothings.filter((c) => c.color === color);
  document.querySelector(".clothings").innerHTML = "";
  displayCloths(newArr);
}

shirtBtn.addEventListener("click", () => {
  filterByType("shirt");
});
pantsBtn.addEventListener("click", () => {
  filterByType("pants");
});
skirtBtn.addEventListener("click", () => {
  filterByType("skirt");
});

blueBtn.addEventListener("click", () => {
  filterByColor("blue");
});

pinkBtn.addEventListener("click", () => {
  filterByColor("pink");
});

yellowBtn.addEventListener("click", () => {
  filterByColor("yellow");
});

logo.addEventListener("click", () => {
  document.querySelector(".clothings").innerHTML = "";
  init();
});

// const clothings = [
//   {
//     title: "man, small size",
//     type: "pants",
//     img: "./images/blue_p.png",
//     color: "blue",
//   },
//   {
//     title: "woman, medium size",
//     type: "pants",
//     img: "./images/pink_p.png",
//     color: "pink",
//   },
//   {
//     title: "man, large size",
//     type: "shirt",
//     img: "./images/yellow_t.png",
//     color: "yellow",
//   },

//   {
//     title: "man, large size",
//     type: "shirt",
//     img: "./images/blue_t.png",
//     color: "blue",
//   },

//   {
//     title: "woman, small size",
//     type: "skirt",
//     img: "./images/pink_s.png",
//     color: "pink",
//   },
//   {
//     title: "man, small size",
//     type: "pants",
//     img: "./images/yellow_p.png",
//     color: "yellow",
//   },
//   {
//     title: "woman, small size",
//     type: "skirt",
//     img: "./images/blue_s.png",
//     color: "blue",
//   },
//   {
//     title: "woman, small size",
//     type: "shirt",
//     img: "./images/pink_t.png",
//     color: "pink",
//   },

//   {
//     title: "woman, medium size",
//     type: "skirt",
//     img: "./images/yellow_s.png",
//     color: "yellow",
//   },
// ];
