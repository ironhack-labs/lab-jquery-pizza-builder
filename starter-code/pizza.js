// Write your Pizza Builder JavaScript in this file.

//Iteration 1
$(".btn-pepperonni").click(function(){
$(".pep").toggle()}
if ($("li:contains('$1 pepperonni')")){
  hide();
}
else show();
});




$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle()
  });

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle()
  });

$(".btn-sauce").click(function(){
  $(".sauce-white").toggle()
  });

$(".btn-crust").click(function(){
  $(".crust-gluten-free").toggle()
  });


  //Iteration 2
  $( ".crust" ).removeClass("crust-gluten-free");
  $( ".sauce" ).removeClass("sauce-white");

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    });

  $(".btn-sauce").click(function(){
    $(".sauce").toggle("sauce-white")
    });
   
//Iteration 3
$(".btn-sauce").click(function(){
  $(".btn-sauce").toggleClass("active");
});

$(".btn-crust").click(function(){
  $(".btn-crust").toggleClass("active");
});

$(".btn-green-peppers").click(function(){
  $(".btn-green-peppers").toggleClass("active");
});

$(".btn-mushrooms").click(function(){
  $(".btn-mushrooms").toggleClass("active");
});

$(".btn-pepperonni").click(function(){
  $(".btn-pepperonni").toggleClass("active");
});

//Iteration 4 
