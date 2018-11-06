// Write your Pizza Builder JavaScript in this file.

var btnPepperonni = $('.btn-pepperonni')
var btnMushrooms = $('.btn-mushrooms')
var btnPeppers = $('.btn-green-peppers')
var btnSauce = $('.btn-sauce')
var btnCrust = $('.btn-crust')

var sum= 10

var pep = $("[class ^='pep']")
btnPepperonni.on('click', function(){
    btnPepperonni.toggleClass('active')
    pep.toggle()
    //$(".precio").append("<li id='textpep'>$1 pepperonni</li>")
    
    if($("#textpep").length>0){
        $("li").remove(":contains('pepperonni')")
        sum--
    }else{
        $(".precio").append("<li id='textpep'>$1 pepperonni</li>")
        sum ++
    }
    $("strong").text("$"+sum)
    //lipep.toggle()
})

var mush = $("[class ^='mushroom']")
btnMushrooms.on('click', function(){
    btnMushrooms.toggleClass('active')
    mush.toggle()

    if($("#textmush").length>0){
        $("li").remove(":contains('mushrooms')")
        sum--
    }else{
        $(".precio").append("<li id='textmush'>$1 mushrooms</li>")
        sum++
    }
    $("strong").text("$"+sum)
})

var peps = $("[class^='green-pepper']")
btnPeppers.on('click', function(){
    btnPeppers.toggleClass('active')
    peps.toggle()

    if($("#textgreen").length>0){
        $("li").remove(":contains('green')")
        sum--
    }else{
        $(".precio").append("<li id='textgreen'>$1 green peppers</li>")
        sum++
    }
    $("strong").text("$"+sum)
})

var sauce = $("[class^='sauce']")
btnSauce.on('click', function(){
    btnSauce.toggleClass('active')
    sauce.toggleClass('sauce-white')

    if($("#textsauce").length>0){
        $("li").remove(":contains('white')")
        sum -=3
    }else{
        $(".precio").append("<li id='textsauce'>$3 white sauce</li>")
        sum +=3
    }
    $("strong").text("$"+sum)
})

var crust = $("[class^='crust']")
btnCrust.on('click', function(){
    btnCrust.toggleClass('active')
    crust.toggleClass('crust-gluten-free')

    if($("#textglut").length>0){
        $("li").remove(":contains('gluten-free')")
        sum-=5
    }else{
        $(".precio").append("<li id='textglut'>$5 gluten-free-crust</li>")
        sum+=5
    }
    $("strong").text("$"+sum)
})

