// Write your Pizza Builder JavaScript in this file.
$("document").ready(function(){
  let pepperonni = true;
  let mushroom = true;
  let green_pepper = true;
  let white_sauce = false;
  let gluten_free = false;

  let final_price = 13;
  showFinalPrice();
  //alert($("#final_price").text())

  //let white_sauceiIsActive = $("#white-sauce").is(":visible");
  let white_sauceiIsActive = $("section.sauce").hasClass("sauce-white");
  if(!white_sauceiIsActive)
  {
    $("#white-sauce").removeClass("active");
    $("ul li:contains('white sauce')").css("display","none");
  }

  let gluten_freeIsActive = $("section.crust").hasClass("crust-gluten-free");
  if(!gluten_freeIsActive)
  {
    $("#gluten-free").removeClass("active");
    $("ul li:contains('gluten-free')").css("display","none");
  }

  function showFinalPrice(){
    $("#final_price").text("$" + final_price);
  }
  //Update Panel Prices

  $("#pepperonni").click(function(){
    if(!pepperonni)
    {
      $("section.pep").css("display", "");
      $(this).addClass("active");
      $("ul li:contains('pepperonni')").css("display","");
      final_price++;
      pepperonni = true; 
    }
    else
    {
      $("section.pep").css("display", "none");
      $(this).removeClass("active");
      $("ul li:contains('pepperonni')").css("display","none");
      final_price--;
      pepperonni = false;
    }
    showFinalPrice();
  });

  $("#mushroom").click(function(){
    if(!mushroom)
    {
      $("section.mushroom").css("display", "");
      $(this).addClass("active");
      $("ul li:contains('mushrooms')").css("display","");
      final_price++;
      mushroom = true;
    }
    else
    {
      $("section.mushroom").css("display", "none");
      $(this).removeClass("active");
      $("ul li:contains('mushrooms')").css("display","none");
      final_price--;
      mushroom = false;
    }
    showFinalPrice();
  });

  $("#green-pepper").click(function(){
    if(!green_pepper)
    {
      $("section.green-pepper").css("display", "");
      $(this).addClass("active");
      $("ul li:contains('green peppers')").css("display","");
      final_price++;
      green_pepper = true;
    }
    else
    {
      $("section.green-pepper").css("display", "none");
      $(this).removeClass("active");
      $("ul li:contains('green peppers')").css("display","none");
      final_price--;
      green_pepper = false;
    }
    showFinalPrice();
  });

  $("#white-sauce").click(function (){
    if(!white_sauce)
    {
      $("section.sauce").addClass("sauce-white");
      $(this).addClass("active");
      $("ul li:contains('white sauce')").css("display","");
      final_price += 3;
      white_sauce = true;
    }
    else
    {
      $("section.sauce").removeClass("sauce-white");
      $(this).removeClass("active");
      $("ul li:contains('white sauce')").css("display","none");
      final_price -= 3;
      white_sauce = false;
    }
    showFinalPrice();
  });

  $("#gluten-free").click(function(){
    if(!gluten_free)
    {
      $("section.crust").addClass("crust-gluten-free");
      $(this).addClass("active");
      $("ul li:contains('gluten-free crust')").css("display","");
      final_price += 5;
      gluten_free = true;
    }
    else
    {
      $("section.crust").removeClass("crust-gluten-free");
      $(this).removeClass("active");
      $("ul li:contains('gluten-free crust')").css("display","none");
      final_price -= 5;
      gluten_free = false;
    }
    showFinalPrice();
  });
});