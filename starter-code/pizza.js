// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var totalPrice = function() {
    var b = $(".price b");
    var a = $(".price ul li:visible");
    var e = [];
    for (var i = 0; i < a.length; i++) {
      var q = a[i].innerHTML.split(" ");
      var s = parseInt(q[0][1]);
      e.push(s);
    }
    console.log(e);
    var sum = e.reduce(add, 0) + 10;
    function add(a, b) {
      return a + b;
    }
    console.log(sum);
    document.getElementsByTagName('strong')[0].innerHTML = "$" + sum;
  };
  totalPrice();
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".btn-pepperonni").toggleClass("active");
  $(".pep").toggle();
  $("li:contains(pepperonni)").toggle();
  $("li:contains(gluten-free)").toggle();
  console.log($("li:contains(pepperonni).context"));

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("li:contains(pepperonni)").toggle();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
      $("li:contains(green)").toggle();

  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
      $("li:contains(mushrooms)").toggle();
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("li:contains(white)").toggle();

  });
  $(".btn-crust").click(function() {

    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $("li:contains(gluten-free)").toggle();

  });
  


});
