// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $(".green-pepper, .pep, .mushroom, .sauce").hide();
  $("crust").removeClass("crust-gluten-free");

  var btnPep =$(".btn-pepperonni");
  var btnMus =$(".btn-mushrooms");
  var btnGre =$(".btn-green-peppers");
  var btnSau =$(".btn-sauce");
  var btnCru =$(".btn-crust")
  
  

  btnPep.click(function(){
    
    
    if(btnPep.hasClass("active")){
      deleteLi("pep");
    } else {
      createLi("pep");
    }
    
    $(".pep").fadeToggle(100)
    btnPep.toggleClass("active");
  });
   
  btnMus.click(function(){
    if(btnMus.hasClass("active")){
      deleteLi("mushroom");
    } else {
      createLi("mushroom");
    }
    
    
    $(".mushroom").fadeToggle(100)
    btnMus.toggleClass("active");
  });

  btnGre.click(function(){
    if(btnGre.hasClass("active")){
      deleteLi("green");
    } else {
      createLi("green");
    }
    
    
    $(".green-pepper").fadeToggle(100)
    btnGre.toggleClass("active");
  });
 
  btnSau.click(function(){
    if(btnSau.hasClass("active")){
      deleteLi("sauce");
    } else {
      createLi("sauce");
    }
    
    $(".sauce").fadeToggle(100)
    btnSau.toggleClass("active");
  });

  btnCru.click(function(){
    if(btnCru.hasClass("active")){
      deleteLi("crust");
    } else {
      createLi("Crust");
    }

    $(".crust").toggleClass("crust-gluten-free");
    btnCru.toggleClass("active");




  });
  
  function calculatePrice(){
    var lista = document.getElementById("pedido").children;
    
    var sum =10;
    for(i=0;i<Object.keys(lista).length;i++){
      sum+=Number(lista[i].getAttribute("price"));
    }
    var total= "<strong>"+"$"+sum+"</strong>";
     $(".total-price").empty();
     $(total).appendTo(".total-price");
  }
  
  function createLi(ingredient){
    if(ingredient == "pep"){
      $("<li class='lipep' price = '1'>$1 pepperonni</li>").appendTo("#pedido");
    } else if (ingredient == "mushroom"){
      $("<li class='limus' price = '1'>$1 mushrooms</li>").appendTo("#pedido");
    } else if (ingredient == "green"){
      $("<li class='ligre' price = '1'>$1 green peppers</li>").appendTo("#pedido");
    } else if (ingredient == "sauce"){
      $("<li class='lisauce' price = '3'>$3 white sauce</li>").appendTo("#pedido");
    } else {
      $("<li class='licrust'  price = '5'>$5 gluten-free crust</li>").appendTo("#pedido");
    }
  }

function deleteLi(ingredient){

  if(ingredient == "pep"){
    $(".lipep").remove();
  } else if (ingredient == "mushroom"){
    $(".limus").remove();
  } else if (ingredient == "green"){
    $(".ligre").remove();
  } else if (ingredient == "sauce"){
    $(".lisauce").remove();
  } else {
    $(".licrust").remove();
  }
}

$(".btn").click(function(){
  calculatePrice();
});

});

        
        
        
        
        