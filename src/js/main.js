
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
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    nested: 'true',
    navigation: {
      nextEl: '.photoslider-button-next',
      prevEl: '.photoslider-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      // },
      // when window width is >= 480px
      576: {
        direction: 'horizontal',
      },
      // when window width is >= 640px
      769: {
        direction: 'vertical',
      },
      993: {
        direction: 'horizontal',
      }
    }
  });
});

