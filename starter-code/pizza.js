// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $(".crust").removeClass("crust-gluten-free")
    $(".sauce").removeClass("sauce-white")
    var totalPrice = 0

    $(".btn-pepperonni").on("click", function () {

        if ($(".pep").css("display") === "none") {
            $(".pep").css("display", "block")
            $(".btn-pepperonni").addClass("active")
        } else {
            $(".btn-pepperonni").removeClass("active")
            $(".pep").css("display", "none")         
            
            $("li:contains('pepperonni')").remove()	
  
        }
        getTotal()
    })




    $(".btn-mushrooms").on("click", function () {
        if ($(".mushroom").css("display") === "none") {
            $(".mushroom").css("display", "block")
            $(".btn-mushrooms").addClass("active")
        } else {
            $(".btn-mushrooms").removeClass("active")
            $(".mushroom").css("display", "none")
        }
        getTotal()
    })

    $(".btn-green-peppers").on("click", function () {
        if ($(".green-pepper").css("display") === "none") {
            $(".green-pepper").css("display", "block")
            $(".btn-green-peppers").addClass("active")
        } else {
            $(".btn-green-peppers").removeClass("active")
            $(".green-pepper").css("display", "none")
        }
        getTotal()
    })

    $(".btn-sauce").on("click", function () {
        $(".sauce").addClass("sauce-white")
        getTotal()
    })

    $(".btn-crust").on("click", function () {
        $(".crust").addClass("crust-gluten-free")
        getTotal()

    })

function getTotal (){
    totalPrice = 10
    if ($(".btn-pepperonni").hasClass("active")){
        totalPrice += 1
}
if ($(".btn-mushrooms").hasClass("active")){
         totalPrice += 1
}
if ($(".btn-green-peppers").hasClass("active")){
    totalPrice += 1
}
if ($(".btn-sauce").hasClass("active")){
        totalPrice += 3
    }
    if ($(".btn-crust").hasClass("active")){
        totalPrice += 5
    }
    $("strong").html(totalPrice)
}

    function numberToLetter(num) {
        var stringify = num.toString()
        var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var arr = [];
        var splited = stringify.split("")



        var firstWord = tens[parseInt(splited[0])]
        var secondWord = units[parseInt(splited[1])]

        if (num > 10 && num < 20) {
            return units[num]
        } else {
            return firstWord + " " + secondWord
        }
    }

})