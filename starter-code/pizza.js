$(document).ready(function () {

  gpSections = $("section.green-pepper");
  mSections = $("section.mushroom");
  pSections = $("section.pep");
  crustSection = $("#pizza>section:last");
  sauceSection = $("#pizza>section>section:last");

  gpSections.hide();
  $("button.btn-green-peppers").removeClass("active");

  mSections.hide();
  $("button.btn-mushrooms").removeClass("active");

  pSections.hide();
  $("button.btn-pepperonni").removeClass("active");

  crustSection.removeClass("crust-gluten-free");
  $("button.btn-crust").removeClass("active");

  sauceSection.removeClass("sauce-white");
  $("button.btn-sauce").removeClass("active");
  
  ////////////////////////////
  ////button configuration
  $("button.btn-green-peppers").click(function () {
    console.log("green-peper hola");
    $(".green-pepper").fadeToggle(1000);
    $(this).toggleClass("active");
  });

  $("button.btn-mushrooms").click(function () {
    $(".mushroom").fadeToggle(500);
    $(this).toggleClass("active");

  });

  $("button.btn-pepperonni").click(function () {
    $(".pep").fadeToggle(500);
    $(this).toggleClass("active");
  });

  $("button.btn-sauce").click(function () {
    sauceSection.toggleClass("sauce-white");
    $(this).toggleClass("active");
  });

  $("button.btn-crust").click(function () {
    crustSection.toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
  });

});

