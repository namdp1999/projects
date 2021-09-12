// Form search
$(".header__search .find-product")
  .focus(function () {
    $(".search-suggest").addClass("show");
    $(".search-suggest__bg").addClass("show");
  })
  .blur(function () {
    $(".search-suggest").removeClass("show");
    $(".search-suggest__bg").removeClass("show");
  });

// Menu mobile
$(".menu-mobi__button").click(function () {
  $(".menu-mobile__expand").addClass("show");
  $(".menu-mobile__ovelay").addClass("show");
});
$(".menu-mobile__ovelay").click(function () {
  $(".menu-mobile__expand").removeClass("show");
  $(".menu-mobile__ovelay").removeClass("show");
});

// Slider Home
var js_slider_home_1 = new Swiper(".js-slider-home-1", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var js_slider_home_2 = new Swiper(".js-slider-home-2", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
  thumbs: {
    swiper: js_slider_home_1,
  },
});

// Banner Slide
var js_banner_slide = new Swiper(".js-banner-slide", {
  slidesPerView: 2,
  spaceBetween: 10,
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
      slidesPerView: 4,
    },
  },
});

// Flash Sales
var js_flash_sales = new Swiper(".js-flash-sales", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Banner Slide
var js_banner_slide = new Swiper(".js-partners-slide", {
  slidesPerView: 2,
  spaceBetween: 10,
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
      slidesPerView: 4,
    },
  },
});

// Products Slide
var js_products_slide = new Swiper(".js-products-slide", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    1120: {
      slidesPerView: 5,
    },
  },
});