const allCategories = document.getElementById("categories");
const allLiItems = allCategories.querySelectorAll("li.item");

console.log("Number of categories:" + allLiItems.length);

allLiItems.forEach((liItem) => {
  const categoryName = liItem.querySelector("h2").textContent;
  const liElements = liItem.querySelectorAll("li");

  console.log("Categorie: " + categoryName);
  console.log("Elements: " + liElements.length);
});
