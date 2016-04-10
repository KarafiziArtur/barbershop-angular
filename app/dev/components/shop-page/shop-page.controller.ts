(() => {

  "use strict";

  angular.module('barbershop')
      .controller('shopPageController', shopPageController);

  shopPageController.$inject = ['shopPageService'];

  function shopPageController(shopPageService) {

    let spc = this;
    
    spc.manufacturers = [];
    spc.goodsGroups = [];
    spc.goods = [];

    getManufacturers();
    getGoodsGroups();
    getGoods();

    function getManufacturers(){
      spc.manufacturers = shopPageService.getManufacturers();
    }

    function getGoodsGroups(){
      spc.goodsGroups = shopPageService.getGoodsGroups();
    }

    function getGoods(){
      spc.goods = shopPageService.getGoods();
    }

  }

})();