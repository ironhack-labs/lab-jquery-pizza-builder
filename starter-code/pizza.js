var univers = new Vue ({
    el: "#app",
    data: {
        hidepepperonni:  true,
        hidermushroom:   true,
        greenPappers:    true,
        WhiteSauce:      true,
        GlutenFree:      true,
        cheesePizza:     true,
        totalPizza:      21,
    },
    methods: {
        hide: function(){
            this.hidepepperonni   =   !this.hidepepperonni
            if (!this.hidepepperonni == true) {
              return this.totalPizza = this.totalPizza - 1
            }else if (!this.hidepepperonni == false) {
              return this.totalPizza = this.totalPizza + 1
            }
        },
        hide2: function(){
            this.hidermushroom    =   !this.hidermushroom
            if (!this.hidermushroom == true) {
              return this.totalPizza = this.totalPizza - 1
            }else if (!this.hidermushroom == false) {
              return this.totalPizza = this.totalPizza + 1
            }
        },
        hide3: function(){
            this.greenPappers     =   !this.greenPappers
            if (!this.greenPappers == true) {
              return this.totalPizza = this.totalPizza - 1
            }else if (!this.greenPappers == false) {
              return this.totalPizza = this.totalPizza + 1
            }
        },
        hide4: function(){
            this.WhiteSauce       =   !this.WhiteSauce
            if (!this.WhiteSauce){
                alert("this pizza is whit chees by defult")
            }
            return this.WhiteSauce = true;
        },
        hide5: function(){
            this.GlutenFree        =   !this.GlutenFree
            if (!this.GlutenFree){
                alert( "this pizza is gluten free")
            };
            return this.GlutenFree = true;
        },
      }
})
