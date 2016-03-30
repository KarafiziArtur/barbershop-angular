(() => {
  'use strict';

  angular.module('barbershop')
      .controller('mainPageController', mainPageController);

  // mainPageController.$inject = [];

  function mainPageController() {
    var mpc = this;

    mpc.enrollRecord = {};

    mpc.enroll = function () {
      alert('The date is ' + mpc.enrollRecord.date + '<br>' +
            'The time is ' + mpc.enrollRecord.time + '<br>' +
            'Your name is ' + mpc.enrollRecord.name + '<br>' +
            'Your phone is ' + mpc.enrollRecord.phone);
    };

  }

})();