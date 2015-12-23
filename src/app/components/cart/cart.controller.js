(function() {
  'use strict';

  angular
    .module('infoProTest')
    .controller('CartController', CartController);

  CartController.$inject =['$scope'];

  /** @ngInject */
  function CartController($scope) {
    var vm = this;
    vm.removeItem = removeItem;

    /**
     * Remove a piece in cart from an index
     * @param {Number} index
     */
    function removeItem(index) {
      var indexCtrl = $scope.$parent.index;
      if(index != null && angular.isNumber(index) && indexCtrl.cart.length >= index) {
        indexCtrl.cart.splice(index, 1);
      }
      indexCtrl.refreshSum();
    }
  }
})();
