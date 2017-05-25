// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  console.log("let's go");

  $('.btn-pepperonni').on("click", function(){
    $(this).toggleClass('active');
    $('.price_pepperoni, .pep').toggle();

    //$('.price_pepperoni','pep').toggle();
    });
  $('.btn-mushrooms').on("click", function(){
    $(this).toggleClass('active');
    $('.price_mushrooms, .mushroom').toggle();
    });
  $('.btn-green-peppers').on("click", function(){
    $(this).toggleClass('active');
    $('.price_green_peppers , .green-pepper').toggle();
    });
  $('.btn-sauce').on("click", function(){
    $(this).toggleClass('active');
    $('.price_whitesauce, .price_redsauce, .sauce-white').toggle();
    });
  $('.btn-crust').on("click", function(){
    $(this).toggleClass('active');
    $('.price_crust_glutenfree, .price_crust, .crust-gluten-free .crust').toggle();
    });
  $('.btn').on("click", function(){
    var prices=document.getElementsByClassName("price");
    var totalPrice=10;
    var myPriceText;
    var myPrice;
    for(i=0; i < prices.length; i++){

      if( prices[i].offsetWidth || prices[i].offsetHeight || prices[i].getClientRects().length ){
        myPriceText=prices[i].innerHTML;
        myPrice =(myPriceText.substring(myPriceText.indexOf("$")+1,myPriceText.indexOf(" ")));
        myPrice=parseInt(myPrice.trim());
        totalPrice+=myPrice;
      }
    }
    totalPrice= "$"+totalPrice;
    $('#totalprice').text(totalPrice);
  });


});
