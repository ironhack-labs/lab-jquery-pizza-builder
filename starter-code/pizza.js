// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {


    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".btn-crust").toggleClass("active");
    $("li:contains($3 white sauce)").toggle();
    $("li:contains($5 gluten-free crust)").toggle()
    let defaultPrice = 13;



    // Function
    $(".btn-pepperonni").click(function(event){
    $(".btn-pepperonni").toggleClass("active")
        $(".pep").toggle();
        $("li:contains($1 pepperonni)").toggle();
        if ($(".btn-pepperonni").hasClass("active")){
            defaultPrice ++;
          }else {
            defaultPrice--;
          }
          $("#total").text(defaultPrice)
    });

    $(".btn-mushrooms").click(function(event){
        $(".btn-mushrooms").toggleClass("active")
        $(".mushroom").toggle()
        $("li:contains($1 mushrooms)").toggle()
    });

    $(".btn-green-peppers").click(function(event){
        $(".btn-green-peppers").toggleClass("active")
        $(".green-pepper").toggle();
        $("li:contains($1 green peppers)").toggle();
    });

    $(".btn-sauce").click(function(event){
        $(".btn-sauce").toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        $("li:contains($3 white sauce)").toggle();
      
    });

    $(".btn-crust").click(function(event){
        $(".btn-crust").toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains($5 gluten-free crust)").toggle();
      });
    
  });



  $(".all-peperonis > section")
  $(".all-mushrooms > section")
  $(".all-green-pappers > section")