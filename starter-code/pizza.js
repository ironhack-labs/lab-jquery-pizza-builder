// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  /*---------------BOTONES------------*/
 $(".btn-pepperonni").on("click",function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul :nth-child(1)").toggle();

  //   inicial.toggle(function(){
  //     inicial= inicial - precio;
  //      $(".price strong").text("$"+inicial);
  //   },function (){
  //     inicial = inicial + precio;
  //    $(".price strong").text("$"+inicial);}
  //  );
 });

  var precio = $(".price ul :nth-child(1)")[0].innerHTML[1];


  $(".btn-mushrooms").on("click",function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul :nth-child(2)").toggle();
  });

  $(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul :nth-child(3)").toggle();
  });


  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".price ul :nth-child(5)").hide();

  $(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul :nth-child(5)").toggle();
  });


  $(".btn-sauce").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".price ul :nth-child(4)").hide();

  $(".btn-sauce").on("click",function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul :nth-child(4)").toggle();
  });

  function updatePrice(){
    var precio = $("strong")[0].innerHTML.slice(1);
    var ingredientes = $(".price ul li[style *='display']");
    f
  }
});
