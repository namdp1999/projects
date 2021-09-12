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

// News Slide
var js_news_slide = new Swiper(".js-news-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
  },
});

// Gallery Users Slide
var js_gallery_user_slide = new Swiper(".js-gallery-user-slide", {
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

// Load More Product
const buttonLoadMore = document.querySelector('#buttonLoadMore');
let productShowBeforeClick = 10;
let productShowAfterClick = 3;
const elementList = [...document.querySelectorAll('.js-product-load-more .products-grid__item')];
for (let i = 0; i < productShowBeforeClick; i++) {
  if (elementList[i]) {
    elementList[i].style.display = 'block';
  }
}
buttonLoadMore.addEventListener('click', (e) => {
  for (let i = productShowBeforeClick; i < productShowBeforeClick + productShowAfterClick; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }
  productShowBeforeClick += productShowAfterClick;
  // Load more button will be hidden after list fully loaded
  if (productShowBeforeClick >= elementList.length) {
    event.target.style.display = 'none';
  }
})