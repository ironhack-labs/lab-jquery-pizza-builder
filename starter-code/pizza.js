// Write your Pizza Builder JavaScript in this file.
var suma=0;

  $(document).ready(function(){
  /////Se agrega para iteracion 4
  let indiceValor=0
  $(".pep").toggle();
  $(".btn-pepperonni").removeClass("active");
  $(".price ul li:nth-child(1)").toggle();
  $("aside").find("li").eq(4).toggle();
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");

  suma=parseInt($("aside").find("strong").text().substring(1));

  if(!$(".btn-pepperonni").hasClass("active")){
    indiceValor=$("aside").find("li").eq(0).text().indexOf(" ");
    suma=suma-parseInt($("aside").find("li").eq(0).text().substring(1,indiceValor));
  }

  if(!$(".btn-mushrooms").hasClass("active")){
    indiceValor=$("aside").find("li").eq(1).text().indexOf(" ");
    suma=suma-parseInt($("aside").find("li").eq(1).text().substring(1,indiceValor));
  }

  if(!$(".btn-green-peppers").hasClass("active")){
    indiceValor=$("aside").find("li").eq(2).text().indexOf(" ");
    suma=suma-parseInt($("aside").find("li").eq(2).text().substring(1,indiceValor));
  }

  if(!$(".btn-sauce").hasClass("active")){
    indiceValor=$("aside").find("li").eq(3).text().indexOf(" ");
    suma=suma-parseInt($("aside").find("li").eq(3).text().substring(1,indiceValor));
  }

  if(!$(".btn-crust").hasClass("active")){
    indiceValor=$("aside").find("li").eq(4).text().indexOf(" ");
    suma=suma-parseInt($("aside").find("li").eq(4).text().substring(1,indiceValor));
  }

  $("aside").find("strong").text("$" + suma.toString());
  /*Cualquiera de estas opciones funciona para ocultar
  $("aside").find("li:nth-child(5)").toggle();
  $(".price ul li:nth-child(5)").toggle();
  $(".price>ul>li:nth-child(1)").toggle();
  $(".price ul li").eq(4).toggle();
  $(".price>ul").find("li").eq(4).toggle();*/
  //////////////////////////////
  /////Se elimina para iteracion 4
  //$(".sauce").removeClass("sauce-white");
  //////////////////////////////
  /////Se elimina para iteracion 4
  //$(".btn-sauce").removeClass("active");
  //////////////////////////////
  })

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".price ul li:nth-child(3)").toggle();
  if ($(this).hasClass("active")){
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  let indiceValor=0;
  indiceValor=$("aside").find("li").eq(2).text().indexOf(" ");

  if(!$(this).hasClass("active"))
    suma=suma-parseInt($("aside").find("li").eq(2).text().substring(1,indiceValor));
  else
    suma=suma+parseInt($("aside").find("li").eq(2).text().substring(1,indiceValor));

  $("aside").find("strong").text("$" + suma.toString());
});

$(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".price ul li:nth-child(1)").toggle();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  let indiceValor=0;
  indiceValor=$("aside").find("li").eq(0).text().indexOf(" ");

  if(!$(this).hasClass("active"))
    suma=suma-parseInt($("aside").find("li").eq(0).text().substring(1,indiceValor));
  else
    suma=suma+parseInt($("aside").find("li").eq(0).text().substring(1,indiceValor));

  $("aside").find("strong").text("$" + suma.toString());
});

$(".btn-mushrooms").on("click", function () {
  $(".mushroom").toggle();
  $(".price ul li:nth-child(2)").toggle();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  let indiceValor=0;
  indiceValor=$("aside").find("li").eq(1).text().indexOf(" ");

  if(!$(this).hasClass("active"))
    suma=suma-parseInt($("aside").find("li").eq(1).text().substring(1,indiceValor));
  else
    suma=suma+parseInt($("aside").find("li").eq(1).text().substring(1,indiceValor));

  $("aside").find("strong").text("$" + suma.toString());
});

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(".price ul li:nth-child(4)").toggle();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  let indiceValor=0;
  indiceValor=$("aside").find("li").eq(3).text().indexOf(" ");

  if(!$(this).hasClass("active"))
    suma=suma-parseInt($("aside").find("li").eq(3).text().substring(1,indiceValor));
  else
    suma=suma+parseInt($("aside").find("li").eq(3).text().substring(1,indiceValor));

  $("aside").find("strong").text("$" + suma.toString());
});

$(".btn-crust").on("click", function () {
  $(".crust").toggleClass("crust-gluten-free");
  $(".price ul li:nth-child(5)").toggle();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  let indiceValor=0;
  indiceValor=$("aside").find("li").eq(4).text().indexOf(" ");

  if(!$(this).hasClass("active"))
    suma=suma-parseInt($("aside").find("li").eq(4).text().substring(1,indiceValor));
  else
    suma=suma+parseInt($("aside").find("li").eq(4).text().substring(1,indiceValor));

  $("aside").find("strong").text("$" + suma.toString());
});
