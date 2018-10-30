// Write your Pizza Builder JavaScript in this file.
let cart = [
     {
        name: "pepperonni",
        class: "pep",
        price: 1,
        priceID: "p1",
        isTopping: true
    },
    {
        name: "mushrooms",
        class: "mushroom",
        price: 1,
        priceID: "p2",
        isTopping: true
    },
    {
        name: "green Peppers",
        class: "green-pepper",
        price: 1,
        priceID: "p3",
        isTopping: true
    },
    {
        name: "white Sauce",
        class: "sauce-white",
        price: 3,
        priceID: "p4",
        isTopping: true
    },
    {
        name: "gluten-Free Crust",
        class: "crust-gluten-free",
        price: 5,
        priceID: "p5",
        isTopping: true
    }
];

renderPizza()
renderPrice()
renderTotal()

$(".btn").click(function(){
    $(this).toggleClass("active")
    switch(this.classList[1]){
        case "btn-pepperonni":
        toggleTopping(cart.find((x) => {return x.name === 'pepperonni'}))
        break;
        case "btn-mushrooms":
        toggleTopping(cart.find((x) => {return x.name === 'mushrooms'}))
        break;
        case "btn-green-peppers":
        toggleTopping(cart.find((x) => {return x.name === 'green Peppers'}))
        break;
        case "btn-crust":
        toggleTopping(cart.find((x) => {return x.name === 'gluten-Free Crust'}))
        break;
        case "btn-sauce":
        toggleTopping(cart.find((x) => {return x.name === 'white Sauce'}))
        break;
     }
     renderPizza()
     renderPrice()
     renderTotal()
    //  console.log(cart)
})

function toggleTopping(item){
    item.isTopping ? item.isTopping=false : item.isTopping=true
}

function renderPizza(){
    for(i of cart){
        if(i.name == "gluten-Free Crust" ){
            if(i.isTopping == false){
                $(".crust").addClass(i.class)
            }else if(i.isTopping == true){
                $(".crust").removeClass(i.class)
            }
        }else if(i.isTopping == false){
            $("."+ i.class).hide()
        }else if(i.isTopping == true){
            $("."+ i.class).show()
        }
    }
}

function renderPrice(){
    for(i of cart){
        if(i.isTopping == false){
            $("#"+ i.priceID).css("text-decoration", "line-through")
        }else if(i.isTopping == true){
            $("#"+ i.priceID).css("text-decoration", "none")
        }
    }
}

function renderTotal(){
    let total = cart.filter(item => {return item.isTopping == true} )
    let res = total.reduce( (accumulator, currentValue) => {return Number(accumulator)   + Number(currentValue.price)}, 0)
    console.log(res)
    $("#total").text(` $ ${res+10}`)
}