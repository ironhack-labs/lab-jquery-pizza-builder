function calculatePrice(){
  var totalPrice = 0;
  var arrayAllElements = [];
  $("aside > ul li").each(function(index,element ) {
    arrayAllElements.push(element);
  });
  var arrayFiltered = arrayAllElements.filter(function(element){
    return element.style.display !== 'none';
  });

  for(var i = 0;i<arrayFiltered.length;i++){
    var text = arrayFiltered[i].innerHTML;
    totalPrice += parseInt(text[1]);
  }
  totalPrice += 10;
  totalPrice = "$"+totalPrice.toString();
  return totalPrice;
}

$(document).ready(function(){
  $("aside > ul li:contains('white sauce')").toggle();
  $("aside > ul li:contains('gluten-free crust')").toggle();

  var price = $("strong");


  var list = $("aside > ul ");
  var buttonPepperonni = $(".btn-pepperonni");
  var pepperonni = $(".pep");


  buttonPepperonni.on("click",function(){
    pepperonni.toggle();
    buttonPepperonni.toggleClass("active");
    $("aside > ul li:contains('pepperonni')").toggle();
    price.text(calculatePrice());




  });
  var pepper =$(".green-pepper");
  var buttonPepper = $(".btn-green-peppers");


  buttonPepper.on("click", function(){
     pepper.toggle();
     buttonPepper.toggleClass("active");
     $("aside > ul li:contains('green peppers')").toggle();
     price.text(calculatePrice());



  });

  var mushrooms = $(".mushroom");
  var buttonMushrooms = $(".btn-mushrooms");


  buttonMushrooms.on("click", function(){
     mushrooms.toggle();
     buttonMushrooms.toggleClass("active");
     $('aside > ul li:contains("mushrooms")').toggle();
     price.text(calculatePrice());

  });

  var buttonWhiteSauce = $(".btn-sauce");
  var buttonCrust = $(".btn-crust");

  var crustOption = $(".crust");
  var sauceOption = $(".sauce");




  buttonWhiteSauce.on("click",function(){
     sauceOption.toggleClass("sauce-white");
     buttonWhiteSauce.toggleClass("active");
     $("aside > ul li:contains('white sauce')").toggle();
     price.text(calculatePrice());


    });

  buttonCrust.on("click",function(){
     crustOption.toggleClass("crust-gluten-free");
     buttonCrust.toggleClass("active");
     $("aside > ul li:contains('gluten-free crust')").toggle();
     price.text(calculatePrice());


    });





});
