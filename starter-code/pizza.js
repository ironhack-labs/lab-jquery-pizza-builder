$(document).ready(function(){ 

  $("li:contains('$3 white sauce')").hide()
  $("li:contains('$5 gluten-free crust')").hide()
  // $(".sauce-white").addClass(".sauce")
  
  
  
  
  
  $(".btn-pepperonni").click(function(){
      $(".pep").toggle()
      $(".btn-pepperoni").toggleClass(".active")
  });
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    $(".btn-mushrooms").toggleClass(".active")
  })
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    $(".btn-green-peppers").toggleClass(".active")
  })
  $(".btn-sauce").click(function(){
    $(".sauce").toggle()
    $(".btn-sauce").toggleClass(".active")
    $("li:contains('$3 white sauce')").show()

  })  
  $(".btn-crust").click(function(){
    $(".crust").toggle()
    $(".btn-crust").toggleClass(".active")
    $("li:contains('$5 gluten-free crust')").show()
  })
})