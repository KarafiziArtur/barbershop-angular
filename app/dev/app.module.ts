(() => {
  'use strict';

  angular
      .module('barbershop', ['ui.router', 
                             'ngAnimate', 
                             'ymaps'])
      .controller('appController', appController);

  appController.$inject = ['GlobalService'];

  function appController(GlobalService) {

    var ac = this;
    
    ac.loginToggle = function () {
      return GlobalService.loginToggle();
    };

    ac.mapToggle = function () {
      return GlobalService.mapToggle();
    };
    
    ac.closeModals = function () {
      return GlobalService.closeModals();
    }

  }

})();

