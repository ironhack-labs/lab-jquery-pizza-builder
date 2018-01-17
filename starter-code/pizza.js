 $(document).ready(function () {

//     // $(".pep").removeClass();
//     //$(".green-pepper").hide();
    
//     // //$(".mushroom").removeClass();
//     // $(".btn-pepperoni").toggleClass("disabled");  
//     //     // $( ).addClass(".btn-pepperoni.active")

//     $(".btn-pepperonni").click(function (event) {

//         $(".pep").toggleClass("visible");
//         $(".btn-pepperonni").toggleClass("active");
//         $("aside ul li:first-child").toggleClass("visible")

//     });
//     $(".btn-green-peppers").click(function (event) {

//         $(".green-pepper").toggleClass("visible");
//         $(".btn-green-peppers").toggleClass("active")

//     });
//     $(".btn-mushrooms").click(function (event) {

//         $(".mushroom").toggleClass("visible");
//         $(".btn-mushrooms").toggleClass("active")

//     });

//     $(".btn-sauce").click(function (event) {

//         $(".sauce-white").toggleClass("visible");
//         $(".btn-sauce").toggleClass("active")

//     });
//     $(".btn-crust").click(function (event) {

//         $(".crust").toggleClass("crust-gluten-free");
//         $(".btn-crust").toggleClass("active")
//     });




    $(".pep").hide();
    $(".green-pepper").addClass("pimientos");
    $(".pimientos").removeClass("green-pepper");
    $(".mushroom").hide();
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    var totalprice=0;
    function render(price){
        totalprice+=price;
        $("strong").html("$"+totalprice);
    }

    render(10);
    
    $("button").removeClass("active")
    $(".btn-green-peppers").click(function(){
        $(".pimientos").toggleClass("green-pepper");
        //$("aside > il:nth-child(3)").toggleClass("il:nth-child(3)")
        $(".btn-green-peppers").toggleClass("active");
        if($(".pimientos +.green-pepper)")){
            render(1);
        }else {
            render(-1);
        }


    })
    $(".btn-pepperonni").click(function(){
        $(".btn-pepperonni").toggleClass("active")
       if ( $(".pep").css("display") ==="none"){
           $(".pep").show();
           render(1);

       }else{
        $(".pep").hide();
        render(-1);
       }
        })
        $(".btn-mushrooms").click(function(){
            $(".btn-mushrooms").toggleClass("active")
           if ( $(".mushroom").css("display") ==="none"){
               $(".mushroom").show();
               render(1);
    
           }else{
            $(".mushroom").hide();
            render(-1);
           }
            })

            $(".btn-sauce").click(function(){
                $(".btn-sauce").toggleClass("active")
                $(".sauce").toggleClass("sauce-white");
            })
            $(".btn-crust").click(function(){
                $(".btn-crust").toggleClass("active")
                $(".crust").toggleClass("crust-gluten-free");
            })
 // Write your Pizza Builder JavaScript in this file.
});