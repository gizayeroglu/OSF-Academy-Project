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
