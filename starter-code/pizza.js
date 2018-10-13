// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

    // faire apparaitre et dispraitre les ingrédients et les prix
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $("li:contains(green peppers)").toggle();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $("li:contains(mushrooms)").toggle();
  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("li:contains(pepperonni)").toggle();
  });


  // paramétrage initial de crust et sauce
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $("li:contains(gluten-free crust)").toggle();
  
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $("li:contains(white sauce)").toggle();

  $('.price > strong').text('$' + calculatePrice());

  // modifier crust et sauce au clic sur les boutons

  $(".btn-crust").click(function() {
      $(".btn-crust").toggleClass("active");
      $(".crust").toggleClass("crust-gluten-free");
      $("li:contains(gluten-free crust)").toggle();
    });

  $(".btn-sauce").click(function() {
      $(".btn-sauce").toggleClass("active");
      $(".sauce").toggleClass("sauce-white");
      $("li:contains(white sauce)").toggle();
    });

    if( $(".btn-green-pepper").hasClass("active")) {
    }
    else {
      
    }
// update prices
function calculatePrice (){
    var p=10;
    if($(".btn-green-peppers").hasClass('active')){
        p+=1;
    };
    if($(".btn-pepperonni").hasClass('active')){
        p+=1;
    };
    if($(".btn-mushrooms").hasClass('active')){
        p+=1;
    };
    if($(".btn-sauce").hasClass('active')){
        p+=3;
    };
    if($(".btn-crust").hasClass('active')){
        p+=5;
    };

    return p;
}

$("button").click(function() {
    $('.price > strong').text('$' + calculatePrice());
} );

});
