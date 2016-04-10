(function () {
    'use strict';
    angular
        .module('barbershop', ['ui.router',
        'ngAnimate',
        'ymaps'])
        .controller('appController', appController);
    appController.$inject = ['GlobalService'];
    function appController(GlobalService) {
        var ac = this;
        ac.toTop = function () {
            $('html, body').animate({ scrollTop: 0 }, 700);
        };
        ac.loginToggle = function () {
            return GlobalService.loginToggle();
        };
        ac.mapToggle = function () {
            return GlobalService.mapToggle();
        };
        ac.closeModals = function () {
            return GlobalService.closeModals();
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
            templateUrl: 'partials/components/shop-page/shop-page.tpl.html',
            controller: 'shopPageController as spc'
        })
            .state('shop-item', {
            url: '/shop/:category/:itemId',
            templateUrl: 'partials/components/shop-page/shop-page-item/shop-page-item.tpl.html',
            controller: 'shopPageItemController as spic'
        })
            .state('contact', {
            url: '/contact',
            templateUrl: 'partials/components/contact-page/contact-page.tpl.html'
        });
    }
})();
(function () {
    'use strict';
    angular.module('barbershop')
        .service('GlobalService', GlobalService);
    function GlobalService() {
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
        };
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
    loginController.$inject = ['GlobalService'];
    function loginController(GlobalService) {
        var lc = this;
        lc.user = {
            login: localStorage.getItem('login'),
            password: localStorage.getItem('password'),
            remember: localStorage.getItem('remember')
        };
        lc.login = function () {
            alert('If this project will have a RESTApi then you will be logged in!');
            GlobalService.closeModals();
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
            alert('The date is ' + mpc.enrollRecord.date + '\n' +
                'The time is ' + mpc.enrollRecord.time + '\n' +
                'Your name is ' + mpc.enrollRecord.name + '\n' +
                'Your phone is ' + mpc.enrollRecord.phone);
        };
    }
})();
//noinspection TypeScriptValidateTypes
(function () {
    "use strict";
    angular.module('barbershop')
        .controller('shopPageController', shopPageController);
    shopPageController.$inject = ['shopPageService'];
    function shopPageController(shopPageService) {
        var spc = this;
        spc.manufacturers = [];
        spc.goodsGroups = [];
        spc.goods = [];
        getManufacturers();
        getGoodsGroups();
        getGoods();
        function getManufacturers() {
            spc.manufacturers = shopPageService.getManufacturers();
        }
        function getGoodsGroups() {
            spc.goodsGroups = shopPageService.getGoodsGroups();
        }
        function getGoods() {
            spc.goods = shopPageService.getGoods();
        }
    }
})();
(function () {
    'use strict';
    angular.module('barbershop')
        .service('shopPageService', shopPageService);
    shopPageService.$inject = [];
    function shopPageService() {
        return {
            getManufacturers: getManufacturers,
            getGoodsGroups: getGoodsGroups,
            getGoods: getGoods
        };
        // Getting manufacturers array
        function getManufacturers() {
            return [
                {
                    id: 1,
                    name: 'Baxter of California',
                    checked: true
                },
                {
                    id: 2,
                    name: 'Mr Natty',
                    checked: false
                },
                {
                    id: 3,
                    name: 'Suavecito',
                    checked: true
                },
                {
                    id: 4,
                    name: 'Malin+Goetz',
                    checked: false
                },
                {
                    id: 5,
                    name: "Murray’s",
                    checked: false
                },
                {
                    id: 6,
                    name: 'American Crew',
                    checked: true
                }
            ];
        }
        // Gitting groups of goods array
        function getGoodsGroups() {
            return [
                {
                    id: 0,
                    name: 'All',
                    checked: true
                },
                {
                    id: 1,
                    name: 'Shaving accessories',
                    checked: false
                },
                {
                    id: 2,
                    name: 'Means for care',
                    checked: false
                },
                {
                    id: 3,
                    name: 'Accessories',
                    checked: false
                }
            ];
        }
        // Gitting goods
        function getGoods() {
            return [
                {
                    id: 1,
                    name: 'Travel Set',
                    category: 'Baxter of California',
                    href: '',
                    image: 'assets/img/travel-set-baxter-of-california-1.jpg',
                    price: '40'
                },
                {
                    id: 2,
                    name: 'Moisturizing conditioner',
                    category: 'Baxter of California',
                    href: '',
                    image: 'assets/img/moisturizing-conditioner-baxter-of-california-2.jpg',
                    price: '10'
                },
                {
                    id: 3,
                    name: 'Hair gel',
                    category: 'Sauvecito',
                    href: '',
                    image: 'assets/img/hair-gel-sauvecito.jpg',
                    price: '4'
                },
                {
                    id: 4,
                    name: 'Styling gel',
                    category: 'American crew',
                    href: '',
                    image: 'assets/img/styling-gel-american-crew.jpg',
                    price: '7'
                },
                {
                    id: 5,
                    name: 'Hair gel',
                    category: 'American crew',
                    href: '',
                    image: 'assets/img/hair-gel-american-crew.jpg',
                    price: '4'
                },
                {
                    id: 6,
                    category: 'Baxter of California',
                    href: '',
                    image: 'assets/img/shaving-kit-baxter-of-california.jpg',
                    name: 'Shaving kit',
                    price: '55'
                }
            ];
        }
    }
})();
