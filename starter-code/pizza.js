// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {

  function handleBtn(btnClass, ingredient) {
    $(btnClass).click(function(){
      $(ingredient).toggle();
      $(this).toggleClass("active");
    });
  };

  function base(btnClass, ingredient, bases) {
    $(btnClass).click(function(){
      $(ingredient).toggleClass(bases);
      $(this).toggleClass("active");
    });
  };
  handleBtn('.btn-pepperonni', '.pep');
  handleBtn('.btn-green-peppers', '.green-pepper');
  handleBtn('.btn-mushrooms', '.mushroom');
  base('.btn-sauce', '.sauce', 'sauce-white');
  base('.btn-crust', '.crust', 'crust-gluten-free');
});




