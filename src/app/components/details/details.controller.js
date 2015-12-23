(function() {
  'use strict';

  angular
    .module('infoProTest')
    .controller('DetailsController', DetailsController);

  DetailsController.$inject =['$scope','$stateParams'];

  /** @ngInject */
  function DetailsController($scope, $stateParams) {
    var indexCtrl = $scope.$parent.index;

    var vm = this;
    vm.refid = $stateParams.ref;
    vm.piece = findPiece(vm.refid);
    vm.addToCart = addToCart;


    /**
     * Find a piece in the list of pieces according to given ref.
     * @param {String} ref
     */
    function findPiece(ref) {
      for(var i = 0; i < indexCtrl.pieces.length; i++) {
        var piece = indexCtrl.pieces[i];
        if(piece.ref != null && typeof piece.ref != undefined && piece.ref === ref) {
          return piece;
        }
      }
    }

    function addToCart() {
      indexCtrl.addToCart(angular.copy(vm.piece));
    }
  }
})();
