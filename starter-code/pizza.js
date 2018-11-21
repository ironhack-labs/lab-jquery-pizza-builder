// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  function handleBtn(btnClass, ingredient, value, base) {
    $(btnClass).click(function(){
      if (base) {
        $(ingredient).toggleClass(base);
      } else {
        $(ingredient).toggle();
      }
      $(this).toggleClass("active");
      $('.price ul li:nth-child(' + value + ')').toggle();
      var result = selectPrice(); 
      $('.price strong').text('$' + result);
    });
  };

  function convertNumbers() {
    var elements = $('.price ul li:visible');
    var prices = [];
    for(var i = 0; i < elements.length; i++ ) {
      var price = Number(elements[i].textContent.charAt(1));
      prices.push(price);
    };
    return prices;
  }

  function selectPrice() {
    var primaryValue = 10; 
    var price = convertNumbers().reduce(function(a, b) {
      return a + b;
    }, primaryValue);
    return price;
  }

  handleBtn('.btn-pepperonni', '.pep', 1);
  handleBtn('.btn-green-peppers', '.green-pepper', 2);
  handleBtn('.btn-mushrooms', '.mushroom', 3);
  handleBtn('.btn-sauce', '.sauce', 4, 'sauce-white');
  handleBtn('.btn-crust', '.crust', 5, 'crust-gluten-free');
});
  





