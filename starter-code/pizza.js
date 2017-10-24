// Write your Pizza Builder JavaScript in this file.
function init() {
  // Add or remove pepperoni
  // Check the pepperoni button status
  var buttonPep = $(".btn-pepperonni");
  buttonPep.click(function(event) {
    if ($(".btn-pepperonni").hasClass("active")) {
      $("#pizza .pep").css({
        display: "none"
      });
    } else {
      $("#pizza .pep").css({
        display: " "
      });
    }
    $(".btn-pepperonni").toggleClass("active");
  });
}

  $(document).ready(init);
