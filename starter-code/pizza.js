// Write your Pizza Builder JavaScript in this file.
new Vue({
  el: '#app',
  data: {
    mushroomsVisible: true,
    greenPeppersVisible: true,
    pepperonniVisible: true,
    whiteSauceVisible: true,
  },
  methods: {
    toggleMushrooms: function(){
      this.mushroomsVisible = !this.mushroomsVisible;
    },
    toggleGreenPeppers: function(){
      this.greenPeppersVisible = !this.greenPeppersVisible;
    },
    togglePepperonni: function(){
      this.pepperonniVisible = !this.pepperonniVisible;
    },
    toggleWhiteSauce: function(){
      this.whiteSauceVisible = !this.whiteSauceVisible;
    }

  }
});