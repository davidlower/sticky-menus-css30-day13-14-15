$("document").ready(function() {
   $(".go-back-btn").hide();

   $(".sticky-footer-btn").on("click", function() {
      $(".sticky-footer-btn").hide();
      $(".content-container").hide();
      $(".go-back-btn").show();
   });

   $(".go-back-btn").on("click", function() {
      $(".go-back-btn").hide();
      $(".content-container").show();
      $(".sticky-footer-btn").show();
   });
});