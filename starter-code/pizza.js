// Write your Pizza Builder JavaScript in this file.
Vue.component("green-pp", {
  template: '<section  class="green-pepper two"></section>'
});

// Write your Pizza Builder JavaScript in this file.
var app5 = new Vue({
  el: "#app5",
  data: {
    // ingredientes
    greenPP: true,
    mush: true,
    pepperonni: true,
    Wsauce: true,
    cheese: true,

    // botones activados
    isActivep: true,
    isActivem: true,
    isActivegm: true,
    isActiveWs: true,

    // precio de los ingredientes
    pricePP: true,
    priceMush: true,
    priceGreenP: true,
    priceWS: true,
    priceGfree: true,
    price: 10
  },
  totalPrice: function() {
    return (price = 5);
  },
  methods: {
    escondeElgreenPP: function() {
      this.greenPP = !this.greenPP;
      this.priceGreenP = !this.priceGreenP;
      this.isActivegm = !this.isActivegm;
    },
    escondeElMush: function() {
      this.mush = !this.mush;
      this.priceMush = !this.priceMush;
      this.isActivem = !this.isActivem;
    },
    escondeElPepe: function() {
      this.pepperonni = !this.pepperonni;
      this.pricePP = !this.pricePP;
      this.isActivep = !this.isActivep;
    },
    escondeWSauce: function() {
      this.Wsauce = !this.Wsauce;
      this.priceWS = !this.priceWS;
      this.isActiveWs = !this.isActiveWs;
    },
    escondeCheese: function() {
      this.cheese = !this.cheese;
      this.priceGfree = !this.priceGfree;
    }
  }
});



