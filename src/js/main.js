
$( document ).ready(function() {
  $('.ham').on('click', function(){
    $('.navbar__menu').toggleClass('active');
  });
  var swiper = new Swiper('.projects__mainslider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.mainslider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.mainslider-button-next',
      prevEl: '.mainslider-button-prev',
    },
  });

  var swiper2 = new Swiper('.projects__photoslider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    nested: 'true',
    navigation: {
      nextEl: '.photoslider-button-next',
      prevEl: '.photoslider-button-prev',
    },
  });
});

