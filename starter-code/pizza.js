// Write your Pizza Builder JavaScript in this file.

// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {

resultPrice = 21;

  function handleBtn(btnClass, ingredient, value) {
   $(btnClass).click(function(){
     $(ingredient).toggle();

     $(this).toggleClass("active");
     if ($(this).hasClass("active")) {
       resultPrice = resultPrice + value;
       modificar(".price strong");
      }else{
        return resultPrice = resultPrice - value;
        }
   });
 };

 function base(btnClass, ingredient, base, value) {
   $(btnClass).click(function(){
     $(ingredient).toggleClass(base);
     $(this).toggleClass("active");

      if ($(this).hasClass("active")) {
      resultPrice = value + resultPrice;
      modificar(".price strong");
      }else{
       return resultPrice = value - resultPrice;
      }
    
   });
 };

  function modificar(btnClass){
    $(btnClass).click(function(){
    $(".price strong").text("$" + resultPrice);
  });
};



 handleBtn('.btn-pepperonni', '.pep', 1);
 handleBtn('.btn-green-peppers', '.green-pepper', 2);
 handleBtn('.btn-mushrooms', '.mushroom', 3);
 base('.btn-sauce', '.sauce', 'sauce-white', 4);
 base('.btn-crust', '.crust', 'crust-gluten-free', 5);
});