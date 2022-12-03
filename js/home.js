for (
  var b = document.getElementsByClassName("accordion"), a = 0;
  a < b.length;
  a++
)
  b[a].addEventListener("click", function () {
    this.classList.toggle("active");
    var t = this.nextElementSibling;
    t.style.maxHeight
      ? (t.style.maxHeight = null)
      : (t.style.maxHeight = t.scrollHeight + "%");
  });
function g() {
  document.getElementById("mycitydrp").classList.toggle("");
}
function h() {
  document.getElementById("slidcitydrp").classList.toggle("show");
}
$(function () {
  $(".faqbottom .accordion").click(function () {
    $(this).toggleClass("hit");
  });
}),
  $(document).ready(function () {
    $("#mainhome").catCarousel({
      margin: 0,
      nav: !0,
      dots: !1,
      loop: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      pauseOnFocus: !0,
      responsiveClass: !0,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsive: {
        0: {
          items: 1,
          nav: !1,
          margin: 0,
          dots: !1,
          autoplay: !1,
          autoplayTimeout: 0,
          autoplayHoverPause: !1,
          pauseOnFocus: !1,
        },
        600: {
          items: 1,
          nav: !1,
          margin: 0,
          dots: !1,
          autoplay: !1,
          autoplayTimeout: 0,
          autoplayHoverPause: !1,
          pauseOnFocus: !1,
        },
        1e3: { items: 1 },
      },
    });
  }),
  $(document).ready(function () {
    $("#cat-slid").catCarousel({
      margin: 10,
      nav: !0,
      dots: !1,
      loop: !1,
      items: 9,
      responsive: {
        0: { items: 3, nav: !1, dots: !0 },
        600: { items: 6, dots: !0, nav: !1 },
        1100: { items: 9 },
      },
    });
  }),
  $(document).ready(function () {
    $("#cat-slid-city").catCarousel({
      margin: 18,
      nav: !0,
      dots: !1,
      loop: !1,
      items: 10,
      responsive: {
        0: { items: 4, nav: !1, dots: !0, margin: 0 },
        600: { items: 5, dots: !0, nav: !1 },
        1e3: { items: 10 },
      },
    });
  }),
  $(document).ready(function () {
    $("#cat-slid-car").catCarousel({
      margin: 10,
      nav: !0,
      dots: !1,
      loop: !1,
      items: 5,
      responsive: {
        0: { items: 3, nav: !1, dots: !0 },
        600: { items: 5, dots: !0, nav: !1 },
        1e3: { items: 7 },
      },
    });
  }),
  $(document).ready(function () {
    $(".cat-slid-car-2").catCarousel({
      margin: 10,
      nav: !0,
      dots: !1,
      loop: !1,

      responsive: {
        0: { items: 1, nav: !1, dots: !0 },
        600: { items: 2, dots: !0, nav: !1 },
        1e3: { items: 4 },
      },
    });
  }),
  (window.onclick = function (t) {
    if (!t.target.matches(".cityselect"))
      for (
        var e = document.getElementsByClassName("citydrp-content"), n = 0;
        n < e.length;
        n++
      ) {
        var s = e[n];
        s.classList.contains("show") && s.classList.remove("show");
      }
  }),
  (window.onclick = function (t) {
    if (!t.target.matches(".cityselect"))
      for (
        var e = document.getElementsByClassName("citydrp-content"), n = 0;
        n < e.length;
        n++
      ) {
        var s = e[n];
        s.classList.contains("show") && s.classList.remove("show");
      }
  }),
  $(".seemobcar").on("click", function () {
    $(".cat-slid-car .cat-item-mob").toggleClass("d-block"),
      $(this).toggleClass("carvu");
  });
var i = document.getElementById("enquirymodal"),
  d = document.getElementById("cartypeslid1"),
  e = document.getElementById("cartypeslid3");
(span = document.getElementsByClassName("enqclose")[0]),
  (d.onclick = function () {
    i.style.display = "flex";
  }),
  (span.onclick = function () {
    i.style.display = "none";
  }),
  (window.onclick = function (t) {
    t.target == i && (i.style.display = "none");
  });
var j = document.getElementById("enquirymodal2"),
  f = document.getElementById("cartypeslid2"),
  c = document.getElementsByClassName("enqclose")[1];
(f.onclick = function () {
  j.style.display = "flex";
}),
  (c.onclick = function () {
    j.style.display = "none";
  }),
  (window.onclick = function (t) {
    t.target == j && (j.style.display = "none");
  }),
  ((e = document.getElementById("cartypeslid3")).onclick = function () {
    (j.style.display = "none"), (i.style.display = "flex");
  }),
  (span.onclick = function () {
    i.style.display = "none";
  }),
  (window.onclick = function (t) {
    t.target == i && (i.style.display = "none");
  }),
  ((bttn4 = document.getElementById("cartypeslid4")).onclick = function () {
    (i.style.display = "none"), (j.style.display = "flex");
  }),
  (c.onclick = function () {
    j.style.display = "none";
  }),
  (window.onclick = function (t) {
    t.target == j && (j.style.display = "none");
  });
