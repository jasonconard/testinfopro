(function() {
  'use strict';

  angular
    .module('infoProTest')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
