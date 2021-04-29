require("normalize.css/normalize.css");
require("../css/main.css");
require("./services.css");

/*hide and show filters */
const hideFilter = document.getElementById("HideFilterMessage");
hideFilter.addEventListener("click", function () {
  let filtersrow = document.getElementById("hideFilter");
  if (filtersrow.style.display == "") {
    filtersrow.style.display = "none";
    hideFilter.innerHTML = "Show Filter";
  } else {
    hideFilter.innerHTML = "Hide Filter";
    filtersrow.style.display = "";
  }
});
/* clicable dropdown buttons*/
document.querySelectorAll(".dropitem").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("price").innerHTML = item.innerHTML;
  });
});
document.querySelectorAll(".dropitem2").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("brand").innerHTML = item.innerHTML;
  });
});
document.querySelectorAll(".dropitem3").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("size").innerHTML = item.innerHTML;
  });
});
document.querySelectorAll(".dropitem4").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("list").innerHTML = item.innerHTML;
  });
});
document.querySelectorAll(".dropitem5").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("perpage").innerHTML = item.innerHTML;
  });
});

const button = document.getElementById("loadMoreButton");
button.addEventListener("click", function () {
  const loadMore = document.getElementById("loadMoreRow");
  const myRequest = new XMLHttpRequest();
  myRequest.open("GET", "PopularItems.json");
  myRequest.onload = function () {
    const myData = JSON.parse(myRequest.responseText);
    let productsHtml = "";

    for (const product of myData) {
      productsHtml =
        productsHtml +
        `<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="servicesLandingImgBox">
            <a href="product.html">
              <img src="${product.ImgSource}">
                <p class="ProductName">${product.ProductName}</p>
                <p class="money">${product.Price}</p>
            </a>
          </div>
        </div>`;
    }
    loadMore.innerHTML = productsHtml;
  };
  myRequest.send();
});
