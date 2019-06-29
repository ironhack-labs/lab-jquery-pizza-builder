// Write your Pizza Builder JavaScript in this file.
$('.btn.btn-pepperonni').click (
    function(){
        $('.pep').toggle("active");
        $(this).toggleClass("active");
        $('.price > ul li:nth-child(1)').toggle();
        if($(this).hasClass('active')){
            getTotalPrice(1);
        }else {
            getTotalPrice(-1);
        }
        })

$('.btn.btn-mushrooms').click (
    function(){
        $('.mushroom').toggle("active");
        $(this).toggleClass("active");
        $('.price > ul li:nth-child(2)').toggle();
        if($(this).hasClass('active')){
            getTotalPrice(1);
        }else {
            getTotalPrice(-1);
        }
    }
)

$('.btn.btn-green-peppers').click (
    function(){
        $('.green-pepper').toggle("active")
        $(this).toggleClass("active");
        $('.price > ul li:nth-child(3)').toggle();
        if($(this).hasClass('active')){
            getTotalPrice(1);
        }else {
            getTotalPrice(-1);
        }
    }
)

$('.btn.btn-sauce').click (
    function(){
        $('.sauce').toggleClass("sauce-white")
        $(this).toggleClass("active");
        $('.price > ul li:nth-child(4)').toggle();
        if($(this).hasClass('active')){
            getTotalPrice(3);
        }else {
            getTotalPrice(-3);
        }
    }
)

$('.btn.btn-crust').click (
    function(){
        $('.crust').toggleClass("crust-gluten-free")
        $(this).toggleClass("active");
        $('.price > ul li:nth-child(5)').toggle();
        if($(this).hasClass('active')){
            getTotalPrice(5);
        }else {
            getTotalPrice(-5);
        }
    }
)

function getTotalPrice(itemPrice){
    let totalPriceElement = $('.price > strong');
    let totalPrice = Number((totalPriceElement).text().slice(1));
    totalPrice += itemPrice;
    totalPriceElement.text("$" + totalPrice);
    
}