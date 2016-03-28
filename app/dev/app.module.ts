(() => {
  'use strict';

  angular
      .module('barbershop', ['ui.router', 
                             'ngAnimate', 
                             'ymaps'])
      .controller('appController', appController);

  appController.$inject = [];

  function appController() {

    var ac = this;
    
    var modalOverlay = '.modal-overlay';
    var modalMap = '.modal-content-map';
    var modalLogin = '.modal-content-login';
    
    ac.loginToggle = function () {
      
      $(modalOverlay + ',' + modalLogin).fadeIn(300);
      $(modalLogin).removeClass('bounceOutUp').addClass('bounceInDown');
      
      setTimeout(function () {
        $(modalLogin).removeClass('bounceInDown');
      }, 500);
      
      $(modalLogin + ' [name=login]').focus();
      
    };

    ac.mapToggle = function () {
      
      $(modalOverlay + ',' + modalMap).fadeIn(300);
      $(modalMap).removeClass('bounceOutUp').addClass('bounceInDown');

      setTimeout(function () {
        $(modalMap).removeClass('bounceInDown');
      }, 500);
      
    };
    
    ac.closeModals = function () {

      $(modalLogin + ',' + modalMap).removeClass('bounceInDown').addClass('bounceOutUp');
      $(modalOverlay + ',' + modalLogin + ',' + modalMap).fadeOut(500);
      
    }

  }

})();

