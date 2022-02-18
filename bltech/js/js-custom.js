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

// Product Amount
$('.btn-add').click(function () {
  $(this).prev().val(+$(this).prev().val() + 1);
});
$('.btn-sub').click(function () {
  if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
});
// End Product Amount

// Product Detail Images
var productDetailTop = new Swiper('.product-detail-main__images-top', {
  slidesPerView: 1,  
  loop: true,
  loopedSlides: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var productDetailThumbs = new Swiper('.product-detail-main__images-thumbs', {
  direction: 'vertical',
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loopedSlides: 50,
  loop: true,
});
productDetailTop.controller.control = productDetailThumbs;
productDetailThumbs.controller.control = productDetailTop;
// End Product Detail Images

// Fixed Menu
$(function() {
  var header = $(".header-main");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });
});
// End Fixed Menu

// Box Highlight Blog
var js_highlight_thumb = new Swiper(".js-highlight-thumb", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
  },
});
var js_highlight_blog = new Swiper(".js-highlight-blog", {
  loop: true,
  spaceBetween: 16,
  speed: 500,
  effect: "fade",
  thumbs: {
    swiper: js_highlight_thumb,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// End Box Highlight Blog