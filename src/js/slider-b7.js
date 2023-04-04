$(document).ready(function () {
  $(".slider-b7").slick({
    autoplay: true,
    arrows: false,
    speed:700,
    dots: true,
    mobileFirst: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    variableWidth: false,
    responsive: [
   
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
