// Fixed Header
$(function() {
  var header = $(".fixed-top");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 200) {
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

// Filter Category Modal
$(".filter-category__more").click(function () {
    $(".filter-category-modal").addClass("open");
    $(".bottom-modal__box").addClass("open");
});

$(".filter-category-modal").click(function () {
    $(".bottom-modal").removeClass("open");
    $(".bottom-modal__box").removeClass("open");
});
// End Filter Category Modal

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

// Promotion Modal
$(".checkout-promotion__button").click(function () {
    $(".modal-promotion").addClass("open");
    $(".bottom-modal__box").addClass("open");
});
// End Promotion Modal

// Get Store Modal
$(".button-get-store").click(function () {
    $(".modal-get-store").addClass("open");
    $(".bottom-modal__box").addClass("open");
    $(".modal-get-home").removeClass("open");
    $(".modal-get-home .bottom-modal__box").removeClass("open");
});
// End Get Store Modal

// Get Home Modal
$(".button-get-home").click(function () {
    $(".modal-get-home").addClass("open");
    $(".bottom-modal__box").addClass("open");
    $(".modal-get-store").removeClass("open");
    $(".modal-get-store .bottom-modal__box").removeClass("open");
});
// End Get Home Modal

// Form Validate
$(document).ready(function() {
    $("#form-get-store").validate({
        rules: {
            fullname: "required",
            phone: {
                required: true,
                minlength: 10,
                numericOnly:true
            }
        },
        messages: {
            fullname: "Vui lòng nhập họ tên!",
            phone: {
                required: "Vui lòng nhập số điện thoại!",
                minlength: "Số điện thoại không chính xác!"
            }
        },
        submitHandler: function(form,e) {
            $(".bottom-modal").removeClass("open");
            $(".bottom-modal__box").removeClass("open");
            $(".checkout-shipping .button-get-store").addClass("active");
            $(".checkout-shipping .button-get-home").removeClass("active");
            $('.checkout-shipping__contact-name span').html($("#form-get-store input[name=fullname]").val());
            $('.checkout-shipping__contact-phone span').html($("#form-get-store input[name=phone]").val());
            $('.checkout-shipping__contact-seller').removeClass("d-none");
            $('.checkout-shipping__contact-name').removeClass("d-none");
            $('.checkout-shipping__contact-phone').removeClass("d-none");
            $('.checkout-shipping__contact-address').addClass("d-none");
        }
    });

    $("#form-get-home").validate({
        rules: {
            fullname: "required",
            phone: {
                required: true,
                minlength: 10,
                numericOnly:true
            },
            address: "required"
        },
        messages: {
            fullname: "Vui lòng nhập họ tên!",
            phone: {
                required: "Vui lòng nhập số điện thoại!",
                minlength: "Số điện thoại không chính xác!"
            },
            address: "Vui lòng nhập địa chỉ của bạn!"
        },
        submitHandler: function(form,e) {
            $(".bottom-modal").removeClass("open");
            $(".bottom-modal__box").removeClass("open");
            $(".checkout-shipping .button-get-home").addClass("active");
            $(".checkout-shipping .button-get-store").removeClass("active");
            $('.checkout-shipping__contact-name span').html($("#form-get-home input[name=fullname]").val());
            $('.checkout-shipping__contact-phone span').html($("#form-get-home input[name=phone]").val());
            $('.checkout-shipping__contact-address span').html($("#form-get-home input[name=address]").val());
            $('.checkout-shipping__contact-seller').addClass("d-none");
            $('.checkout-shipping__contact-name').removeClass("d-none");
            $('.checkout-shipping__contact-phone').removeClass("d-none");
            $('.checkout-shipping__contact-address').removeClass("d-none");
        }
    });
});

$.validator.addMethod('numericOnly', function (value) {
    return /^[0-9]+$/.test(value);
}, 'Số điện thoại không chính xác!');
// End Form Validate