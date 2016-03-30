(() => {
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