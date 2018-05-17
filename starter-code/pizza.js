// Write your Pizza Builder JavaScript in this file.


//white-sauce btn
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active")
$(".btn-sauce").click(function(){
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
     if($(".sauce-white").css("display") === "none") {
         $(".sauce-white").css("display","block")
         
         
     } else {
         $(".sauce-white").css("display","none") 
         
        
     }    
     $("strong").text("$"+ sumTotal) 
})

//Crust btn

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active")

 $(".btn-crust").click(()=>{
    $(".btn-crust").toggleClass("active")
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
        
    } else {
        $(".crust").addClass("crust-gluten-free");   
        
      }

});


//pepperonni btn

$(".btn-pepperonni").click(function(){
  $(".btn-pepperonni").toggleClass("active")
  if($(".pep").css("display") === "none") {
      $(".pep").css("display","block")
      liPepperonni.css("display", "block")
      sumTotal += precioPepperonni;
     
      
     
  } else {
      $(".pep").css("display","none") 
      
  }    
});

//Mushrrooms

$('.btn-mushrooms').click(function(){
  $(".btn-mushrooms").toggleClass("active")
  if($(".cap").css('display') === 'none') {
      $(".cap").css("display","block") 
      
  } else {
      $(".cap").css("display","none") 
  }
});

$(".btn-green-peppers").click(function(){
  $(".btn-green-peppers").toggleClass("active")
  if($(".green-pepper").css("display") === "none") {
      $(".green-pepper").css("display","block") 
  
  } else {
      $(".green-pepper").css("display","none") 
      
  }    

})
