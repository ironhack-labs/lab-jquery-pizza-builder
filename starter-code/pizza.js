// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {

    let defaultPrice = 13;
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".btn-crust").toggleClass("active");
    $("li:contains($3 white sauce)").toggle();
    $("li:contains($5 gluten-free crust)").toggle()
    



    // Function
    $(".btn-pepperonni").click(function(event){
        $(".btn-pepperonni").toggleClass("active")
        $(".pep").toggle();
        $("li:contains($1 pepperonni)").toggle();
        if ($(".btn-pepperonni").hasClass("active")){
            defaultPrice++;
          }else { defaultPrice--;}
          
          $("#total-price").text(defaultPrice)
    });

    $(".btn-mushrooms").click(function(event){
        $(".btn-mushrooms").toggleClass("active")
        $(".mushroom").toggle()
        $("li:contains($1 mushrooms)").toggle()
        if ($(".btn-mushrooms").hasClass("active")){
            defaultPrice++;
          }else { defaultPrice--;}
          
          $("#total-price").text(defaultPrice)
    });

    $(".btn-green-peppers").click(function(event){
        $(".btn-green-peppers").toggleClass("active")
        $(".green-pepper").toggle();
        $("li:contains($1 green peppers)").toggle();
        if ($(".btn-green-peppers").hasClass("active")){
            defaultPrice++;
          }else { defaultPrice--;}
          
          $("#total-price").text(defaultPrice)
        
    });

    $(".btn-sauce").click(function(event){
        $(".btn-sauce").toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        $("li:contains($3 white sauce)").toggle();
        if ($(".btn-sauce").hasClass("active")){
            defaultPrice+=3;
          }else { defaultPrice-=3;}
          
          $("#total-price").text(defaultPrice)
      
    });

    $(".btn-crust").click(function(event){
        $(".btn-crust").toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains($5 gluten-free crust)").toggle();
        if ($(".btn-crust").hasClass("active")){
            defaultPrice+=5;
          }else { defaultPrice-=5;}
          
          $("#total-price").text(defaultPrice)
      });
    
  });



//   $(".all-peperonis > section")
//   $(".all-mushrooms > section")
//   $(".all-green-pappers > section")