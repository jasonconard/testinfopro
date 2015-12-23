(function() {
  'use strict';

  angular
    .module('infoProTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('details', {
        url: '/details/:ref',
        templateUrl: 'app/components/details/details.html',
        controller: 'DetailsController',
        controllerAs : 'details'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
