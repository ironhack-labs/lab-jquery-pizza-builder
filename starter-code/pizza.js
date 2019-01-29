// Write your Pizza Builder JavaScript in this file.
var pepperStatus = true;
var mushroomStatus = true;
var pepperoniStatus = true;
var whiteSauce = false;
var gfreeCrust = false;

$('.btn-green-peppers').click(()=>{
    if(pepperStatus == true){
        $('.green-pepper').hide();
        pepperStatus = false;
        $('.btn-green-peppers').removeClass("active");
        $('#greenpepper-price').hide();
    }
    else{
        $('.green-pepper').show();
        pepperStatus = true;
        $('.btn-green-peppers').addClass("active");
        $('#greenpepper-price').show();
    }
});

$('.btn-mushrooms').click(()=>{
    if(mushroomStatus == true){
        $('.mushroom').hide();
        mushroomStatus = false;
        $('.btn-mushrooms').removeClass("active");
        $('#mushroom-price').hide();
    }
    else{
        $('.mushroom').show();
        mushroomStatus = true;
        $('.btn-mushrooms').addClass("active");
        $('#mushroom-price').show();
    }
});

$('.btn-pepperonni').click(()=>{
    if(pepperoniStatus == true){
        $('.pep').hide();
        pepperoniStatus = false;
        $('.btn-pepperonni').removeClass("active");
        $('#pepperonni-price').hide();
    }
    else{
        $('.pep').show();
        pepperoniStatus = true;
        $('.btn-pepperonni').addClass("active");
        $('#pepperonni-price').show();
    }
});

$('.btn-sauce').click(()=>{
    console.log($(this).text);
    if(whiteSauce==true){
        $('.sauce').addClass("sauce-white");
        whiteSauce = false;
        $('.btn-sauce').removeClass("active");
        $('#whitesauce-price').hide();
    }
    else {
        $('.sauce').removeClass("sauce-white");
        whiteSauce = true;
        $('.btn-sauce').addClass("active");
        $('#whitesauce-price').show();
    }
});

$('.btn-crust').click(()=>{
    if(gfreeCrust==true){
        $('.crust').addClass("crust-gluten-free");
        gfreeCrust = false;
        $('.btn-crust').removeClass("active");
        $('#glutenfree-price').hide();
    }
    else {
        $('.crust').removeClass("crust-gluten-free");
        gfreeCrust = true;
        $('.btn-crust').addClass("active");
        $('#glutenfree-price').show();
    }
});
