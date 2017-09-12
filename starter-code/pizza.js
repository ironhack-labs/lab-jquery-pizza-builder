$(document).ready(function() {
  $(".btn-pepperonni").click(function(event) {
      $(".pep").toggle("pep");
      $(this).toggleClass("active");
      $(".price li:first").css("display", "none");
      var newprix = updatePrice($(".price strong").text(), 1, $(this).hasClass("active"));
      $(".price strong").text(newprix);
    });
    $(".btn-mushrooms").click(function(event) {
      $(".mushroom").toggle("mushroom");
      $(this).toggleClass("active");
      $(".price li:nth-child(2)").css("display", "none");
      var newprix = updatePrice($(".price strong").text(), 1,$(this).hasClass("active"));
      $(".price strong").text(newprix);
    });
    $(".btn-green-peppers").click(function(event) {
      $(".green-pepper").toggle("green-pepper");
      $(this).toggleClass("active");
      $(".price li:nth-child(3)").css("display", "none");
      var newprix = updatePrice($(".price strong").text(), 1, $(this).hasClass("active"));
      $(".price strong").text(newprix);
    });
    $(".btn-sauce").click( function(event) {
      $(".sauce-white").toggle("sauce-white");
      $(this).toggleClass("active");
      $(".price li:nth-child(4)").css("display", "none");
      var newprix = updatePrice($(".price strong").text(), 3, $(this).hasClass("active"));
      $(".price strong").text(newprix);
    });
    $(".btn-crust").click( function(event) {
      $(".crust-gluten-free").toggle("crust-gluten-free");
      $(this).toggleClass("active");
      $(".price li:nth-child(5)").css("display", "none");
      var newprix = updatePrice($(".price strong").text(), 5,$(this).hasClass("active"));
      $(".price strong").text(newprix);
    });



});

function updatePrice(prix, prixIng, has) {
  var prixInt = parseInt(prix.slice(1));
  if (!has) {
    return "$" + (prixInt - prixIng).toString();
  }
  else {
    return "$" + (prixInt + prixIng).toString();
  }
}
