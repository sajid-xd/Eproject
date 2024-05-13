function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
      document.getElementById("img1").src = product[a].image;
      document.getElementById("price1").innerHTML = "PKR " + product[a].price;
      document.getElementById("desc1").innerHTML = product[a].description;
      document.getElementById("brand1").innerHTML = product[a].brand;
  } else {
      document.getElementById("select1").selectedIndex = 0;
      document.getElementById("img1").src = product[0].image;
      document.getElementById("price1").innerHTML = "";
      document.getElementById("desc1").innerHTML = "";
      document.getElementById("brand1").innerHTML = "";
  }
}

function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
      document.getElementById("img2").src = product[a].image;
      document.getElementById("price2").innerHTML = "PKR " + product[a].price;
      document.getElementById("desc2").innerHTML = product[a].description;
      document.getElementById("brand2").innerHTML = product[a].brand;
  } else {
      document.getElementById("select2").selectedIndex = 0;
      document.getElementById("img2").src = product[0].image;
      document.getElementById("price2").innerHTML = "";
      document.getElementById("desc2").innerHTML = "";
      document.getElementById("brand2").innerHTML = "";
  }
}

var categorySelect = document.getElementById("categoryIdSelect");
cat.forEach(function(category) {
  var option = document.createElement("option");
  option.value = category.id;
  option.text = category.name;
  categorySelect.appendChild(option);
});

function loadProducts() {
  var categoryId = parseInt(document.getElementById("categoryIdSelect").value);
  var productsInCategory = product.filter(p => p.cat_id === categoryId);

  document.getElementById("select1").innerHTML = "<option value='0'>-- Select Here --</option>";
  document.getElementById("select2").innerHTML = "<option value='0'>-- Select Here --</option>";

  if (categoryId === 1 || categoryId === 2 || categoryId === 3 || categoryId === 4) {
      if (productsInCategory.length >= 4) {
          displayProductSelection(productsInCategory);
      } else {
          alert("Please select a category with at least two products.");
      }
  }
}

function displayProductSelection(products) {
  for (var i = 0; i < Math.min(products.length); i++) {
      document.getElementById("select1").innerHTML += `<option value="${products[i].id}">${products[i].title}</option>`;
      document.getElementById("select2").innerHTML += `<option value="${products[i].id}">${products[i].title}</option>`;
  }
}