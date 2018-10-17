// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').click(function(){
  $(".pep").toggle()
  toggleList("$1 pepperonni")
  updatePriceCheap()
 })
 
 $('.btn-mushrooms').click(function(){
   $(".mushroom").toggle()
   toggleList("$1 mushrooms")
   updatePriceCheap()
  })
 
  $('.btn-green-peppers').click(function(){
   $(".green-pepper").toggle()
   toggleList("$1 green peppers")
   updatePriceCheap()
   
  })
 
  //sauce elements
  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce").removeClass("active")
  
  $('.btn-sauce').click(function(){
   $(".sauce").toggleClass("sauce-white")
   toggleList("$3 white sauce")
  })
 
  //crust elements
  $(".crust").removeClass("crust-gluten-free")
  $(".btn-crust").removeClass("active")
  
  $('.btn-crust').click(function(){
   $(".crust").toggleClass("crust-gluten-free")
   toggleList("$5 gluten-free crust")
  })
 
  $(".btn").click((e) => {
    $(e.target).toggleClass("active");
    console.log(e.target)
  });
 
  //
  function toggleList (text) {
    console.log("hi")
    $("li:contains("+ text + ")").toggle()
  }

 
  $('strong').text("10")

  function updatePriceCheap() {
  var totalPrice = 10
    if ($("button").hasClass("active")) {
      totalPrice++
    }
    $('strong').text(totalPrice)
    }

 