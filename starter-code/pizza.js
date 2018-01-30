// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click((e) =>{
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".pep-price").toggle();
  sumPrices()
})

$(".btn-mushrooms").click((e) => {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".mushrooms-price").toggle();
  sumPrices()
})

$(".btn-green-peppers").click((e) => {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".peppers-price").toggle();
  sumPrices()
})

$(".btn-sauce").click((e) => {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".sauce-price").toggle();
  sumPrices()
})

$(".btn-crust").click((e) => {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".gluten-price").toggle();
  sumPrices()
})
// crust-gluten-fre
// sauce-white

function sumPrices() {
  var thing = $("* .price-li:visible")
  var result = 0;
  for (let i = 0; i < thing.length; i++) {
    result += parseInt(thing[i].innerHTML.slice(1,2));
  }
  console.log(result);
  $("strong").text("$" + ( 10 + result));
}

sumPrices()


