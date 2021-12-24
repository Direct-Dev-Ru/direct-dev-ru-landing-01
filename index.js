// Import stylesheets
import './style.css';

jQuery(document).ready(function ($) {
  $("nav").on("click", function () {
    var movePos;
    if ($(this).hasClass("down")) {
      movePos =
        $(window).scrollTop() +
        document.getElementsByTagName("section")[0].clientHeight;
      console.log(
        $(window).scrollTop(),
        document.getElementsByTagName("section")[0].clientHeight
      );
    }
    if ($(this).hasClass("top")) {
      movePos =
        $(window).scrollTop() -
        document.getElementsByTagName("section")[0].clientHeight;
      console.log(
        $(window).scrollTop(),
        document.getElementsByTagName("section")[0].clientHeight
      );
    }
    $("html, body").animate(
      {
        scrollTop: movePos
      },
      1000
    );
  });
  $("#goTopBtn").on("click", function () {
    var movePos;
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
