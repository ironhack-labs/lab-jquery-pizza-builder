// Write your Pizza Builder JavaScript in this file.

$(".btn-sauce").toggleClass("active");
$(".btn-crust").toggleClass("active");
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");
$(".panel li:contains('gluten-free crust')").toggle();
$(".panel li:contains('white sauce')").toggle();
setTotalPrice();    

function setTotalPrice(){
  var totalPrice = 10;
  $(".price li:visible").each(function(){
    //console.log($(this).text().substring(1,2));
    totalPrice+=parseInt($(this).text().substring(1,2));
    
    }
  );
  $(".price strong").text(`$${totalPrice}`);
}

  


$(".btn").click(function(){
  $(this).toggleClass("active");
  
  
});   

$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".panel li:contains('pepperonni')").toggle();
  setTotalPrice();
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".panel li:contains('mushrooms')").toggle();
  setTotalPrice();
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".panel li:contains('green peppers')").toggle();
  setTotalPrice();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".panel li:contains('white sauce')").toggle();
  setTotalPrice();
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".panel li:contains('gluten-free crust')").toggle();
  setTotalPrice();
});


