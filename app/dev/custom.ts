// Add load listener
window.addEventListener('load', function load() {
  // Remove load listener
  window.removeEventListener('load', load, false);

  setTimeout(function() {
    
    // Add animation
    $('.preloader-overlay').fadeOut(500);
    // Delay 500ms and remove preload element
    setTimeout(function() {
      $('.preloader-overlay').remove();
    }, 500);

    // Remove "overflow: hidden" style from body
    $('body').removeAttr('style');

  }, 1500);

  $('.modal-overlay, .modal-content-close').click(function() {
    $('.modal-content-login, .modal-content-map, .modal-overlay').fadeOut(300);
  });
  
  $('button.login').click(function() {
    $('.modal-overlay, .modal-content-login').fadeIn(300);
  });

  $('button.open-map').click(function() {
    $('.modal-overlay, .modal-content-map').fadeIn(300);
  });

});
