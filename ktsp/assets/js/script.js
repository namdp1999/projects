// Slide 5 column
$('.five-column').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ]
});

// Slide 6 column
$('.six-column').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ]
});

// Slide 8 column
$('.eight-column').slick({
  slidesToShow: 8,
  slidesToScroll: 8,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }

  ]
});

// Menu mobile
$(document).ready(function() {
  $('#header__menu .fa-bars').on('click', function() {
    $('#header__menu').addClass('open');
    $('.header__bottom__ovelay').addClass('active');
  });
  $('.header__bottom__ovelay').on('click', function() {
    $('#header__menu').removeClass('open');
    $('.header__bottom__ovelay').removeClass('active');
  });
  $('.header__menu-mobile-close').on('click', function() {
    $('#header__menu').removeClass('open');
    $('.header__bottom__ovelay').removeClass('active');
  });
});

// View more
function viewMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("viewMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Xem thêm";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Rút gọn";
    moreText.style.display = "inline";
  }
}


// Pincode
var $input = $('.form-pincode input');
$input.keyup(function(e) {
  var len = $(this).val().length;
  if (len === 1) {
    $(this).next().focus().select();
  } else if (e.keyCode === 8) {
    $(this).prev().focus().select();
  } else if (e.keyCode === 46) {
    $(this).prev().focus().select();
  }
});
$input.click(function(e) {
  $(this).select();
});
$input.keyup(function(e) {
  var max = 1;
  if ($input.val().length > max) {
    $input.val($input.val().substr(0, max));
  }
});

// Popup Notification
$(".account__noti").hover(function() {
  $(".popup-noti").toggleClass("active");
});

// Popup User
$(".account__user").hover(function() {
  $(".popup-user").toggleClass("active");
});

// Preview Image Upload
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#register-store-logo').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}