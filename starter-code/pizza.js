// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    var $greenPepperbtn = $(".btn-green-peppers");
    var $pepperonibtn = $(".btn-pepperonni");
    var $mushroombtn = $(".btn-mushrooms");
    var $saucebtn = $(".btn-sauce");
    var $crustbtn = $(".btn-crust");
    var $greenPepper = $(".green-pepper");
    var $greenPepperli = $(".price li:contains(green)")
    var $pepperonni = $(".pep");
    var $pepperonnili = $(".price li:contains(pepperonni)");
    var $mushroom = $(".mushroom");
    var $mushroomli = $(".price li:contains(mushroom)");
    var $sauce = $(".sauce");
    var $sauceli = $(".price li:contains(sauce)");
    var $crust = $(".crust");
    var $crustli = $(".price li:contains(crust)");
    
    var price = 10;
    var totalprice= 13;
  
    
    
    $crust.removeClass("crust-gluten-free");
    $sauce.removeClass("sauce-white");
    $crustbtn.removeClass("active");
    $saucebtn.removeClass("active");
    $crustli.toggle();
    $sauceli.toggle();
    
    $greenPepperbtn.click(function(){
        $greenPepper.toggle();
        $greenPepperbtn.toggleClass("active");        
        calcPrice($greenPepperbtn, 1, $greenPepperli);
        totalPrice();
        

    })
    
        
    $pepperonibtn.click(function(){
        $pepperonni.toggle();
        $pepperonibtn.toggleClass("active");
        calcPrice($pepperonibtn, 1, $pepperonnili);
        totalPrice();
        
    })


    $mushroombtn.click(function(){
        $mushroom.toggle();
        $mushroombtn.toggleClass("active");
        calcPrice($mushroombtn, 1, $pepperonnili);
        totalPrice();       

    })


    $saucebtn.click(function(){
        $sauce.toggleClass("sauce-white");
        $saucebtn.toggleClass("active");
        calcPrice($saucebtn, 3, $sauceli);
        totalPrice();

    })

    $crustbtn.click(function(){
        $crust.toggleClass("crust-gluten-free");
        $crustbtn.toggleClass("active");
        calcPrice($crustbtn, 5, $crustli);
        totalPrice();
        
    })
    
    function calcPrice(button, productPrice, li){
        li.toggle();
        if(button.hasClass("active")){
            totalprice += productPrice     
        }else{
            totalprice -= productPrice;
        }
    }
  
    function totalPrice(){
        document.querySelector("strong").innerText = "$" + totalprice;
    }
    totalPrice();
    

   



})
