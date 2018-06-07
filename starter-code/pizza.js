 
$(document).ready(function() {
 
    var buttonPepp = $(".btn-pepperonni");
    var buttonMush = $(".btn-mushrooms");
    var buttonGreen = $(".btn-green-peppers");
    var buttonSauce = $(".btn-sauce");
    var buttonCrust = $(".btn-crust");
    
    $('aside ul li:contains($3 white sauce)').toggle();
    $('aside ul li:contains($5 gluten-free crust)').toggle();

   buttonPepp.click(function() {
       $(".pep").toggle();
       $('aside ul li:contains($1 pepperonni)').toggle();
   });
   buttonMush.click(function() {
    $(".mushroom").toggle();
    $('aside ul li:contains($1 mushrooms)').toggle();

    
   });
   buttonGreen.click(function() {
    $(".green-pepper").toggle();
    $('aside ul li:contains($1 green peppers)').toggle();
   })

 

   buttonSauce.removeClass("active");
   buttonCrust.removeClass("active");
   $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");

   buttonSauce.click(function() {
    $(".sauce").toggleClass("sauce-white");
    $('aside ul li:contains($3 white sauce)').toggle();

 
   });

   buttonCrust.click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $('aside ul li:contains($5 gluten-free crust)').toggle();
   });



   $(".btn").click(function() {
    $(this).toggleClass("active");
   });

   $('aside strong').text("$13")
  
   $('.btn').click(function() {
       var price = 13;
       if($(this).hasClass('active')) {
           for ()
        var string = $('aside ul li:contains($(this).text().toLowerClass())').slice(1, 2);
        var string1 = parseInt(string);
        price += string1;
        $('aside strong').text("$" + price);
    //    } else {
    //     price -=  string;
    //     $('aside strong').text("$" + price);
         }
       });
       
   
   console.log(($('.btn-pepperonni').text().toLowerCase()));
 
});

 
