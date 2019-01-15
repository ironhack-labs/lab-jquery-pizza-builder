// Write your Pizza Builder JavaScript in this file.

$( ".btn-green-peppers" ).click(function() {
  $('.green-pepper').toggle();
  $('.tog-green-pepper').toggleClass("visible")
  $('.tog-green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  

  getTotPrice()
  

});

$(".btn-pepperonni").click(function(){
  $('.pep').toggle();
  $('.tog-pepp').toggle();
  $('.tog-pepp').toggleClass("visible")
  
  $('.btn-pepperonni').toggleClass('active');
  getTotPrice()
})

$(".btn-mushrooms").click(function(){
  $('.mushroom').toggle();
  $('.tog-mush').toggle();
  $('.tog-mush').toggleClass("visible");
  $('.btn-mushrooms').toggleClass('active');
  getTotPrice()
})

$(".btn-crust").click(function(){
  $('section:last-child').addClass("crust-gluten-free");
  $(".btn-crust").addClass('active')
  $('.price ul').append('<li class="visible">$5 gluten-free crust</li>')
  getTotPrice()
})

$(".btn-sauce").click(function(){
  $('section:last-child section:last-child').addClass("sauce-white");
  $(".btn-sauce").addClass('active')
  $('.price ul').append('<li class="visible">$3 white sauce</li>')
  getTotPrice()
})


function getTotPrice(){
  var tot = 10 
  $.each( $('.price ul li'), function( index, value ){
    if($(value).hasClass("visible"))tot+= parseInt(value.innerText.slice(1))
});
$('.total-price').text('$'+tot) 
}







