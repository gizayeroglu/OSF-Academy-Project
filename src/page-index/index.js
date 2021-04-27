require("normalize.css/normalize.css");
require("../css/main.css");
require("./index.css");

/* getting 4 more elements with xmlhttp request*/
const button = document.getElementById("loadMore");
button.addEventListener("click", function () {
  const loadMore = document.getElementById("loadmorerow");

  const myRequest = new XMLHttpRequest();
  myRequest.open("GET", "PopularItems.json");
  myRequest.onload = function () {
    const myData = JSON.parse(myRequest.responseText);
    let productsHtml = "";

    for (const product of myData) {
      productsHtml =
        productsHtml +
        `<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="popitem hoverOverlay">
            <img src="${product.ImgSource}">
            <p class="PopItemName">${product.ProductName}</p>
            <p class="PopItemsPrice">${product.Price}</p>
              <div class="middle">
                  <div class="container">
                      <div class="row">
                        <div class="col-6"><button class="addToChart"><i class="fas fa-plus"></i></button></div>
                        <div class="col-6"><button class="addToFav"><i class="fas fa-heart"></i></button> </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>`;
    }
    loadMore.innerHTML = productsHtml;

    document.querySelectorAll(".addToFav").forEach((item) => {
      item.addEventListener("click", onAddToFav);
    });
    document.querySelectorAll(".addToChart").forEach((item) => {
      item.addEventListener("click", onAddToChart);
    });
  };
  myRequest.send();
});

/*local storage-cookie banner*/
const storageType = localStorage;
const consentPropertyName = "osf-concent";
let showPopup = document.querySelector(".cookieContiner");
let okeycookie = document.querySelector(".acceptCookie");
let closecookie = document.querySelector(".closeCookie");
const shouldShowPopUp = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

setTimeout(function () {
  if (shouldShowPopUp()) {
    if ((showPopup.style.display = "none")) {
      showPopup.style.display = "block";
    }
  }
  okeycookie.addEventListener("click", function () {
    saveToStorage();
    showPopup.style.display = "none";
  });

  closecookie.addEventListener("click", function () {
    showPopup.style.display = "none";
  });
}, 10000);

/*Add to fav*/
function onAddToFav() {
  if (typeof Storage !== "undefined") {
    if (localStorage.favourite) {
      localStorage.favourite = Number(localStorage.favourite) + 1;
    } else {
      localStorage.favourite = 1;
    }
    document.getElementById("badgeHeart").innerHTML = localStorage.favourite;
    document.getElementById("badgeSmallHeart").innerHTML =
      localStorage.favourite;
  }
}
function onAddToChart() {
  if (typeof Storage !== "undefined") {
    if (localStorage.shoppingBag) {
      localStorage.shoppingBag = Number(localStorage.shoppingBag) + 1;
    } else {
      localStorage.shoppingBag = 1;
    }
    document.getElementById("badgeSmallShoppingBag").innerHTML =
      localStorage.shoppingBag;
    document.getElementById("badgeShoppingBag").innerHTML =
      localStorage.shoppingBag;
  }
}
/*Add to fav*/
document.querySelectorAll(".addToFav").forEach((item) => {
  item.addEventListener("click", onAddToFav);
});
/*Add to chart*/
document.querySelectorAll(".addToChart").forEach((item) => {
  item.addEventListener("click", onAddToChart);
});
