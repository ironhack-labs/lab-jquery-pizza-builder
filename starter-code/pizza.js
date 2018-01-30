

$(document).ready(function(){

  $(".crust").removeClass("crust-gluten-free");
   $(".sauce").removeClass("sauce-white");
   $(".btn-crust").removeClass("active");
   $(".btn-sauce").removeClass("active");
   $(".price li:nth-child(4)").css("opacity", "0");
   $(".price li:nth-child(5)").css("opacity", "0");

 
  $(".btn-pepperonni").click(function(){
    if($(".pep").css("display") === "none") {
     $(".pep").css("display","block");
     $(".btn-pepperonni").addClass("active");
     $(".price li:nth-child(1)").show();
     
    }else {
      $(".pep").css("display","none");
      $(".btn-pepperonni").removeClass("active");
      $(".price li:nth-child(1)").hide();
   }
    
   finalPrice();

   });
   
   $(".btn-green-peppers").click(function(){
     if($(".green-pepper").css("display") === "none") {
      $(".green-pepper").css("display","block");
      $(".btn-green-peppers").addClass("active");
      $(".price li:nth-child(3)").show();
     }else {
       $(".green-pepper").css("display","none");
       $(".btn-green-peppers").removeClass("active");
       $(".price li:nth-child(3)").hide();
    }
   
    finalPrice();

    });
   
    $(".btn-mushrooms").click(function(){
     if($(".mushroom").css("display") === "none") {
      $(".mushroom").css("display","block");
      $(".btn-mushrooms").addClass("active");
      $(".price li:nth-child(2)").show();
     }else {
       $(".mushroom").css("display","none");
       $(".btn-mushrooms").removeClass("active");
       $(".price li:nth-child(2)").hide();
    }

    finalPrice();
   
    });
    
    $(".btn-sauce").click(function(){
     if($(".sauce").hasClass("sauce-white")) {
      $(".sauce").removeClass("sauce-white");
      $(".btn-sauce").removeClass("active");
      $(".price li:nth-child(4)").hide();
      ;
     }else {
       $(".sauce").addClass("sauce-white");
      $(".btn-sauce").addClass("active");
      $(".price li:nth-child(4)").show();
      $(".price li:nth-child(4)").css("opacity", "1")
    }
   
    finalPrice();

    });
   
    $(".btn-crust").click(function(){
     if($(".crust").hasClass("crust-gluten-free")) {
      $(".crust").removeClass("crust-gluten-free");
       $(".btn-crust").removeClass("active");
       $(".price li:nth-child(5)").hide();
     }else {
       $(".crust").addClass("crust-gluten-free");
      $(".btn-crust").addClass("active");
      $(".price li:nth-child(5)").show();
      ($("strong").text(count)); 
      $(".price li:nth-child(5)").css("opacity", "1");
    }

    finalPrice();
  });

  var finalPrice = function (){
    var count=10
    if ($(".btn-pepperonni").hasClass("active")){
        count += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")){
        count += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")){
        count += 1;
    }
    if ($(".btn-sauce").hasClass("active")){
        count += 3;
    }
    if ($(".btn-crust").hasClass("active")){
        count += 5;
    }

    $(".price strong").text("$" + count);
  }

    finalPrice();

 

   

})
 