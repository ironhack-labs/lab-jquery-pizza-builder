// Write your Pizza Builder JavaScript in this file.

$("document").ready(function(){

    changeSauce()
    changeCrust()

    var total = 13

    function changePepperonni(){
        $(".pepperonnis").toggle() 
        $(".btn-pepperonni").toggleClass("active") 
        if($(".btn-pepperonni").hasClass("active")){ 
            $("#pepperonni-price").html("$1 pepperonni")
            $("#pepperonni-price").toggle()
            total += 1;
            $("#total-price").html(total)
        }
        else{ 
            $("#pepperonni-price").toggle()
            total -=1;
            $("#total-price").html(total)
        }        
    }

    function changeMushrooms(){
        $(".mushrooms").toggle()
        $(".btn-mushrooms").toggleClass("active")
        if($(".btn-mushrooms").hasClass("active")){
            $("#mushroom-price").html("$1 mushrooms")
            $("#mushroom-price").toggle()
            total += 1;
            $("#total-price").html(total)
        }
        else{
            $("#mushroom-price").toggle()
            total -=1;
            $("#total-price").html(total)
        }
    }

    function changePeppers(){
        $(".peppers").toggle()
        $(".btn-green-peppers").toggleClass("active")
        if($(".btn-green-peppers").hasClass("active")){
            $("#pepper-price").html("$1 green peppers")
            $("#pepper-price").toggle()
            total += 1;
            $("#total-price").html(total)
        }
        else{
            $("#pepper-price").toggle()
            total -=1;
            $("#total-price").html(total)
        }
    }

    function changeSauce(){
        $(".btn-sauce").toggleClass("active")
        $(".sauce").toggleClass("sauce-white")
        if($(".btn-sauce").hasClass("active")){
            $("#sauce-price").html("$3 white sauce")
            $("#sauce-price").toggle()
            total += 3;
            $("#total-price").html(total)
        }
        else{
            $("#sauce-price").toggle()
            total -=3;
            $("#total-price").html(total)
        }
    }

    function changeCrust(){
        $(".btn-crust").toggleClass("active")
        $(".crust").toggleClass("crust-gluten-free")
        if($(".btn-crust").hasClass("active")){
            $("#crust-price").html("$5 gluten-free crust")
            $("#crust-price").toggle()
            total += 5;
            $("#total-price").html(total)
        }
        else{
            $("#crust-price").toggle()
            total -=5;
            $("#total-price").html(total)
        }
    }

    $(".btn-pepperonni").click(changePepperonni)
    $(".btn-mushrooms").click(changeMushrooms)
    $(".btn-green-peppers").click(changePeppers)
    $(".btn-sauce").click(changeSauce)
    $(".btn-crust").click(changeCrust)

    $("#total-price").html(total)

})