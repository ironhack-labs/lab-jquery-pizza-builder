// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

  //Getting the prices for products
  let pepePrice = parseInt($(".price li")[0].innerHTML.slice(1,3),10);//Pepperoni
  let mushPrice = parseInt($(".price li")[1].innerHTML.slice(1,3),10);//Mushroom
  let greePrice = parseInt($(".price li")[2].innerHTML.slice(1,3),10);//Green Pepper
  let whitPrice = parseInt($(".price li")[3].innerHTML.slice(1,3),10);//White Sauce
  let glutPrice = parseInt($(".price li")[4].innerHTML.slice(1,3),10);//Gluten Free Crost
  let defuPrice = parseInt($(".price b")[0].innerHTML.slice(1,3),10);//Default Price
  let totalPrice = defuPrice + pepePrice + mushPrice + greePrice;//Defines Total Price

  //Declaring variables for price updatings. It goes to each topping button
  let pepperoni = true;
  let mushroom = true;
  let greenPepers = true;
  let whiteSauce = false;
  let glutenFreeCrust = false;

  //Making the button pepperoni toggle the classes
  $('.btn-pepperonni').click(function(){
    $('.pep').toggle('.pep');//remove/add pepperoni
    $('.btn-pepperonni').toggleClass('active');//toggle button status
    $('.price li:contains(pepperonni)').toggle('.price li:contains(pepperonni)');//toggling show/hide price

    //Updating price
    if(pepperoni){//pepperoni is true (pizza has pepperoni on it)
      pepperoni = false;//set pepperoni to false (the click removes it form the pizza)
      totalPrice -= pepePrice;//subtracting the pepperoni price from total
      $('.price strong')[0].innerHTML = "$" + totalPrice;//show the new total
    }else{//pepperoni is false
      pepperoni = true;//set it to true
      totalPrice += pepePrice;//add it's price to total
      $('.price strong')[0].innerHTML = "$" + totalPrice;//show the new total
    }
  });//End Pepperoni button click function

  //Making the button mushrooms toggle the classes (same as pepperoni)
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle('.mushroom');
    $('.btn-mushrooms').toggleClass('active');
    $('.price li:contains(mushrooms)').toggle('.price li:contains(mushrooms)');

    //Updating price
    if(mushroom){
      mushroom = false;
      totalPrice -= mushPrice;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }else{
      mushroom = true;
      totalPrice += mushPrice;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }
  });//End mushroom button click function

  //Making the button green peppers toggle the classes (same as pepperoni)
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle('.green-pepper');
    $('.btn-green-peppers').toggleClass('active');
    $('.price li:contains(green peppers)').toggle('.price li:contains(green peppers)');

    //Updating price
    if(greenPepers){
      greenPepers = false;
      totalPrice -= greePrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }else{
      greenPepers = true;
      totalPrice += greePrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }
  });//End green peppers button click function

  //Making the button white sauce toggle the classes (same as pepperoni)
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price li:contains(white sauce)').toggle('.price li:contains(white sauce)');

    //Updating price
    if(whiteSauce){
      whiteSauce = false;
      totalPrice -= whitPrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }else{
      whiteSauce = true;
      totalPrice += whitPrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }
  });//End white sauce button click function

  //Making the button gluten free crost toggle the classes (same as pepperoni)
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price li:contains(free crust)').toggle('.price li:contains(free crust)');

    //Updating price
    if(glutenFreeCrust){
      glutenFreeCrust = false;
      totalPrice -= glutPrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }else{
      glutenFreeCrust = true;
      totalPrice += glutPrice ;
      $('.price strong')[0].innerHTML = "$" + totalPrice;
    }
  });//End white sauce button click function

  //Starting the document correctly
  $('.crust-gluten-free').removeClass('crust-gluten-free');//remove gluten free crust
  $('.btn-crust').toggleClass('active');//starting the crust button with the right status
  $('.sauce-white').removeClass('sauce-white');//remove white sauce
  $('.btn-sauce').toggleClass('active');//starting the sauce button with the right status
  $('.price li:contains(sauce)').hide();//hide white sauce price
  $('.price li:contains(crust)').hide();//hide gluten free crust price
  $('.price strong')[0].innerHTML = "$" + totalPrice;//shows defaut price instead HTML one

});