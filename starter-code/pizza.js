    // Write your Pizza Builder JavaScript in this file.
    $(document).ready(function(){

        // remove specific class names
        $(".crust").removeClass("crust-gluten-free");
        $(".sauce").removeClass("sauce-white");

        // remove active for crust and sauce
        $(".btn-crust, .btn-sauce").removeClass("active");

        //hide sauce and crust price
        $(".crust-price, .sauce-price").hide();

        //hide and show ingredient and price
        //repeated functions below, maybe we can declare one function and call it many times?

        getPrice();

        $(".btn-pepperonni").click(function(){
            $(".pep, .pep-price").toggle();
            getPrice();
        });

        $(".btn-mushrooms").click(function(){
            $(".mushroom, .mushroom-price").toggle();
            getPrice();
        });

        $(".btn-green-peppers").click(function(){
            $(".green-pepper, .pepper-price").toggle();
            getPrice();
        });

        //crust and sauce
        $(".btn-sauce").click(function(){
            $(".sauce").toggleClass("sauce-white");
            $(".sauce-price").toggle();
            getPrice();
        });

        $(".btn-crust").click(function(){
            $(".crust").toggleClass("crust-gluten-free");
            $(".crust-price").toggle();
            getPrice();
        });

        //toggle button active state
        $(".btn").click(function(){
            $(this).toggleClass("active");

        });

    



        

    });

//update price total 
//get individual price from text:
//need to calculate properly
function getPrice(){

    var total = 10;


    $(".item-price:visible").each(function( index ) {
        numberPrice = Number($( this ).text().split(" ")[0].replace("$", ""));

        total +=numberPrice;


    });

    $(".panel.price strong").text(total)


}
