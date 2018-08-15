// Write your Pizza Builder JavaScript in this file.
var sum = 13;
$("strong").html("$" + sum);

$(".btn-green-peppers").click(function(){
    var clickedBtn = this;
    $(".green-pepper").toggle(".green-pepper");

        if ($(clickedBtn).hasClass("active")) {
        $(clickedBtn).removeClass("active");
        $("li:contains('$1 green peppers')").hide();
        sum -=1;
        $("strong").html("$" + sum)
        }
            else {
                $(clickedBtn).addClass("active");
                $("li:contains('$1 green peppers')").show();
                sum += 1;
                $("strong").html("$" + sum);
            }
});
 
$(".btn-pepperonni").click(function(){
    var clickedBtn = this;
    $(".pep").toggle(".pep");
        if ($(clickedBtn).hasClass("active")) {
            $(clickedBtn).removeClass("active");
            $("li:contains('$1 pepperonni')").hide();
            sum -=1;
            $("strong").html("$" + sum);
       }
            else {
                $(clickedBtn).addClass("active");
                $("li:contains('$1 pepperonni')").show();
                sum +=1;
                $("strong").html("$" + sum);
                };
});

$(".btn-mushrooms").click(function(){
    var clickedBtn = this;
    $(".mushroom").toggle(".mushroom");
        if ($(clickedBtn).hasClass("active")) {
            $(clickedBtn).removeClass("active");
            $("li:contains('$1 mushrooms')").hide();
            sum -=1;
            $("strong").html("$" + sum);
        }
            else {
                $(clickedBtn).addClass("active");
                $("li:contains('$1 mushrooms')").show();
                sum +=1;
                $("strong").html("$" + sum);
                };
});
    
// Iteration 2

// Regular sauce and crust by default
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
$("li:contains('$3 white sauce')" ).hide();
$("li:contains('$5 gluten-free crust')" ).hide();

// Options to add gluten-free & white sauce for the user
$(".btn-sauce").click(function(){
    var clickedBtn = this;
        if ($(clickedBtn).hasClass("active")) {
            $(".sauce").removeClass("sauce-white");
            $(clickedBtn).removeClass("active");
            $("li:contains('$3 white sauce')" ).hide();
            sum -=3;
            $("strong").html("$" + sum);
       }
            else {
                $(".sauce").addClass("sauce-white");
                $(clickedBtn).addClass("active");
                $("li:contains('$3 white sauce')" ).show();
                sum +=3;
                $("strong").html("$" + sum);
                };
        }) ;

$(".btn-crust").click(function(){
    var clickedBtn = this;
        if ($(clickedBtn).hasClass("active")) {
            $(".crust").removeClass("crust-gluten-free");
            $(clickedBtn).removeClass("active");
            $("li:contains('$5 gluten-free crust')" ).hide();
            sum -=5;
            $("strong").html("$" + sum)
        }
            else {
            $(".crust").addClass("crust-gluten-free");
            $(clickedBtn).addClass("active");
            $("li:contains('$5 gluten-free crust')" ).show();
            sum +=5;
                $("strong").html("$" + sum);
            };
}) 



