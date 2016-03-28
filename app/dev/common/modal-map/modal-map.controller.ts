(() => {
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

    mmapc.map =  {
      center: [59.938667, 30.323073], zoom: 15
    };

  }

})();