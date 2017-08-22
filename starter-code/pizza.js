// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

// addremove pepperoni
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $("button.btn-pepperonni").toggleClass( "active");
    $("aside.ul.li").toggle();
  });

// addremove greenpepper
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $("button.btn-green-peppers").toggleClass( "active");
    // $("button.btn").toggle();

  });

// addremove mushroom
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $("button.btn-mushrooms").toggleClass( "active");
    // $("button.btn").toggle();
  });

  // $(".btn-sauce").html("regular sauce");
  //
  // $(".btn-crust").html("regular crust");

  // $(".crust crust-gluten-free").removeClass(".crust-gluten-free");

  $(".btn-sauce").click(function(){
  $( "section.sauce" ).toggleClass( "sauce-white" );
  $("button.btn-sauce").toggleClass( "active");
});

  $(".btn-crust").click(function(){
  $( "section.crust" ).toggleClass( "crust-gluten-free");
  $("button.btn-crust").toggleClass( "active");
});

// $(".btn-pepperoni").click(function(){
// $("button.btn"  ).toggleClass( "active");
// });

});
