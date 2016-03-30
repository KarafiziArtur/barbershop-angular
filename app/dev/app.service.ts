(() => {
  'use strict';

  angular.module('barbershop')
      .service('GlobalService',GlobalService);

  function GlobalService () {
    
    var modalOverlay = '.modal-overlay';
    var modalMap = '.modal-content-map';
    var modalLogin = '.modal-content-login';

    function keydownClose(event) {
      if (event.keyCode === 27) {
        this.closeModals();
      }
    }
    
    return {
      closeModals: function () {
        
        window.removeEventListener('keydown', keydownClose, false);
        
        $(modalLogin + ',' + modalMap).removeClass('bounceInDown').addClass('bounceOutUp');
        $(modalOverlay + ',' + modalLogin + ',' + modalMap).fadeOut(500);
      },
      
      loginToggle: function () {
  
        window.addEventListener('keydown', keydownClose, false);
  
        $(modalOverlay + ',' + modalLogin).fadeIn(300);
        $(modalLogin).removeClass('bounceOutUp').addClass('bounceInDown');
  
        setTimeout(function () {
          $(modalLogin).removeClass('bounceInDown');
        }, 500);
  
        $(modalLogin + ' [name=login]').focus();
      },

      mapToggle: function () {
  
        window.addEventListener('keydown', keydownClose, false);
  
        $(modalOverlay + ',' + modalMap).fadeIn(300);
        $(modalMap).removeClass('bounceOutUp').addClass('bounceInDown');
  
        setTimeout(function () {
          $(modalMap).removeClass('bounceInDown');
        }, 500);
      }
      
    }
  }

})();