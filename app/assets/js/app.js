(function () {
    'use strict';
    angular
        .module('barbershop', ['ui.router', 'ngAnimate'])
        .controller('appController', appController);
    appController.$inject = [];
    function appController() {
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
angular
    .module('barbershop')
    .controller('navMenuController', navMenuController);
//navMenuController.$inject = [];
function navMenuController() {
    var nmc = this;
    nmc.menuIcon = false;
}
