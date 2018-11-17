// Write your Pizza Builder JavaScript in this file.

// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {

resultPrice = 21;

  function handleBtn(btnClass, ingredient, value) {
   $(btnClass).click(function(){
     $(ingredient).toggle([1000], [2000]);

     $(this).toggleClass("active");
     $(this).fadeOut(1000);
     $(this).fadeIn(1000);
     
     if ($(this).hasClass("active")) {
       resultPrice += value;
      }else{
        resultPrice -= value;
        }
        modificar(".price strong");
   });
 };

 function base(btnClass, ingredient, base, value) {
   $(btnClass).click(function(){
     $(ingredient).toggleClass(base);
     $(this).toggleClass("active");
     $(this).fadeOut(1000);
     $(this).fadeIn(1000);

      if ($(this).hasClass("active")) {
        resultPrice += value
      } else{
        resultPrice -= value;
      }

      modificar(".price strong");
   });
 };

function modificar(btnClass){
  $(".price strong").text("$" + resultPrice);
};



 handleBtn('.btn-pepperonni', '.pep', 1);
 handleBtn('.btn-green-peppers', '.green-pepper', 1);
 handleBtn('.btn-mushrooms', '.mushroom', 1);
 base('.btn-sauce', '.sauce', 'sauce-white', 3);
 base('.btn-crust', '.crust', 'crust-gluten-free', 5);
});