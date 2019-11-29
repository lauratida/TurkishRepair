'use strict';
$( document ).ready(function() {

  // Включение выключение бургер меню
  $('.ham').on('click', function(){
    $('.navbar__menu').toggleClass('active');
  });

  // Секция завершенные проекты - общий слайдер
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

  // Секция завершенные проекты - вложенный слайдер
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
      576: {
        direction: 'horizontal',
      },
      // when window width is >= 769px
      769: {
        direction: 'vertical',
      },
      993: {
        direction: 'horizontal',
      }
    }
  });

  // Видео, отложенная загрузка с кнопкой. Youtube
  function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
  r(function(){
      if (!document.getElementsByClassName) {
          // Поддержка IE8
          var getElementsByClassName = function(node, classname) {
              var a = [];
              var re = new RegExp('(^| )'+classname+'( |$)');
              var els = node.getElementsByTagName("*");
              for(var i=0,j=els.length; i < j; i++)
                  if(re.test(els[i].className))a.push(els[i]);
              return a;
          }
          var videos = getElementsByClassName(document.body,"youtube");
      } else {
          var videos = document.getElementsByClassName("youtube");
      }
      var nb_videos = videos.length;
      for (var i=0; i < nb_videos; i++) {
          // Находим постер для видео, зная ID нашего видео
          videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
          // Размещаем над постером кнопку Play, чтобы создать эффект плеера
          var play = document.createElement("div");
          play.setAttribute("class","play");
          videos[i].appendChild(play);
          videos[i].onclick = function() {
              // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
              var iframe = document.createElement("iframe");
              var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
              if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
              iframe.setAttribute("src",iframe_url);
              iframe.setAttribute("frameborder",'0');
              iframe.setAttribute("class",'youtube');
              // Высота и ширина iFrame будет как у элемента-родителя
              iframe.style.width  = this.style.width;
              iframe.style.height = this.style.height;
              // Заменяем начальное изображение (постер) на iFrame
              this.parentNode.replaceChild(iframe, this);
          }
      }
  });
});

