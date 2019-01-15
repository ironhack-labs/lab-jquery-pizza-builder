// Write your Pizza Builder JavaScript in this file.

// pepperonni.addEventListener("click", function () {
//   if (pepperonni.className == "btn start") {
//     pepperonni.className = "btn stop";
//     pepperonni.innerText = "STOP";
//     btnRight.className = "btn split";
//     btnRight.innerText = "SPLIT";
//     chronometer.startClick();
//     printTime();
//   } else {
//     btnLeft.className = "btn start";
//     btnLeft.innerText = "START";
//     btnRight.className = "btn reset";
//     btnRight.innerText = "RESET";
//     chronometer.stopClick();
//     clearInterval(intervalId2);
//   }
// });

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
});
$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
});
$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
});

$(".btn-sauce").on("click", function() {
  $(".sauce-white").toggle();
  $(".btn-sauce").toggleClass("active");
  $(".sauce").addClass("sauce-white");
});

$(".btn-crust").on("click", function() {
  $(".crust").toggle();
  $(".btn-crust").toggleClass("active");
  $(".crust").addClass("crust-gluten-free");
});

$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");

$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");
