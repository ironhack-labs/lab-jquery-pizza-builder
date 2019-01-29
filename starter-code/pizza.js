// Write your Pizza Builder JavaScript in this file.
// $('.btn').click(function(){
    // $('.pep').hide();// each click will change the class from hidden to show
//     $('.btn-pepperonni').toggleClass('active');
// });

$(document).ready(function(){
    var total = 21;
    var pepperoni = true;
    var mushrooms = true;
    var greenPeppers = true;
    var whiteSauce = true;
    var crust = true;

    $('.btn-pepperonni').on('click', function(ele){
        $('.pep').toggle();
        $('.btn-pepperonni').toggleClass('active');
        $('#pepperonePrice').toggle();

        let price = $(ele.currentTarget).data("price")
        if(pepperoni){
            total -= price;     
        }else{
            total += price;
        }
        pepperoni = !pepperoni;
        $('strong').text("$" +total);


    });

    $('.btn-mushrooms').on('click', function(ele){
        $('.mushroom').toggle();
        $('.btn-mushrooms').toggleClass('active');
        $('#mushroomsPrice').toggle();

        let price = $(ele.currentTarget).data("price")
        if(mushrooms){
            total -= price;     
        }else{
            total += price;
        }
        mushrooms = !mushrooms;
        $('strong').text("$" + total);
    });

    $('.btn-green-peppers').on('click', function(ele){
        $('.green-pepper').toggle();
        $('.btn-green-peppers').toggleClass('active');
        $('#peppersPrice').toggle();

        let price = $(ele.currentTarget).data("price")
        if(greenPeppers){
            total -= price;     
        }else{
            total += price;
        }
        greenPeppers = !greenPeppers;
        $('strong').text("$" + total);

    });

    $('.btn-sauce').on('click', function(ele){
        $('.sauce-white').toggle();
        $('.btn-sauce').toggleClass('active');
        $('#saucePrice').toggle();

        let price = $(ele.currentTarget).data("price")
        if(whiteSauce){
            total -= price;     
        }else{
            total += price;
        }
        whiteSauce = !whiteSauce;
        $('strong').text("$" + total);

    });

    $('.btn-crust').on('click', function(ele){
        $('.crust').toggle();
        $('.btn-crust').toggleClass('active');
        $('#crustPrice').toggle();

        let price = $(ele.currentTarget).data("price")
        if(crust){
            total -= price;     
        }else{
            total += price;
        }
        crust = !crust;
        $('strong').text("$" + total);
    });

});


    