$(document).ready(function() {

  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".panel ul li:contains(white sauce)").hide();
  $(".panel ul li:contains(gluten-free crust)").hide();

  $('.btn').on('click', function() {
    $(this).toggleClass("active");
  });


  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".panel ul li:contains(pepperonni)").toggle();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".panel ul li:contains(mushrooms)").toggle();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".panel ul li:contains(green peppers)").toggle();
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".panel ul li:contains(white sauce)").toggle();
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel ul li:contains(gluten-free crust)").toggle();
    totalPrice();
  });

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

});
