$( document ).ready(function($) {
  (function($) {
    $(function() {
     
      $('ul.interior__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.interior').find('div.interior__content').removeClass('active').eq($(this).index()).addClass('active');
          
      });
     
    });
    })(jQuery);
});


