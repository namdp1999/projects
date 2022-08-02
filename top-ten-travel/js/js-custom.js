// Form Search
$(".header__search .find-product")
  .focus(function () {
    $(".search-suggest").addClass("show");
    $(".search-suggest__bg").addClass("show");
  })
$(".header__search .search-suggest__bg")
  .click(function () {
    $(".search-suggest").removeClass("show");
    $(".search-suggest__bg").removeClass("show");
  });
// End Form Search

// Menu Vertical
if($(".search-advanced__wrap").length > 0) {
  let widthContainerMenuVertical = $(".search-advanced__wrap > .container")[0].offsetWidth;
  let widthMainMenuVertical = $(".search-advanced__wrap .menu-vertical")[0].offsetWidth;
  let widthSubMenuVertical = widthContainerMenuVertical - widthMainMenuVertical - 20;
  let listSubMenu = document.querySelectorAll(".search-advanced__wrap .menu-vertical-sub");
  listSubMenu.forEach(item => {
    item.style.width = widthSubMenuVertical + 'px';
    let counterColumn = $(item).find(".menu-vertical-sub__box").length;
    if(counterColumn === 5) {
      $(item).find(".menu-vertical-sub__wrap").addClass("five-col");
    }
  });
}
// End Menu Vertical

// Read More, Read Less Button
$("#viewMoreContent")
  .click(function () {
    $(".product-detail-main__content-text").addClass("show-more");
    $("#viewMoreContent").hide();
    $("#viewLessContent").show();
  })
$("#viewLessContent")
  .click(function () {
    $(".product-detail-main__content-text").removeClass("show-more");
    $("#viewMoreContent").show();
    $("#viewLessContent").hide();
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
$(".menu-mobile__cate-item").click(function () {
  $('.menu-mobile__cate-sub.active').removeClass('active');
  $(this).toggleClass('active');
});

// Blog Category Vertical
$(".blog-cate-vertical__item").click(function () {
  $('.blog-cate-vertical__sub.active').removeClass('active');
  $(this).toggleClass('active');
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
  spaceBetween: 20,
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

// Banner Slide 2
var js_banner_slide = new Swiper(".js-banner-slide-2", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
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

// Video Slide
var js_video_slide = new Swiper(".js-video-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
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

// Partners Slide
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

// Category Slide
var js_category_slide = new Swiper(".js-category-slide", {
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
    1200: {
      slidesPerView: 5,
    },
  },
});

// Products Highlight
var js_products_highlight = new Swiper(".js-products-highlight", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Products Combo
var js_products_combo = new Swiper(".js-products-combo", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});

// Products Segment
var js_products_segment = new Swiper(".js-products-segment", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
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

// Product Detail Page

// Gallery Product
var js_gallery_product_1 = new Swiper(".js-gallery-product-1", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var js_gallery_product_2 = new Swiper(".js-gallery-product-2", {
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
  thumbs: {
    swiper: js_gallery_product_1,
  },
});

// Gallery Product Modal
var js_gallery_product_modal_1 = new Swiper(".js-gallery-product-modal-1", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      slidesPerView: 6,
    },
    1120: {
      slidesPerView: 8,
    },
  },
});
var js_gallery_product_modal_2 = new Swiper(".js-gallery-product-modal-2", {
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
  thumbs: {
    swiper: js_gallery_product_modal_1,
  },
});

// Product Amount
$('.btn-add').click(function () {
  $(this).prev().val(+$(this).prev().val() + 1);
});
$('.btn-sub').click(function () {
  if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

// End Product Detail Page

// Load More Product
const buttonLoadMore = document.querySelector('#buttonLoadMore');
let productShowBeforeClick = 16;
let productShowAfterClick = 4;
const elementList = [...document.querySelectorAll('.js-product-load-more .products-grid__item')];
for (let i = 0; i < productShowBeforeClick; i++) {
  if (elementList[i]) {
    elementList[i].style.display = 'block';
  }
}
if(buttonLoadMore) {
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
  });
}
// End Load More Product

// Select Amount
const selectAmount = document.querySelectorAll('.select-amount');
if(selectAmount.length > 0) {
  selectAmount.forEach(item => {
    const selectAmountHead = item.querySelector(".select-amount__head");
    selectAmountHead.addEventListener('click', (e) => {
      const dropdown = item.querySelector(".select-amount__dropdown");
      dropdown.classList.toggle("show");
    });
  });
}
// End Select Amount