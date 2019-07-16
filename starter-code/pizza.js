// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    //by default the crust is not gluten-free and the sause is not white
    $(".panel.price ul li:nth-child(5)").hide()
    $(".panel.price ul li:nth-child(4)").hide()
    //by default crust and sause has no active class
    $(".btn-crust").toggleClass("active")
    $(".btn-sauce").toggleClass("active")

    var total = 13
    $(".btn-green-peppers").click(function(){
        $("#pizza .green-pepper").toggle()
        $(".btn-green-peppers").toggleClass("active")
        $(".panel.price ul li:nth-child(3)").toggle()
        calculateTotal(".btn-green-peppers",1)
    })
    $(".btn-mushrooms").click(function(){
        $("#pizza .mushroom").toggle()
        $(".btn-mushrooms").toggleClass("active")
        $(".panel.price ul li:nth-child(2)").toggle()
        calculateTotal(".btn-mushrooms",1)
    })
    $(".btn-pepperonni").click(function(){
        $("#pizza .pep").toggle()
        $(".btn-pepperonni").toggleClass("active")
        $(".panel.price ul li:nth-child(1)").toggle()
        calculateTotal(".btn-pepperonni",1)
    })
    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free")
        $(".btn-crust").toggleClass("active")
        $(".panel.price ul li:nth-child(5)").show()
        calculateTotal(".btn-crust",5)
    })
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white")
        $(".btn-sauce").toggleClass("active")
        $(".panel.price ul li:nth-child(4)").show()
        calculateTotal(".btn-sauce",3)
    })

    function calculateTotal (btn,price){
        //debugger
        if ($(btn).hasClass("active") === false){
            total = total - price
        } else {
            total = total + price
        }
        return $(".panel.price strong").html(`$${total}`)
        ///debugger
    }


})
