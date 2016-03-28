(function () {
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
        };
    }
})();
(function () {
    'use strict';
    angular
        .module('barbershop')
        .config(routes);
    routes.$inject = ['$urlRouterProvider', '$stateProvider'];
    function routes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
            url: '/',
            onEnter: function ($rootScope) {
                $rootScope.bodyClass = 'main';
            },
            onExit: function ($rootScope) {
                $rootScope.bodyClass = 'pages';
            },
            templateUrl: 'partials/components/main-page/main-page.tpl.html'
        })
            .state('info', {
            url: '/info',
            templateUrl: 'partials/components/info-page/info-page.tpl.html'
        })
            .state('news', {
            url: '/news',
            templateUrl: 'partials/components/news-page/news-page.tpl.html'
        })
            .state('price', {
            url: '/price',
            templateUrl: 'partials/components/price-page/price-page.tpl.html'
        })
            .state('shop', {
            url: '/shop',
            templateUrl: 'partials/components/shop-page/shop-page.tpl.html'
        })
            .state('contact', {
            url: '/contact',
            templateUrl: 'partials/components/contact-page/contact-page.tpl.html'
        });
    }
})();
/* Begin custom JS */
// Add load listener
window.addEventListener('load', function load(event) {
    event.preventDefault();
    // Remove load listener
    window.removeEventListener('load', load, false);
    setTimeout(function () {
        // Add animation
        $('.preloader-overlay').fadeOut(500);
        // Delay 500ms and remove preload element
        setTimeout(function () {
            $('.preloader-overlay').remove();
        }, 500);
        // Remove "overflow: hidden" style from body
        $('body').removeAttr('style');
    }, 1500);
});
// End custom JS 
angular
    .module('barbershop')
    .controller('navMenuController', navMenuController);
//navMenuController.$inject = [];
function navMenuController() {
    var nmc = this;
    nmc.menuIcon = false;
}
