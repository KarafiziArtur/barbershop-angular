(() => {
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