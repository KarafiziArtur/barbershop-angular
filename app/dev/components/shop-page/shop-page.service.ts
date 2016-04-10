(() => {
  
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
          category: 'means-for-care',
          manufacturer: 'Baxter of California',
          image: 'assets/img/travel-set-baxter-of-california-1.jpg',
          price: '40'
        },
        {
          id: 2,
          name: 'Moisturizing conditioner',
          category: 'means-for-care',
          manufacturer: 'Baxter of California',
          image: 'assets/img/moisturizing-conditioner-baxter-of-california-2.jpg',
          price: '10'
        },
        {
          id: 3,
          name: 'Hair gel',
          category: 'means-for-care',
          manufacturer: 'Sauvecito',
          image: 'assets/img/hair-gel-sauvecito.jpg',
          price: '4'
        },
        {
          id: 4,
          name: 'Styling gel',
          category: 'means-for-care',
          manufacturer: 'American crew',
          image: 'assets/img/styling-gel-american-crew.jpg',
          price: '7'
        },
        {
          id: 5,
          name: 'Hair gel',
          category: 'means-for-care',
          manufacturer: 'American crew',
          image: 'assets/img/hair-gel-american-crew.jpg',
          price: '4'
        },
        {
          id: 6,
          name: 'Shaving kit',
          category: 'means-for-care',
          manufacturer: 'Baxter of California',
          image: 'assets/img/shaving-kit-baxter-of-california.jpg',
          price: '55'
        }
      ];
    }

  }

})();