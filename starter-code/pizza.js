
$(document).ready(function() {
  
  // Initialize defaults
  var price = 13;
  $(".crust").removeClass("crust-gluten-free")
  $(".sauce").removeClass("sauce-white")
  $(".btn-crust").removeClass("active")
  $(".btn-sauce").removeClass("active")
  $("#whi").addClass("hide")
  $("#glu").addClass("hide")
  updatePrice(0)
  
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass('active')
    $("#gre").toggleClass("hide")
    if($(this).hasClass('active'))
      updatePrice(1)
    else
      updatePrice(-1)
  })
  
  $(".btn-mushrooms").click(function(){
    $(".cap").toggle();
    $(".stem").toggle();
    $(".btn-mushrooms").toggleClass('active')
    $("#mus").toggleClass("hide")
    if($(this).hasClass('active'))
      updatePrice(1)
    else
      updatePrice(-1)
  })
  
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass('active')
    $("#pep").toggleClass("hide")
    if($(this).hasClass('active'))
      updatePrice(1)
    else
     updatePrice(-1)
  })
  
  $(".btn-sauce").click(function(){
    $('.sauce').toggleClass('sauce-white')
    $(".btn-sauce").toggleClass('active')
    $("#whi").toggleClass("hide")
    if($(this).hasClass('active'))
      updatePrice(3)
    else
      updatePrice(-3)
  })
  
  $(".btn-crust").click(function(){
    $('.crust').toggleClass('crust-gluten-free')
    $(".btn-crust").toggleClass('active')
    $("#glu").toggleClass("hide")
    if($(this).hasClass('active'))
      updatePrice(5)
    else
      updatePrice(-5)
  })

  function updatePrice(n) {
    price += n
    var pricestr = "$" + price;
    $("#price").text(pricestr)
  }

});


