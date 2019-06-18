// Write your Pizza Builder JavaScript in this file.
let button1 = $(".btn-pepperonni").eq(0);
let button2 = $(".btn-mushrooms").eq(0);
let button3 = $(".btn-green-peppers").eq(0);
let button4= $(".btn-sauce").eq(0);
let button5= $(".btn-crust").eq(0);

let pepPrice = $(".price li:contains(pepperonni)");
let mushroomsPrice = $(".price li:contains(mushrooms)");
let greenPepperPrice = $(".price li:contains(green)");
let whiteSauce = $(".price li:contains(white)");
let gluFree = $(".price li:contains(gluten-free)");


button1.click(function(){
pepPrice.toggle();
    $(".pep").fadeToggle(1000);
})

button2.click(function(){
    mushroomsPrice.toggle();
    $(".mushroom").fadeToggle(1000);
})

button3.click(function(){
    greenPepperPrice.toggle();
    $(".green-pepper").fadeToggle(1000);
})
;

button4.click(function(){
    whiteSauce.toggle();
    let hasWhiteSauce = $(".sauce").hasClass("sauce-white");
    if (hasWhiteSauce === false){
        $('.sauce').addClass('sauce-white');
        // $('.btn-sauce').addClass('active');
    } else {
        $('.sauce').removeClass('sauce-white');
        // $('.btn-sauce').removeClass('active');
    }
});

    button5.click(function(){
        gluFree.toggle();
        let glutenFree = $(".crust").hasClass("crust-gluten-free");
        if (glutenFree === false){
        $('.crust').addClass('class-gluten-free');
    } else {
        $('.crust').removeClass('crust-gluten-free');
    }
        });

//Add and hide 
 button1.click(function(){
     if (button1.click){
         $(".li").removeClass("price");
     }else {
         $('.li').addClass("price");
     }
 });

 //update price

function calculate(){
    let btnpep = $(".btn-pepperonni").hasClass("active");
    let btnmushroom = $(".btn-mushrooms").hasClass("active");
    let btngreenpep = $(".btn-green-peppers").hasClass("active");
    let btnsauce= $(".btn-sauce").hasClass("active");
    let btncrust= $(".btn-crust").hasClass("active");

    let total = 10;
    if (btnpep){
        total+=1;
    }
    if (btnmushroom){
        total+=1;
    }
    if (btngreenpep){
        total+=1;
    }

    if (btnsauce){
        total+=3;
    }
    if (btncrust){
        total+=5;
    }
    $(".price strong").text(`$${total}`);
}
$(".btn").click(function(){
    $(this).toggleClass("active");
    calculate();
})


