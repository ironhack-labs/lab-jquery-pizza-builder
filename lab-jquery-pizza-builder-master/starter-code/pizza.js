// Write your Pizza Builder JavaScript in this file. 
//SIMPLIFY WITH CONSTRUCTS

values = {
    peperoni: 1,
    mushrooms: 1,
    gpepers: 1,
    whitesauce: 3,
    glutenfree: 5,
    statepep: true,
    statmush: true,
    statgpep: true,
    statwhites: true,
    statcrust: true,
}


function activatePeperoni(){
    
    $(".pep").toggle();
    $("#pepperoni").toggle();
    
    if(values.statepep == true){
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 -= values.peperoni;
        $("#strong").html("$"+ aux2.toString());
        values.statepep = false;
    }
    else{
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 += values.peperoni;
        $("#strong").html("$"+ aux2.toString());
        values.statepep = true;
    }
}
function activateMushrooms(){
    $(".mushroom").toggle();
    $("#mushroomss").toggle();
    
    if(values.statmush == true){
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 -= values.mushrooms;
        $("#strong").html("$"+ aux2.toString());
        values.statmush = false;
    }
    else{
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 += values.mushrooms;
        $("#strong").html("$"+ aux2.toString());
        values.statmush = true;
    }
}
function activateGreenPepper(){
    
    $(".green-pepper").toggle();
    $("#greenpeep").toggle();
    
    if(values.statgpep == true){
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 -= values.gpepers;
        $("#strong").html("$"+ aux2.toString());
        values.statgpep = false;
    }
    else{
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 += values.gpepers;
        $("#strong").html("$"+ aux2.toString());
        values.statgpep = true;
    }
}

function activateSauce(){
     
    $("#white-sauce").toggle();
    
    if(values.statwhites == true){
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 -= values.whitesauce;
        $("#strong").html("$"+ aux2.toString());
        values.statwhites = false;
        $(".sauce-white").css("background", "red");
    }
    else{
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 += values.whitesauce;
        $("#strong").html("$"+ aux2.toString());
        values.statwhites = true;
        $(".sauce-white").css("background", "#fff4aa");
    }
}
function activateCrust(){

    $("#crust").toggle();
    
    if(values.statcrust == true){
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 -= values.glutenfree;
        $("#strong").html("$"+ aux2.toString());
        values.statcrust = false;
        $(".crust-gluten-free").css("background", "brown");
    }
    else{
        var aux = $("#strong").text();
        var aux2 = parseInt(aux.slice(1,3), 10);
        aux2 += values.glutenfree;
        $("#strong").html("$"+ aux2.toString());
        values.statcrust = true;
        $(".crust-gluten-free").css("background", "#d3c3bb");
    }
}