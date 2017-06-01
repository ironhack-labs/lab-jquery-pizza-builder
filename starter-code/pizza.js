// Write your Pizza Builder JavaScript in this file.
//onload 
$(".crust-gluten-free").toggleClass("crust-gluten-free");
$(".sauce-white").removeClass("sauce-white");
$(".price ul li:nth-child(4)").toggle();
$(".price ul li:nth-child(5)").toggle();
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
updateTotalPrice();

//toggle ingredients
$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
});
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
});
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
});

//toggle sauce & crust
$(".btn-sauce").click(function(){
 $(".sauce").toggleClass("sauce-white")
});

$(".btn-crust").click(function(){
 $(".crust").toggleClass("crust-gluten-free")
});

//toggle button state, show items list and calculate total
$(".btn").click(function(){
  $(this).toggleClass("active");
  
  var index= $(".btn").index($(this))+1; 
  $(".price ul li:nth-child("+index+")").toggle();

  updateTotalPrice();
    
});

function updateTotalPrice() {
  var itemsVisible = $(".price ul li:visible");
  var itemText = '';
  var price;
  var totalPrice=10;

  itemsVisible.each(function(index){
    itemText = $(this).text();
    itemText = itemText.substr(1);
    price = parseInt(itemText.split(" ")[0]);
    totalPrice+=price;
    
  });
  
  $(".price strong").text("$"+totalPrice);
}




