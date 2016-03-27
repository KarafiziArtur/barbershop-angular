(() => {
    'use strict';

    angular
        .module('barbershop', ['ui.router', 'ngAnimate'])
        .controller('appController', appController);

    appController.$inject = ['$rootScope'];

    function appController($rootScope) {
        // $rootScope.bodyClass = 'main';
    }
    
})();

