// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {

    

  let p = $(".price li:contains(pepperonni)");
  let mushrooms = $(".price li:contains(mushrooms)");
  let peppers = $(".price li:contains(peppers)");
  let white = $(".price li:contains(sauce)");
  let gcrust = $(".price li:contains(crust)");



  $(".btn-pepperonni").click(function () {

      $(".pep").toggle();

      p.toggle();

  });



  $(".btn-green-peppers").click(function () {

      $(".green-pepper").toggle();

      peppers.toggle();


  });



  $(".btn-mushrooms").click(function () {

      $(".mushroom").toggle();

      mushrooms.toggle();

  });


  $(".btn-sauce").click(function () {
    white.toggle();
      let crust = $(".sauce").hasClass("sauce-white");

      if (crust) {

          $(".sauce").removeClass("sauce-white");
         
          

      } else{
          $(".sauce").addClass("sauce-white");

      }
      
  });


  $(".btn-crust").click(function () {
    gcrust.toggle();
      let crust = $(".crust").hasClass("crust-gluten-free");

      if (crust) {

          $(".crust").removeClass("crust-gluten-free");
         

      } else{
          $(".crust").addClass("crust-gluten-free");
              }

  });
  function renderPrice(){
  let btnp = $(".btn-pepperonni").hasClass("active");
  let gpepper = $(".btn-green-peppers").hasClass("active");
  let mush = $(".btn-mushrooms").hasClass("active");
  let glutenFree =  $(".btn-crust").hasClass("active");
  let whiteSauce = $('.btn-sauce').hasClass("active");
  let total =10;
      if(btnp){
          total+=1;
      }
      if(gpepper){
          total +=1;
      }
      if(mush){
          total +=1;
      }
      if(glutenFree){
          total +=5;
      }
      if(whiteSauce){
          total +=3;
      }
  $(".price strong").text(`$${total}`);
  }




  $('.btn').click(function () {

      $(this).toggleClass("active");
      renderPrice();
  });




}); //end 