// Write your Pizza Builder JavaScript in this fileboton.on
 

var suma = 10;


$(document).ready(function() {

    $('.btn-pepperonni').on('click', function(){
        $(".btn-pepperonni").toggleClass("active")
        $(".tio li:contains($1 pepperonni)").toggle("display")
        $(".pep").toggleClass("pep-none")
        if ($(".btn-pepperonni").hasClass("active")===true){
            return suma += 1;
        }


    });
    $('.btn-green-peppers').on('click', function(){
        $(".btn-green-peppers").toggleClass("active")
        $(".tio li:contains($1 green peppers)").toggle("display")
        $(".green-pepper").toggleClass("pep-none")
    });
    $('.btn-mushrooms').on('click', function(){
        $(".btn-mushrooms").toggleClass("active")
        $(".tio li:contains($1 mushroom)").toggle("display")

        $(".mushroom").toggleClass("pep-none")
    });
    $('.btn-crust').on('click', function(){
        $(".btn-crust").toggleClass("active")
        $(".tio li:contains($5 gluten-free crust)").toggle("display")

        $(".crust").toggleClass("crust-gluten-free")
    });
    $('.btn-sauce').on('click', function(){
        $(".btn-sauce").toggleClass("active")
        $(".tio li:contains($3 white sauce)").toggle("display")

        $(".sauce").toggleClass("sauce-white")
    });

    
    



   





})


