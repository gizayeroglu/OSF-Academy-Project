require("normalize.css/normalize.css");
require("../css/main.css");
require("./product.css");

/*changing images and opacity*/
let image = document.getElementById("presentedImage");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
if ((image.src = require("../images/product1.jpg"))) {
  image2.style.opacity = "0.5";
  image1.style.opacity = "1";
  image1.style.border = "3px solid #85bc23";
  image3.style.opacity = "0.5";
  image4.style.opacity = "0.5";
}
image1.addEventListener("click", function () {
  image.src = require("../images/product1.jpg");
  image2.style.opacity = "0.5";
  image1.style.opacity = "1";
  image1.style.border = "3px solid #85bc23";
  image2.style.border = "3px solid black";
  image3.style.border = "3px solid black";
  image4.style.border = "3px solid black";
  image3.style.opacity = "0.5";
  image4.style.opacity = "0.5";
});
image2.addEventListener("click", function () {
  image.src = require("../images/product2.jpg");
  image1.style.opacity = "0.5";
  image3.style.opacity = "0.5";
  image4.style.opacity = "0.5";
  image2.style.opacity = "1";
  image2.style.border = "3px solid #85bc23";
  image3.style.border = "3px solid black";
  image1.style.border = "3px solid black";
  image4.style.border = "3px solid black";
});
image3.addEventListener("click", function () {
  image.src = require("../images/product3.jpg");
  image1.style.opacity = "0.5";
  image3.style.opacity = "1";
  image3.style.border = "3px solid #85bc23";
  image2.style.border = "3px solid black";
  image1.style.border = "3px solid black";
  image4.style.border = "3px solid black";
  image4.style.opacity = "0.5";
  image2.style.opacity = "0.5";
});
image4.addEventListener("click", function () {
  image.src = require("../images/product4.jpg");
  image1.style.opacity = "0.5";
  image3.style.opacity = "0.5";
  image4.style.opacity = "1";
  image4.style.border = "3px solid #85bc23";
  image2.style.border = "3px solid black";
  image1.style.border = "3px solid black";
  image3.style.border = "3px solid black";
  image2.style.opacity = "0.5";
});
/*product details read more functionality */
let readMore = document.getElementById("readMore");
readMore.addEventListener("click", function () {
  let read = document.getElementById("showit");

  if (read.style.display == "none" || !read.style.display) {
    read.style.display = "inline";
    readMore.innerHTML = "Read less";
  } else {
    read.style.display = "none";
    readMore.innerHTML = "Read more";
  }
});

const minus = document.getElementById("minusItem");
const plus = document.getElementById("plusItem");
/* quantity minus plus button */
minus.addEventListener("click", function () {
  let number = document.getElementById("quantityBox").value;
  if (number != 1) {
    number--;
    document.getElementById("quantityBox").value = number;
  }
});
/* quantity box plus button */
plus.addEventListener("click", function () {
  let number = document.getElementById("quantityBox").value;
  number++;
  document.getElementById("quantityBox").value = number;
});
/*adding elements to shopping bag */
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

/*Image zoom */
const zoom = document.getElementById("zoomPhoto");
zoom.addEventListener("click", function () {
  let Showimage = document.getElementById("presentedImage");
  const imageHidden = document.getElementById("thisisFullImage");
  imageHidden.src = Showimage.src;
});
/*printing */
const print = document.getElementById("printIcon");
print.addEventListener("click", function () {
  window.print();
});

document.querySelectorAll(".dropitem").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("gray").innerHTML = item.innerHTML;
    let colorName = item.innerHTML;
    let colorButton = document.getElementById("colorButton");
    if (colorName == "Blue") {
      colorButton.style.backgroundColor = "#4bcffa";
    } else if (colorName == "Black") {
      colorButton.style.backgroundColor = "#1e272e";
    } else {
      colorButton.style.backgroundColor = "#808e9b";
    }
  });
});
