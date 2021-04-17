require("normalize.css/normalize.css");
require("../css/main.css");
require("./product.css");

let image = document.getElementById("presentedImage");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

image1.addEventListener("click", function () {
  image.src = require("../images/product1.jpg");
});
image2.addEventListener("click", function () {
  image.src = require("../images/product2.jpg");
});
image3.addEventListener("click", function () {
  image.src = require("../images/product3.jpg");
});
image4.addEventListener("click", function () {
  image.src = require("../images/product4.jpg");
});

let readMore = document.getElementById("readMore");
readMore.addEventListener("click", function () {
  let read = document.getElementById("showit");

  if ((read.style.display = "none")) {
    read.style.display = "inline";
  }
});

const minus = document.getElementById("minusItem");
const plus = document.getElementById("plusItem");

minus.addEventListener("click", function () {
  let number = document.getElementById("quantityBox").value;
  if (number != 1) {
    number--;
    document.getElementById("quantityBox").value = number;
  }
});

plus.addEventListener("click", function () {
  let number = document.getElementById("quantityBox").value;
  number++;
  document.getElementById("quantityBox").value = number;
});

const buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click", function () {
  let shopsmallIcon = Number(
    document.getElementById("badgeSmallShoppingBag").innerHTML
  );
  let shop = Number(document.getElementById("badgeShoppingBag").innerHTML);
  let number = Number(document.getElementById("quantityBox").value);
  let total = shop + number;
  document.getElementById("badgeShoppingBag").innerHTML = total;
  document.getElementById("badgeSmallShoppingBag").innerHTML = total;
});

let imageButton1 = document.getElementById("imageButton1");
let imageButton2 = document.getElementById("imageButton2");
let imageButton3 = document.getElementById("imageButton3");
let imageButton4 = document.getElementById("imageButton4");
imageButton1.addEventListener("click", function () {
  image.src = require("../images/product1.jpg");
});
imageButton2.addEventListener("click", function () {
  image.src = require("../images/product2.jpg");
});
imageButton3.addEventListener("click", function () {
  image.src = require("../images/product3.jpg");
});
imageButton4.addEventListener("click", function () {
  image.src = require("../images/product4.jpg");
});
