// Write your Pizza Builder JavaScript in this file.
let price = 13;

$(document).ready(function(){
  if ($(".btn-sauce").text() == "Sauce") {   
    $(".btn-sauce").removeClass("active")  
  }else{
    $(".btn-sauce").addClass("active") 
  }
  if ($(".btn-crust").text() == "Crust") {   
    $(".btn-crust").removeClass("active")  
  }else{
    $(".btn-crust").addClass("active") 
  }
  $("aside ul li:nth-child(4)").hide() 
  $("aside ul li:nth-child(5)").hide() 
  $("aside strong").text("$"+price);
});

  $(".btn-pepperonni").on("click",function(){
    console.log("pepper");
    if ($(".pep").is(':visible')) {
      console.log("inactive");
      $(".btn-pepperonni").removeClass("active")
      $("aside ul li:nth-child(1)").hide() 
      console.log("before:",price);
      price -= 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    } else {
      console.log("active");
      $(".btn-pepperonni").addClass("active")  
      $("aside ul li:nth-child(1)").show()  
      console.log("before:",price);
      price += 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }    
    $(".pep").toggle("fast");    
  })
  $(".btn-mushrooms").on("click",function(){
    console.log("mashrooms");
    if ($(".mushroom").is(':visible')) {
      console.log("inactive");
      $(".btn-mushrooms").removeClass("active");
      $("aside ul li:nth-child(2)").hide();
      console.log("before:",price);
      price -= 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    } else {
      console.log("active");
      $(".btn-mushrooms").addClass("active");
      $("aside ul li:nth-child(2)").show(); 
      console.log("before:",price);
      price += 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }        
    $(".mushroom").toggle("fast")
  })
  $(".btn-green-peppers").on("click",function(){
    console.log("green peppers");
    if ($(".green-pepper").is(':visible')) {
      console.log("inactive");
      $(".btn-green-peppers").removeClass("active");
      $("aside ul li:nth-child(3)").hide();
      console.log("before:",price);
      price -= 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    } else {
      console.log("active");
      $(".btn-green-peppers").addClass("active");
      $("aside ul li:nth-child(3)").show(); 
      console.log("before:",price);
      price += 1;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }  
    $(".green-pepper").toggle("fast")
  })

  $(".btn-sauce").on("click",function(){
    $(".sauce").toggleClass("sauce-white");
    if ($(".btn-sauce").text() == "Sauce") {
      $(".btn-sauce").text("White Sauce");
      $(".btn-sauce").addClass("active");
      $("aside ul li:nth-child(4)").show();
      console.log("before:",price);
      price += 3;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }else{
      $(".btn-sauce").text("Sauce");
      $(".btn-sauce").removeClass("active");
      $("aside ul li:nth-child(4)").hide();
      console.log("before:",price);
      price -= 3;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }
  })

  $(".btn-crust").on("click",function(){
    console.log("crust");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".btn-crust").text() == "Crust") {
      $(".btn-crust").text("Gluten-free crust");
      $(".btn-crust").addClass("active")
      $("aside ul li:nth-child(5)").show();
      console.log("before:",price);
      price += 5;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }else{
      $(".btn-crust").text("Crust");
      $(".btn-crust").removeClass("active")
      $("aside ul li:nth-child(5)").hide();
      console.log("before:",price);
      price -= 5;
      $("aside strong").text("$"+price);
      console.log("after:",price);
    }
  })