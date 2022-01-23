// Partners Slide
var js_banner_slide = new Swiper(".js-partners-slide", {
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// End Partners Slide

// Menu Mobile
$(".header-menu__btn-open").click(function () {
  $(".header-menu").addClass("show");
});

$(".header-menu__btn-close").click(function () {
  $(".header-menu").removeClass("show");
});

$(".header-menu__overlay").click(function () {
  $(".header-menu").removeClass("show");
});

$(".header-menu__item").click(function () {
  $(this).toggleClass("show");
});
// End Menu Mobile

// Service Video
lightGallery(document.getElementById('js-service-video'));
// End Service Video

// Scroll To Top
$("#return-to-top").click(function() {
  $(window).scrollTop(0);
});
// End Scroll To Top