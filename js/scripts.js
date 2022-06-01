$(document).ready(function() {
  $("button#darkMode").click(function() {
    $("body").removeClass();
    $("body").addClass("darkMode");
  });

  $("button#lightMode").click(function() {
    $("body").removeClass();
    $("body").addClass("lightMode");

  });
});