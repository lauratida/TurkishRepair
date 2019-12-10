$(document).ready(function(){
  var call = $('.modal-view'),
      modal = $('.modal'),
      content = $('.content'),
      body = $('body')
      modalclose = $('#closemodal')

  // Открытие окна

  call.on('click', function(event){    
    event.preventDefault();
    modal.addClass('modal_active');
    content.addClass('is-blured');
    body.addClass('overflow');
  });
  modalclose.on('click', function (event) {
    event.preventDefault();
    modal.removeClass('modal_active');
    content.removeClass('is-blured');
    body.removeClass('overflow');
  });
  $(document).mouseup(function(e) {
    var popup = $('.modal-form');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      modal.removeClass('modal_active');
      content.removeClass('is-blured');
      body.removeClass('overflow');
    }
  });

});