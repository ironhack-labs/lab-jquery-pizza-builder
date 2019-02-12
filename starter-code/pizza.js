// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $(".crust").removeClass("crust-gluten-free")
    $("li:contains('white sauce')").css("display","none")
    $(".sauce").removeClass("sauce-white")
    $("li:contains('gluten-free crust')").css("display","none")
    var totalPrice = 0

    $(".btn-pepperonni").on("click", function () {

        if ($(".pep").css("display") === "none") {
            $(".pep").css("display", "block")
            $(".btn-pepperonni").addClass("active")
            $("li:contains('pepperonni')").css("display","list-item")
        } else {
            $(".btn-pepperonni").removeClass("active")
            $(".pep").css("display", "none")         
            $("li:contains('pepperonni')").css("display","none")
        }
        getTotal()
    })

    $(".btn-mushrooms").on("click", function () {
        if ($(".mushroom").css("display") === "none") {
            $(".mushroom").css("display", "block")
            $(".btn-mushrooms").addClass("active")
            $("li:contains('mushrooms')").css("display","list-item")
        } else {
            $(".btn-mushrooms").removeClass("active")
            $(".mushroom").css("display", "none")
            $("li:contains('mushrooms')").css("display","none")	
        }
        getTotal()
    })

    $(".btn-green-peppers").on("click", function () {
        if ($(".green-pepper").css("display") === "none") {
            $(".green-pepper").css("display", "block")
            $(".btn-green-peppers").addClass("active")
            $("li:contains('green peppers')").css("display","list-item")
        } else {
            $(".btn-green-peppers").removeClass("active")
            $(".green-pepper").css("display", "none")
            $("li:contains('green peppers')").css("display","none")	
        }
        getTotal()
    })

    $(".btn-sauce").on("click", function () {
        if ($(".sauce").hasClass("sauce-white")) {
            $(".sauce").removeClass("sauce-white")
            $(".btn-sauce").removeClass("active")
            $("li:contains('white sauce')").css("display","none")
        } else {
            $(".sauce").addClass("sauce-white")
            $(".btn-sauce").addClass("active")
            $("li:contains('white sauce')").css("display","list-item")
        }
        getTotal()
    })

    $(".btn-crust").on("click", function () {
        // $(".crust").addClass("crust-gluten-free")
        if ($(".crust").hasClass("crust-gluten-free")) {
            $(".crust").removeClass("crust-gluten-free")
            $(".btn-crust").removeClass("active")
            $("li:contains('gluten-free crust')").css("display","none")
        } else {
            $(".crust").addClass("crust-gluten-free")
            $(".btn-crust").addClass("active")
            $("li:contains('gluten-free crust')").css("display","list-item")
        }
        getTotal()
    })

    function getTotal() {
        totalPrice = 10
        if ($(".btn-pepperonni").hasClass("active")) {
            totalPrice += 1
        }
        if ($(".btn-mushrooms").hasClass("active")) {
            totalPrice += 1
        }
        if ($(".btn-green-peppers").hasClass("active")) {
            totalPrice += 1
        }
        if ($(".btn-sauce").hasClass("active")) {
            totalPrice += 3
        }
        if ($(".btn-crust").hasClass("active")) {
            totalPrice += 5
        }
        $("strong").html(totalPrice + "$")
    }

})