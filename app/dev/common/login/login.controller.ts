(() => {
  'use strict';

  angular.module('barbershop')
      .controller('loginController', loginController);

  //loginController.$inject = [];

  function loginController() {

    var lc = this;

    lc.user = {
      login: localStorage.getItem('login'),
      password: localStorage.getItem('password'),
      remember: localStorage.getItem('remember')
    };
    
    lc.login = function () {
      console.log('lc.user.password', lc.user.password);
    };


    lc.checkValid = function () {
      
      var modalLogin = '.modal-content-login';
      
      if ( lc.user.login == undefined && lc.user.login.hasOwnProperty('ng-invalid') 
          || lc.user.password == undefined && lc.user.password.hasOwnProperty('ng-invalid')) {
        
        $(modalLogin).addClass('shake');

        setTimeout(function () {
          $(modalLogin).removeClass('shake');
        }, 600);

        return false;

      } else {
        if (lc.user.remember === true) {

          localStorage.setItem('login', lc.user.login);
          localStorage.setItem('password', lc.user.password);

        } else {

          localStorage.removeItem('login');
          localStorage.removeItem('password');

        }

        return true;
      }
      
    };
  }


})();