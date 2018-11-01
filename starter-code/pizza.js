// Write your Pizza Builder JavaScript in this file.

$(function() {
    $(".green-pepper").hide();
    $(".mushroom").hide();
    $(".pep").hide();
    $(".price li:contains(sauce)").hide();
    $(".price li:contains(gluten)").hide();
    $(".price strong").prop("innerText", "$13");


    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active")
        if ($(".btn-green-peppers").hasClass("active")) {
            $(".price li:contains(peppers)").hide()
        } else {
            $(".price li:contains(peppers)").show()
        }
    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active")
        if ($(".btn-mushrooms").hasClass("active")) {
            $(".price li:contains(mushrooms)").hide()
        } else {
            $(".price li:contains(mushrooms)").show()
        }
    });

    $(".btn-pepperonni").click(function() {
        $(".pep").toggle()
        $(".btn-pepperonni").toggleClass("active");
        if ($(".btn-pepperonni").hasClass("active")) {
            $(".price li:contains(pepperonni)").hide()
        } else {
            $(".price li:contains(pepperonni)").show()
        }
    });

    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");


    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free")
        $(".btn-crust").toggleClass("active")
        $(".price li:contains(gluten)").toggle()
    });

    $(".btn-sauce").click(function() {
        $(".sauce").toggleClass("sauce-white")
        $(".btn-sauce").toggleClass("active")
        $(".price li:contains(sauce)").toggle()
    });



    

  });