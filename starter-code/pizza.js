
$( ".btn" ).click(function() {
    $( this ).toggleClass( "active" );
    // get the array of classes from the button. 
    this.classList.forEach(elm => {
        // find the one who has a btn- in the name... 
        if(elm.includes('-')){
            console.log(elm);
        }
    });
});

$(".btn-pepperonni").click(function(){
    $("#pizza .pep").toggleClass("hide");
});

$(".btn-mushrooms").click(function(){
    $("#pizza .mushroom").toggleClass("hide");
});

$(".btn-green-peppers").click(function(){
    $("#pizza .green-pepper").toggleClass("hide");
});

$(".btn-sauce").click(souceWhite);
$(".btn-crust").click(gluttenFree);

function souceWhite(){
    $("#pizza .crust .sauce").toggleClass("sauce-white");
}

function gluttenFree(){
    $("#pizza .crust").toggleClass("crust-gluten-free");
}

$( document ).ready(function() {
    souceWhite();
    gluttenFree();
    $(".btn").removeClass("active");
    // $(".btn-crust").removeClass("active");
    $( ".price ul li:contains(white)" ).addClass("hide");
    $( ".price ul li:contains(gluten)" ).addClass("hide");
});
