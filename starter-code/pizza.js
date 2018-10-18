// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').click(function(){
  $(".pep").toggle()
  toggleList(0)
  //updatePriceCheap()
 })
 
 $('.btn-mushrooms').click(function(){
   $(".mushroom").toggle()
   toggleList(1)

  })
 
  $('.btn-green-peppers').click(function(){
   $(".green-pepper").toggle()
   toggleList(2) 
  })
 
  //sauce elements
  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce").removeClass("active")
  
  $('.btn-sauce').click(function(){
   $(".sauce").toggleClass("sauce-white")
   toggleList(3)
  })
 
  //crust elements
  $(".crust").removeClass("crust-gluten-free")
  $(".btn-crust").removeClass("active")
  
  $('.btn-crust').click(function(){
   $(".crust").toggleClass("crust-gluten-free")
   toggleList(4)
  })
 
  $(".btn").click((e) => {
    $(e.target).toggleClass("active");
    console.log(e.target)
  });
 
  
  function toggleList (a) {
    $('.price li').eq(a).toggle()
  }

//$('strong').text("$10")

var totalPrice = 10
totalPrice = () => {
   if ($("button.btn-green-peppers, button.btn-mushrooms, button.btn-pepperonni").hasClass("active")) {
  totalPrice++
}
}
  // function updatePrice() {
  // var totalPrice = 21
  //   if ($("button.btn-green-peppers, button.btn-mushrooms, button.btn-pepperonni").hasClass("active") === false ) {
  //     totalPrice-- 
  //   // } else {
  //   //   totalPrice--
  //   // }
  //   $('strong').text(totalPrice)
  //   }
  //   return totalPrice
  // }
  $('strong').text(totalPrice)

 