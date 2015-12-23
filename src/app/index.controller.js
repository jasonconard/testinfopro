(function() {
  'use strict';

  angular
    .module('infoProTest')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController() {

    var vm = this;

    vm.cart = [];
    vm.sum = 0;
    vm.cartLength = 0;
    vm.addToCart = addToCart;
    vm.cartPanelOpen = false;
    vm.refreshSum = refreshSum;
    vm.basePicUrl = 'assets/images/';

    vm.pieces = [
      {
        ref: '1',
        name: 'Filtre à air',
        car: 'Honda Civic',
        cost: 25.,
        pic: 'filtre-a-air-civic.JPG',
        desc: 'Filtre à air pour Honda Civic LSI modèle 92'
      },
      {
        ref: '2',
        name: 'Arbre à came',
        car: 'Honda Civic',
        cost: 600.,
        pic: 'arbre-a-came-civic.jpg',
        desc: 'Arbre à came pour moteur VTEC sur Civic ou Del Sol.'
      },
      {
        ref: '3',
        name: 'Collecteur d\'échappement',
        car: 'Honda Civic',
        cost: 800.,
        pic: 'collecteur-echappement-civic.jpg',
        desc: 'Collecteur d\'échappement titane pour swap sur Honda Civic.'
      },
      {
        ref: '4',
        name: 'Ligne d\'échappement',
        car: 'Mazda RX-7',
        cost: 700.,
        pic: 'ligne-echappement-mazda-rx7.JPG',
        desc: 'Ligne d\'échappement Invidia GT-300 pour Mazda RX-7'
      },
      {
        ref: '5',
        name: 'Kit gros freins',
        car: 'Mazda RX-7',
        cost: 2800.,
        pic: 'kit-gros-freins-mazda-rx7.jpg',
        desc: 'Kit gros freins pour Mazda RX-7 fabriqué par Wilwood'
      },
      {
        ref: '6',
        name: 'Radiateur Mishimoto',
        car: 'Nissan Skyline R33',
        cost: 360.,
        pic: 'radiateur-mishimoto-skyline-r33.jpg',
        desc: 'Radiateur pour Nissan Skyline R33 de la marque Mishimoto'
      },
      {
        ref: '7',
        name: 'Capot en fibre de carbone',
        car: 'Honda S2000',
        cost: 800.,
        pic: 'capot-carbon-aeroworks-s2000.jpg',
        desc: 'Capot en fibre de carbone pour Honda S2000 réalisé par Aerowork'
      },
      {
        ref: '8',
        name: 'Valves',
        car: 'Toyota Supra',
        cost: 22.,
        pic: 'valves-ferrea-toyota-supra.jpg',
        desc: 'Valves de la marque Ferrea pour Toyota Supra'
      },
      {
        ref: '9',
        name: 'Pistons',
        car: 'Toyota Supra',
        cost: 1439.,
        pic: 'pistons-performance-toyota-supra.jpg',
        desc: 'Pistons de la marque CP Pistons pour Toyota Supra'
      }
    ];

    /**
     * Add a piece in cart
     * @param {Number} index
     */
    function addToCart(index) {
      vm.cart.push(vm.pieces[index]);
      refreshSum();
    }

    /**
     * Modify sum and length for new values in cart.
     */
    function refreshSum () {
      vm.sum = vm.cart.reduce(function(prev, now){
        return prev += now.cost || 0;
      }, 0);
      vm.cartLength = vm.cart.length;
    }
  }
})();
