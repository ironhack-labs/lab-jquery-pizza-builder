// Write your Pizza Builder JavaScript in this file.
$(function () {
    calculate();

    $(".price").find("li:nth-child(4)").hide();
    $(".price").find("li:nth-child(5)").hide();

    $(".btn-pepperonni").click(function () {
        $(".btn-pepperonni").toggleClass("active")
        $(".pep").toggle();
        $(".price").find("li:nth-child(1)").toggle();
        calculate();
    })

    $(".btn-mushrooms").click(function () {
        $(".btn-mushrooms").toggleClass("active")
        $(".mushroom").toggle();
        $(".price").find("li:nth-child(2)").toggle();
        calculate();
    })

    $(".btn-green-peppers").click(function () {
        $(".btn-green-peppers").toggleClass("active")
        $(".green-pepper").toggle()
        $(".price").find("li:nth-child(3)").toggle();
        calculate();
    })

    $(".sauce").removeClass("sauce-white")
    $(".btn-sauce").removeClass("active")
    $(".btn-sauce").click(function () {
        $(".btn-sauce").toggleClass("active")
        $(".sauce").toggleClass("sauce-white")
        $(".price").find("li:nth-child(4)").toggle();
        calculate();
    })




    $(".btn-crust").removeClass("active")
    $(".btn-crust").click(function () {
        $(".btn-crust").toggleClass("active")
        $(".crust").toggleClass("crust-gluten-free")
        $(".price").find("li:nth-child(4)").toggle();
        $(".price").find("li:nth-child(5)").toggle();
        calculate();
    })



    function calculate() {

        var total = 10;
        for (var i = 1; i < 6; i++) {

            if ($(".price").find("li:nth-child(" + i + ")").is(":visible")) {
                total += parseInt($(".price").find("li:nth-child(" + i + ")").html().replace("$", "").substring(0, 2))
            }
        }


        console.log(total)
        $("strong").html("$" + total)

    }




});