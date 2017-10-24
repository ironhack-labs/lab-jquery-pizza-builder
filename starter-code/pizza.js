// Write your Pizza Builder JavaScript in this file.
function init() {
  // Add or remove pepperoni
  // Check the pepperoni button status
  
  buttonPep.click(function(event) {
    if ($(".btn-pepperonni").hasClass("active")) {
      $("#pizza .pep").css({
        display: "none"
      });
      $(".btn-pepperonni").removeClass("active");
    } else {
      $("#pizza .pep").css({
        display: " "
      });
      $(".btn-pepperonni").addClass("active");
    }

  });
}

  $(document).ready(init);
