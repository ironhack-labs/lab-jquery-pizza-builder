// Write your Pizza Builder JavaScript in this file.


function removeElements(element) {

  $(element).toggle();

}

function changeClass(element, toClass) {

  $(element).toggleClass(toClass);

}

function updatePrice(){
  //TODO:- Clean up!
  var totalPrice = 10;
  totalPrice = $(".btn-pepperonni").hasClass("active") ? totalPrice + 1 : totalPrice;

  totalPrice = $(".btn-mushrooms").hasClass("active") ? totalPrice + 1 : totalPrice;

  totalPrice = $(".btn-green-peppers").hasClass("active") ? totalPrice + 1 : totalPrice;

  totalPrice = $(".btn-sauce").hasClass("active") ? totalPrice + 3 : totalPrice;

  totalPrice = $(".btn-crust").hasClass("active") ? totalPrice + 5 : totalPrice;

  $(".total-price").text("$" + totalPrice);

}

function setupToppingButton(elementName, listName, $buttonName) {

  removeElements(elementName);
  removeElements(listName);
  changeClass($buttonName, "active");
  updatePrice();

}


function setupButtons() {

  updatePrice();

  $(".btn-pepperonni").on("click", function() {

    setupToppingButton(".pep",".list-pepperonni", $(this));

  });

  $(".btn-mushrooms").on("click", function() {

    setupToppingButton(".mushroom",".list-mushrooms", $(this));

  });

  $(".btn-green-peppers").on("click", function() {


    setupToppingButton(".green-pepper",".list-greenPeppers", $(this));


  });

  //TODO:- Clean up!
  $(".btn-sauce").on("click", function() {

    changeClass(".sauce", "sauce-white");
    removeElements(".list-whiteSauce");
    changeClass($(this), "active");
    updatePrice();

  });

  $(".btn-crust").on("click", function() {

    changeClass(".crust", "crust-gluten-free");
    removeElements(".list-glutenFreeCrust");
    changeClass($(this), "active");
    updatePrice();

  });


}



setupButtons();
