// Peperroni
    $(".btn-pepperonni").click(function(e){
        $(".btn-pepperonni").toggleClass("active");
        $(".panel ul li:contains('pepperonni')").toggle();
        $('.pep').toggle();
    });

    // Mushrooms
    $(".btn-mushrooms").click(function(e){
        $(".btn-mushrooms").toggleClass("active");
        $(".panel ul li:contains('mushrooms')").toggle();
        $('.mushroom').toggle();
    });


    // Green-peppers
    $(".btn-green-peppers").click(function(e){
        $(".btn-green-peppers").toggleClass("active");
        $(".panel ul li:contains('green peppers')").toggle();
        $('.green-pepper').toggle();
    });


    // White sauce

        // By default
    var sauceWhite = $(".sauce-white");

    sauceWhite.removeClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".panel ul li:contains('white sauce')").hide();

        //Setting
    $(".btn-sauce").click(function(e){
        sauceWhite.toggleClass("sauce-white");
        $(".panel ul li:contains('white sauce')").toggle();
        $(".btn-sauce").toggleClass("active");
        $("sauce-white").toggle();
    });

    // Crust
        // By default
    var crustGlutenFree = $(".crust-gluten-free");

    crustGlutenFree.removeClass("crust-gluten-free sauce-white");
    $(".btn-crust").toggleClass("active");
    $(".panel ul li:contains('gluten-free crust')").hide();

        //Setting
    $(".btn-crust").click(function(e){
        crustGlutenFree.toggleClass("crust-gluten-free");
        $(".panel ul li:contains('gluten-free crust')").toggle();
        $(".btn-crust").toggleClass("active");
        $("crust-gluten-free").toggle();
    });
