// Write your Pizza Builder JavaScript in this file.
$('document').ready(() => {
    $('.sauce').removeClass('sauce-white');
    $('.crust').removeClass('crust-gluten-free');
    //add peperoni
    $('.btn-pepperonni').click((e) =>{
        var $this = $(e.currentTarget);
        $this.toggleClass('active');
        $('.pep').toggle('btn-pepperoni');
        $('.price li:contains(pepperonni)').toggle(600);
    });

    //add mushrooms
    $('.btn-mushrooms').click((e) => {
        var $this = $(e.currentTarget);
        $this.toggleClass('active');
        $('.mushroom').toggle();
        $('.price li:contains(mushroom)').toggle(600);
    });

    //add green-pepper
    $('.btn-green-peppers').click((e) => {
        var $this = $(e.currentTarget);
        $this.toggleClass('active');
        $('.green-pepper').toggle();
        $('.price li:contains(green)').toggle(600);
    });

    //add white-sauce
    $('.btn-sauce').click((e) => {
        var $this = $(e.currentTarget);
        $this.toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
        $('.price li:contains(sauce)').toggle(600);
    });

    //add gluten free crust
    $('.btn-crust').click((e) => {
        var $this = $(e.currentTarget);
        $this.toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
        $('.price li:contains(gluten)').toggle(600);
    });
})