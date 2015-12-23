(function() {
  'use strict';

  angular
    .module('infoProTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
