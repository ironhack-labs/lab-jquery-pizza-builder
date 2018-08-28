// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

    var total = 10;

    $(function() {
        $('.sauce-white').toggle()
    });

    if($("section .crust .sauce").hasClass("sauce-white") == false) {
        $(function() {
            $(".btn-sauce").removeClass('active')
       }); $(function() {
           $('.panel ul li:contains("white")').toggle()
       })
    };

    $(function() {
        $('.crust-gluten-free').removeClass('crust-gluten-free')
    });

    if($("section .crust").hasClass("crust-gluten-free") == false) {
        $(function() {$(".btn-crust").removeClass('active')
       })
       $(function() {
        $('.panel ul li:contains("gluten-free")').toggle()
    })
    };
    if($(".btn-pepperonni").hasClass("active")) {
        total++;
    };
    if($(".btn-mushrooms").hasClass("active")) {
        total++;
    };
    if($(".btn-green-peppers").hasClass("active")) {
        total++;
    };
    if($(".btn-sauce").hasClass("active")) {
        total+=3;
    };
    if($(".btn-crust").hasClass("active")) {
        total+=5;
    };

    $(function() {
        console.log($('.panel strong')[0].innerHTML );
        $('.panel strong')[0].innerHTML = "total"
    });

          

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle()
        $(".btn-pepperonni").toggleClass("active")
        $('.panel ul li:contains("pepperonni")').toggle()
    });

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle()
        $(".btn-mushrooms").toggleClass("active")
        $('.panel ul li:contains("mushrooms")').toggle()
    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle()
        $(".btn-green-peppers").toggleClass("active")
        $('.panel ul li:contains("green")').toggle()
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free")
        $(".btn-crust").toggleClass("active")
        $('.panel ul li:contains("gluten-free")').toggle()

    });

    $(".btn-sauce").click(function(){
        $(".sauce").toggle()
        $(".btn-sauce").toggleClass("active")
        $('.panel ul li:contains("white")').toggle()
    });

    












})
