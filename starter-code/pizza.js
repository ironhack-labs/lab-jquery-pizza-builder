// Write your Pizza Builder JavaScript in this file.
let defaultPrice = 13;
// ------- adding and removing pepperonni ----- 
let togglePepperonni = $(".btn-pepperonni").click(()=>{
    $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("#pepperonni").toggle("#pepperonni");
  if ($(".btn-pepperonni").hasClass("active")){
    defaultPrice ++;
  }else {
    defaultPrice--;
  }
  $("#total").text(defaultPrice)

  });
  

// ------adding and removing Mushrooms ------
let toggleMushroom = $(".btn-mushrooms").click(() => {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("#mushroom").toggle("#mushroom");
  if ($(".btn-mushrooms").hasClass("active")) {
    defaultPrice++;
  } else {
    defaultPrice--;
  }
  $("#total").text(defaultPrice)
});
// ------adding and removing Pepper ------
let togglePeppers = $(".btn-green-peppers").click(() => {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("#greenPepper").toggle("#greenPepper");
  if ($(".btn-green-peppers").hasClass("active")) {
    defaultPrice++;
  } else {
    defaultPrice--;
  }
  $("#total").text(defaultPrice)
});

// ------adding and removing Sauce ------
let toggleSauce = $(".btn-sauce").click(() => {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("#whiteSauce").toggle("#whiteSauce");
  if ($(".btn-sauce").hasClass("active")) {
    defaultPrice = defaultPrice +3;
  } else {
    defaultPrice = defaultPrice - 3;
  }
  $("#total").text(defaultPrice)
  
});

// ------adding and removing Crust ------
let toggleCrust = $(".btn-crust").click(() => {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("#glutenFree").toggle("#glutenFree");
  if ($(".btn-crust").hasClass("active")) {
    defaultPrice = defaultPrice + 5;
  } else {
    defaultPrice = defaultPrice - 5;
  }
  $("#total").text(defaultPrice)
  
});

