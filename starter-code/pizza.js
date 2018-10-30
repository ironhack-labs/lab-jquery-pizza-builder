// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    // $(".btn").click(function(){

    //     if($( this ).hasClass( "btn-pepperonni" )){
    //         $(".pep").toggle()
    //     }
       
    // });
    
    // $(".btn").click(function(){
         
    //     if($( this) .hasClass ( "btn-mushrooms")){
    //        $(".mushroom").toggle()
    //     }
        
    // })
    
    // $(".btn").click(function(){
         
    //     if($( this) .hasClass ( "btn-green-peppers")){
            
    //         $(".green-pepper").toggle()
    //     }
        
    // });
    // iteration 2
    
    $(".crust").removeClass("crust-gluten-free");
    
    $(".sauce").removeClass("sauce-white");
    
    // iteration 3
    
    //$(".btn").click(function(){
    //    $(".pep").toggle()
    //})
    
    
    $(".btn-pepperonni").click(function(){
        $(".pep").toggle()
        $(".btn-pepperonni").toggleClass("active")
        $(".price li:nth-child(1)").toggle()

        var total = 0;
        
        $(".price li").each(function() {
            var liHtml = $( this ).text()
            var thePrice = parseInt(liHtml[1])
            total = total + thePrice

            // console.log(total)
            
            $(".total[1]").add(total)
        
        })
    })  




    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle()
        $(".btn-mushrooms").toggleClass("active")
        $(".price li:nth-child(2)").hide()
    })
    
    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle()
        $(".btn-green-peppers").toggleClass("active")
        $(".price li:nth-child(3)").toggle()
    })
    
    // itieration 4
    
    
    
    
    
    //}
    
    
    //$('#someid').toggleClass('active');
    
    //$("#show").click(function(){
       // $("p").show();
    //})    

})