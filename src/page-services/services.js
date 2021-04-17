require("normalize.css/normalize.css");
require("../css/main.css");
require("./services.css");

const hideFilter = document.getElementById("HideFilterMessage");
hideFilter.addEventListener("click", function () {
  let filtersrow = document.getElementById("hideFilter");
  if ((filtersrow.style.display = "block")) {
    filtersrow.style.display = "none";
  }
});
