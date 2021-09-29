// Fixed Header
$(function() {
  var header = $(".fixed-top");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });
});
// End Fixed Header

// Product Amount
$('.btn-add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.btn-sub').click(function () {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
});
// End Product Amount

// Product View
$(".products__head-view .button-list").click(function () {
    $(".products__head-view .button-list").addClass("active");
    $(".products__head-view .button-grid").removeClass("active");
    $(".products__list").removeClass("view-grid");
});

$(".products__head-view .button-grid").click(function () {
    $(".products__head-view .button-grid").addClass("active");
    $(".products__head-view .button-list").removeClass("active");
    $(".products__list").addClass("view-grid");
});
// End Product View

// Search Modal
$(".search").click(function () {
    $(".search-modal").addClass("active");
});
$(".search-modal__close").click(function () {
    $(".search-modal").removeClass("active");
});
// End Search Modal

// Botton Modal
$(".bottom-modal__head").click(function () {
    $(".bottom-modal").removeClass("open");
    $(".bottom-modal__box").removeClass("open");
});
// End Botton Modal

// Filter Modal
$(".button-filter").click(function () {
    $(".filter-modal").addClass("open");
    $(".bottom-modal__box").addClass("open");
});

$(".filter-modal").click(function () {
    $(".bottom-modal").removeClass("open");
    $(".bottom-modal__box").removeClass("open");
});
// End Filter Modal

// Cart Modal
$(".button-cart").click(function () {
    $(".cart-modal").addClass("open");
    $(".bottom-modal__box").addClass("open");
});
// End Cart Modal

// Note Cart Modal
$(".products__item-note").click(function () {
    $(".note-cart-modal").addClass("open");
    $(".bottom-modal__box").addClass("open");
});

$(".note-cart-modal .note-close").click(function () {
    $(".bottom-modal").removeClass("open");
    $(".bottom-modal__box").removeClass("open");
    $(".cart-modal").addClass("open");
    $(".bottom-modal__box").addClass("open");
});
// End Note Cart Modal