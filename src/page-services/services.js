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
