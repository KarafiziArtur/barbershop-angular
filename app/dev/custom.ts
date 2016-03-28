/* Begin custom JS */
// Add load listener
window.addEventListener('load', function load(event) {
  event.preventDefault();
  
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

});

// End custom JS