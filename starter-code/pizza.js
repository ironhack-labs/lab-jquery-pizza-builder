//buttons to remove / add toppings

//button that removes and add the pepperonni topping
$("button.btn-pepperonni").click(function(){
    $(".pep").toggle(); // on click the .pep class toggles

    //this if/else checks if the class is active or not and decides based on that to add or remove a <li> item
    if (this.className === "btn btn-pepperonni active"){
        $("aside ul").append(`<li id="pep">$<span class="toppingprice">1</span> pepperonni</li>`);
    }
    else {
        $("#pep").remove();
    }
})

//button that removes and add the mushroom topping
$("button.btn-mushrooms").click(function(){
    $(".mushroom").toggle();// on click the .mushroom class toggles

    //this if/else checks if the class is active or not and decides based on that to add or remove a <li> item
    if (this.className === "btn btn-mushrooms active"){
        $("aside ul").append(`<li id="mush">$<span class="toppingprice">1</span> mushrooms</li>`);
    }
    else {
        $("#mush").remove();
    }
})

//button that removes and add the grn-peppers topping
$("button.btn-green-peppers").click(function(){
    $(".green-pepper").toggle();// on click the .grnpepper class toggles

    //this if/else checks if the class is active or not and decides based on that to add or remove a <li> item
    if (this.className === "btn btn-green-peppers active"){
        $("aside ul").append(`<li id="grnpep">$<span class="toppingprice">1</span> green peppers</li>`);
    }
    else {
        $("#grnpep").remove();
    }
})

//button that removes and add the white-sauce topping
$("button.btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white"); // on click the .sauce class toggles (by default inactive)

    //this if/else checks if the class is active or not and decides based on that to add or remove a <li> item
    if (this.className === "btn btn-sauce active"){
        $("aside ul").append(`<li id="whiteS">$<span class="toppingprice">3</span> white sauce</li>`);
    }
    else {
        $("#whiteS").remove();
    }
    
})

//button that removes and add the gluten-free-crust topping
$("button.btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");// on click the .crust class toggles (by default inactive)

    //this if/else checks if the class is active or not and decides based on that to add or remove a <li> item
    if (this.className === "btn btn-crust active"){
        $("aside ul").append(`<li id="gltcrst">$<span class="toppingprice">5</span> gluten-free crust</li>`);
    }
    else {
        $("#gltcrst").remove();
    }
})

//button that toggles the stat (active/inactive) of all buttons onclick
$(".btn").click(function(){
    $(this).toggleClass("active"); //state is toggled on click 
    
    //function to update the totalprice by ID at every buttonclick.
    var sum = 0;
    $('.toppingprice').each(function(){
    sum += parseFloat(this.innerHTML);
    
    });
    $("#total").html(sum);
})

