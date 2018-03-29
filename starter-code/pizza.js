// PEPPERONNI WITH IF AND ELSE METHOD

// $(".btn-pepperonni").click(function (){
  
//   var x = $(".btn-pepperonni").attr("value");

//   if(x == "Show") {
//     $(".btn-pepperonni").attr("value", "Hide");
//     $(".pep").show();
//   }
//   else {
//     $(".btn-pepperonni").attr("value", "Show");
//     $(".pep").hide();
//   }

// PEPPERONNI RIGHT METHOD :-D

  $(".btn-pepperonni").click(function (){
    $("#pizza > section.pep").toggleClass("inactive");
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:contains('pepperonni')").toggleClass("strike");
    options[0]["isActive"] = !options[0]["isActive"];
  });
  

// MUSHROOMS
  
  $(".btn-mushrooms").click(function (){
    $("#pizza > section.mushroom").toggleClass("inactive");
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:contains('mushrooms')").toggleClass("strike");
    options[1]["isActive"] = !options[1]["isActive"];
  });


// GREEN PEPPERS

$(".btn-green-peppers").click(function (){
  $("#pizza > section.green-pepper").toggleClass("inactive");
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:contains('green peppers')").toggleClass("strike");
  options[2]["isActive"] = !options[2]["isActive"];
});


// SAUCE

  $(".btn-sauce").click(function (){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:contains('white')").toggleClass("strike");
    options[3]["isActive"] = !options[3]["isActive"]; 
  });


// CRUST

  $(".btn-crust").click(function (){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:contains('gluten')").toggleClass("strike");
    options[4]["isActive"] = !options[4]["isActive"];
  });
  

// PIZZA BY DEFAULT WHEN OPENING PAGE
  
  $(".btn-sauce").removeClass("active");
  
  $(".btn-crust").removeClass("active");
  
  $("section.crust").removeClass("crust-gluten-free");
  
  $("section.sauce").removeClass("sauce-white");
  
  $(".price li:contains('white')").addClass("strike");
  
  $(".price li:contains('gluten')").addClass("strike");


// ARRAY OF ELEMENTS IN THE PZIZA

  var initPrice = 10;
  var options = [
  { option: "Pepperonni",
    price: 1,
    isActive: true,
  },
  { option: "Mushrooms",
    price: 1,
    isActive: true,
  },
  { option: "Green Peppers",
    price: 1,
    isActive: true,
  },
  { option: "White Sauce",
    price: 3,
    isActive: false,
  },
  { option: "gluten free crust",
    price: 5,
    isActive: false
  },
  ];

  
// CALCUL OF THE TOTAL PRICE

  var price = 0;
  $("*").click(function(){
   price = options.reduce(function(a,b){
     if (b.isActive === true ){
      return a + b.price;
     } 
     else {
       return a;
     }
    }, 10);
  $("aside strong").text("$" + price)  
  });

