// // Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').click(function() {
    $(".pep").toggle();
    $("#li-pep span").toggleClass("total");
    $("#li-pep").toggle();
     $(this).toggleClass('active');
    totalPrice();
});
$('.btn-mushrooms').click(function() {
    $(".mushroom").toggle();
    $("#li-mushroom span").toggleClass("total");
    $("#li-mushroom").toggle();
    $(this).toggleClass('active');
    totalPrice();
});
$('.btn-green-peppers').click(function() {
    $(".green-pepper").toggle();
    $("#li-green-pepper span").toggleClass("total");
    $("#li-green-pepper").toggle();
    $(this).toggleClass('active');
    totalPrice();
});
$('.btn-sauce').click(function() {
    $(".sauce").toggleClass('sauce-white');
    $("#li-sauce-white span").toggleClass("total");
    $("#li-sauce-white").toggle();
    $(this).toggleClass('active');
    totalPrice();
});
$('.btn-crust').click(function() {
    $(".crust").toggleClass('crust-gluten-free');
    $("#li-crust-gluten-free span").toggleClass("total");
    $("#li-crust-gluten-free").toggle();
    $(this).toggleClass('active');
    totalPrice();
});
function totalPrice() {
  var list = $(".total").text().split(" ").map(function(item) {
      return parseInt(item, 10);
  });
  console.log('List', list);
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
  sum = sum + (list[i]);
}
 console.log('SUM: ', sum);
 document.querySelector("#totalPrice").innerHTML = '$' + sum;
 }
 var calculate = $('.btn').click() ;
