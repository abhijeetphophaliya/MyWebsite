$(document).ready(function () {

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: ["Abhijeet Phophaliya", "a Software Developer", "a Designer"],
    typeSpeed: 30,
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function (direction) {
      var p = document.querySelectorAll(".progress-bar");

      p[0].setAttribute("style", "width:100%; transition:1s all");
      p[1].setAttribute("style", "width:96%; transition:1.5s all");
      p[2].setAttribute("style", "width:85%; transition:1.5s all");
      p[3].setAttribute("style", "width:75%; transition:0.75s all");
      p[4].setAttribute("style", "width:79%; transition:2s all");
      p[5].setAttribute("style", "width:83%; transition:1.6s all");
    },
    offset: "90%",
  });

  particlesJS.load('particles-js', 'lib/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  AOS.init();
});
