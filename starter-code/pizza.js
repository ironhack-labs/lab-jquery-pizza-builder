// Write your Pizza Builder JavaScript in this file.
 $(document).ready(function(){
    $(".btn-pepperonni.active").click(function() {
        $(".pep").toggle('display');
     });
});
$(document).ready(function(){
    $(".btn-mushrooms.active").click(function() {
        $(".mushroom").toggle('display');
     });
});
$(document).ready(function(){
    $(".btn-green-peppers.active").click(function() {
        $(".green-pepper").toggle('display');
     });
});
// $(document).ready(function(){
//     $(".btn-sauce.active").click(function() {
//         $(".sauce-white").toggle('display');
//      });
// });