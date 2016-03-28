(() => {
  'use strict';

  angular
      .module('barbershop', ['ui.router', 'ngAnimate'])
      .controller('appController', appController);

  appController.$inject = [];

  function appController() {

    var ac = this;
    
    var modalOverlay = '.modal-overlay';
    var modalMap = '.modal-content-map';
    var modalLogin = '.modal-content-login';
    
    ac.loginToggle = function () {
      
      $(modalOverlay + ',' + modalLogin).fadeIn(500);
      $(modalLogin).removeClass('bounceOutUp').addClass('bounceInDown');
      
    };

    ac.mapToggle = function () {
      
      $(modalOverlay + ',' + modalMap).fadeIn(500);
      $(modalMap).removeClass('bounceOutUp').addClass('bounceInDown');
      
    };
    
    ac.closeModals = function () {

      $(modalLogin + ',' + modalMap).removeClass('bounceInDown').addClass('bounceOutUp');
      $(modalOverlay + ',' + modalLogin + ',' + modalMap).fadeOut(500);
      
    }

  }

})();

