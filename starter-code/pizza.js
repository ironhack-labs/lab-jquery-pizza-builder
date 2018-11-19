// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  var prices = document.querySelectorAll('.price ul li');
  var priceOne = 1;
  var priceThree = 3;
  var priceFive = 5;
  prices[0].value = priceOne;
  prices[1].value = priceOne;
  prices[2].value = priceOne;
  prices[3].value = priceThree;
  prices[4].value = priceFive;
  suma = prices[0].value + prices[1].value + prices[2].value + prices[3].value + prices[4].value;

  function handleBtn(btnClass, ingredient, value) {
    $(btnClass).click(function(){
      $(ingredient).toggle();
      $(this).toggleClass("active");
      $('.price ul li:nth-child(' + value + ')').toggle();
    });
  };

  function base(btnClass, ingredient, base, value) {
    $(btnClass).click(function(){
      $(ingredient).toggleClass(base);
      $(this).toggleClass("active");
      $('.price ul li:nth-child(' + value + ')').toggle();
    });
  };

  handleBtn('.btn-pepperonni', '.pep', 1);
  handleBtn('.btn-green-peppers', '.green-pepper', 2);
  handleBtn('.btn-mushrooms', '.mushroom', 3);
  base('.btn-sauce', '.sauce', 'sauce-white', 4);
  base('.btn-crust', '.crust', 'crust-gluten-free', 5);
});
  





