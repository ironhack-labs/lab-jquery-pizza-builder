// Write your Pizza Builder JavaScript in this file (after loading content)
$("document").ready(function () {

  // initial status changes (no white sauce or gluten free crust)
  changeStatus($(".btn-crust"));
  changeStatus($(".btn-sauce"));
  calcPrice();

  // clicking a button
  $(".panel.controls .btn").click(function () {
    changeStatus(this);
  });

  //---------------//
  // CHANGE STATUS //
  //---------------//
  
  // input = the button clicked element
  function changeStatus(input) {
    var product = $(input).attr("id"); // e.g: mushroom
    var productClass = "." + product // e.g: .mushroom
    // toggle button active / inactive (this)
    $(input).toggleClass("active");
    // toggle pizza visibility (.product). Crust and sauce are custom
    switch (productClass) {
      case ".sauce": $(productClass).toggleClass("sauce-white"); break;
      case ".crust": $(productClass).toggleClass("crust-gluten-free"); break;
      default: $(productClass).toggleClass("hidden");
    };
    // toggle price (contains product)
    $(".panel.price ul li:contains(" + product + ")").toggleClass("hidden");
    // update price
    calcPrice();
  }
  
  //---------------//
  // CALC PRICE    //
  //---------------//

  // calculate the price of all non-hidden price lines
  function calcPrice() {
    var total = 10; // basic cheese pizza
    var list = $(".panel.price ul li").not(".hidden").toArray();
    list.map(item => {
      total += parseInt(item.innerHTML.substr(1, 3)); // supports 0-999 $ items
    });
    $(".panel.price strong").html("$" + total);
  };

});

