angular
    .module('barbershop')
    .controller('navMenuController', navMenuController);

//navMenuController.$inject = [];

function navMenuController() {
    var nmc = this;

    nmc.menuIcon = false;
}
