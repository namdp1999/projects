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

// Scroll To Top
$("#return-to-top").click(function() {
  $(window).scrollTop(0);
});
// End Scroll To Top

// Intro Help Slide
var js_banner_slide = new Swiper(".js-intro-help-slide", {
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    481: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
// End Intro Help Slide

// News Slide
var js_banner_slide = new Swiper(".js-news-slide", {
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    481: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// End News Slide

// Why Choose Video
lightGallery(document.getElementById('js-why-choose-video'));
// End Why Choose Video

// Testimonial Slide
var js_banner_slide = new Swiper(".js-testimonial-slide", {
  slidesPerView: 1,
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
// End Testimonial Slide