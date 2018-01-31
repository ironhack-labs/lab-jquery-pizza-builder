// Write your Pizza Builder JavaScript in this file.


// somehow remove topping to the pizza 

$(document).ready(function() {

    $(".btn-pepperonni").click(function(event) {
        $(".pep").toggle();
    });


    $(".btn-mushrooms").click(function(event) {
        $(".mushroom").toggle();
    });



    $(".btn-green-peppers").click(function(event) {
        $(".green-pepper").toggle();
    });

    $(".btn-sauce").click(function(event) {
        $(".sauce-white").toggle();
    });

    $(".btn-crust").click(function(event) {
        $(".crust").toggleClass("crust-gluten-free");
    });


    $(".btn-pepperonni").click(function (event) {
        $(".btn-pepperonni").toggleClass("active");
    });

    $(".btn-mushrooms").click(function (event) {
        $(".btn-mushrooms").toggleClass("active");
    });

    $(".btn-green-peppers").click(function (event) {
        $(".btn-green-peppers").toggleClass("active");
    });

    $(".btn-sauce").click(function (event) {
        $(".btn-sauce").toggleClass("active");
    });


    $(".btn-crust").click(function (event) {
        $(".btn-crust").toggleClass("active");
    });
    
    // show and hide ingredients on list

    $(".btn-pepperonni").click(function(event) {
        $(".price li:first").toggle();
    });


    $(".btn-mushrooms").click(function(event) {
        $(".price li:nth-child(2)").toggle();
    });


    $(".btn-green-peppers").click(function(event) {
        $(".price li:nth-child(3)").toggle();
    });


    $(".btn-sauce").click(function(event) {
        $(".price li:nth-child(4)").toggle();
    });

    $(".btn-crust").click(function(event) {
        $(".price li:last").toggle();
    });

    var pepperoni=1;
    var mush=1;
    var greenPep=1;
    var white=3;
    var gluten=5;
    
    var totalAmt=21;

    $(".btn-pepperonni").click(function(e){
        if ($(".btn-pepperonni").hasClass("active")) {
          totalAmt+=pepperoni;}
        else {
          totalAmt-=pepperoni;}
        return $("aside.panel>strong").html("$"+totalAmt);
      });
    
    $(".btn-mushrooms").click(function(e){
        if ($(".btn-mushrooms").hasClass("active")) {
            totalAmt+=mush;}
        else {
            totalAmt-=mush;}
        return $("strong").html("$"+totalAmt);
    });
    
    $(".btn-green-peppers").click(function(e){
        if ($(".btn-green-peppers").hasClass("active")) {
            totalAmt+=greenPep;}
        else {
            totalAmt-=greenPep;}
        return $("strong").html("$"+totalAmt);
    });
      
    $(".btn-sauce").click(function(e){
        if ($(".btn-sauce").hasClass("active")) {
            totalAmt+=white;}
        else {
            totalAmt-=white;}
        return $("strong").html("$"+totalAmt);
    });
    
    $(".btn-crust").click(function(e){
        if ($(".btn-crust").hasClass("active")) {
            totalAmt+=gluten;}
        else {
            totalAmt-=gluten;}
        return $("strong").html("$"+totalAmt);
    });
    
    $("strong").html(totalAmt - "$");

  });

  });