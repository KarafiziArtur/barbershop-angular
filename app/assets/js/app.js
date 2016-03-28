(function () {
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
        function keydownClose(event) {
            if (event.keyCode === 27) {
                ac.closeModals();
            }
        }
        ac.loginToggle = function () {
            window.addEventListener('keydown', keydownClose, false);
            $(modalOverlay + ',' + modalLogin).fadeIn(300);
            $(modalLogin).removeClass('bounceOutUp').addClass('bounceInDown');
            setTimeout(function () {
                $(modalLogin).removeClass('bounceInDown');
            }, 500);
            $(modalLogin + ' [name=login]').focus();
        };
        ac.mapToggle = function () {
            window.addEventListener('keydown', keydownClose, false);
            $(modalOverlay + ',' + modalMap).fadeIn(300);
            $(modalMap).removeClass('bounceOutUp').addClass('bounceInDown');
            setTimeout(function () {
                $(modalMap).removeClass('bounceInDown');
            }, 500);
        };
        ac.closeModals = function () {
            window.removeEventListener('keydown', keydownClose, false);
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
            templateUrl: 'partials/components/main-page/main-page.tpl.html',
            controller: 'mainPageController as mpc'
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
(function () {
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
            if (lc.user.login == undefined && lc.user.login.hasOwnProperty('ng-invalid')
                || lc.user.password == undefined && lc.user.password.hasOwnProperty('ng-invalid')) {
                $(modalLogin).addClass('shake');
                setTimeout(function () {
                    $(modalLogin).removeClass('shake');
                }, 600);
                return false;
            }
            else {
                if (lc.user.remember === true) {
                    localStorage.setItem('login', lc.user.login);
                    localStorage.setItem('password', lc.user.password);
                }
                else {
                    localStorage.removeItem('login');
                    localStorage.removeItem('password');
                }
                return true;
            }
        };
    }
})();
(function () {
    'use strict';
    angular.module('barbershop')
        .controller('modalMapController', modalMapController);
    function modalMapController() {
        var mmapc = this;
        mmapc.marker = {
            coordinates: [59.938667, 30.323073],
            properties: {
                balloonContent: '<div class="map-baloon"><h2>Мы здесь!</h2><b><i>Санкт-Петербург,' +
                    '<br> Большая Конюшенная, 19</i></b></div>'
            },
            options: {
                preset: 'islands#icon',
                iconColor: '#a5260a'
            }
        };
        mmapc.map = {
            center: [59.938667, 30.323073], zoom: 15
        };
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
(function () {
    'use strict';
    angular.module('barbershop')
        .controller('mainPageController', mainPageController);
    // mainPageController.$inject = [];
    function mainPageController() {
        var mpc = this;
        mpc.enrollRecord = {};
        mpc.enroll = function () {
            console.log(mpc.enrollRecord);
        };
    }
})();
