$(document).ready(function() {
  $(".slider").on("input change", 
    function() {
    var val = $(".slider").val();
    var grad = "linear-gradient(to right, blue " + val + "%, lightgray " + val + "%)";
    $(this).css("background", grad);
  });
}); 