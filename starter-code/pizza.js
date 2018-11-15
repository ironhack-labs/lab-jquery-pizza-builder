// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
   
  //Variable global que almacenara el precio
  
  var precio = parseInt($(".panel strong").html().replace("$",""));
  var result = 0;
  var acumulado = 13;
  
  //Pizza default (Con salsa blanca y gluten escondidos)
  $(".sauce").removeClass("sauce-white")
  $("aside li:nth-child(4)").css("display","none");
  $(".btn-sauce").removeClass("active")
  $(".crust").removeClass("crust-gluten-free")
  $("aside li:nth-child(5)").css("display","none");
  $(".btn-crust").removeClass("active")
  $(".panel strong").html("$"  + "13");
  //Pepperoni
  $(".btn-pepperonni").click(function(event){
     $(".pep").toggle("show")
     $(".btn-pepperonni").toggleClass("active")
    //Evento de Toggle
       $("aside li:nth-child(1)").toggle("slow", function(){
        GetPrices(this);
       });

   });

    $(".btn-mushrooms").click(function(event){
        $(".mushroom").toggle("show")
        $(".btn-mushrooms").toggleClass("active")
    
        //Evento de toggle
        $("aside li:nth-child(2)").toggle("slow", function(){ 
          GetPrices(this);
         });
     });

     $(".btn-green-peppers").click(function(event){
        $(".green-pepper").toggle("show")
        $(".btn-green-peppers").toggleClass("active")
        //Evento de toggle
          $("aside li:nth-child(3)").toggle("slow", function(){
            GetPrices(this);
            });

     });


      $(".btn-sauce").click(function(event){
         $(".sauce").toggleClass("sauce-white")
         $(".btn-sauce").toggleClass("active")
    
      //Evento de toggle
        $("aside li:nth-child(4)").toggle("slow", function(){
          GetPrices(this);
         });
        });

  //Aqui es Crust
  $(".btn-crust").click(function(event){
    $(".crust").toggleClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active")
  
   var glutenFree = parseInt($('aside li:nth-child(5)').html().substring(1,2));
   //Evento de Toggle
  $("aside li:nth-child(5)").toggle("slow", function(){
    GetPrices(this);  
     
  });        
});
function GetPrices(element){
  
  precioElemento = parseInt(element.innerHTML.substring(1,2));
  if($(element).is(":visible")){
    //Si es visible sumamos el precio
     result =  acumulado + precioElemento;
    $(".panel strong").html("$"  + result.toString());
    acumulado = result;
} else{
    //si es invisible restamos
     result =  acumulado - precioElemento ;
    $(".panel strong").html("$"  + result.toString());
    acumulado = result;
}
}
})