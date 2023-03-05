$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swip: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".responsive").on("swipe", function (event, slick, direction) {
    console.log(direction);
    // left
  });
  $(".responsive").on("afterChange", function (event, slick, currentSlide) {
    // var lastSlideIndex = slick.slideCount - 1;
    // $(".steps.slick-slide:last-child").hasClass("slick-active");
    if (currentSlide === 8) {
      // Do something when last slide becomes active...
      $(".slick-prev.slick-arrow").addClass("last_slide_activated");
      $('button.btn[type="submit"]').fadeIn(200);
    } else {
      $(".slick-prev.slick-arrow").removeClass("last_slide_activated");
      $('button.btn[type="submit"]').fadeOut(100);
    }
  });
});
