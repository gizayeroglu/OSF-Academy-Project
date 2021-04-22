require("normalize.css/normalize.css");
require("../css/main.css");
require("./index.css");

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
                          <div class="col-6">
                                <button id="addToChart" onclick="buyNow()"><i class="fas fa-plus"></i></button></div>
                           <div class="col-6"><button id="addToFav" onclick="favNow()"><i class="fas fa-heart"></i></button></div>
                           </div>
                        </div>
                    </div>
              </div>
            </div>`;
    }

    loadMore.innerHTML = productsHtml;
  };

  myRequest.send();
});

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
