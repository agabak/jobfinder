(function () {
  'use strict';

  angular.module('madeleka')
          .directive('mainSlider',mainSlider);

          function mainSlider() {
            return {
              template :'<p>All materials contained on this website are made available by Madelekas Advocates for informational purposes only and should not be construed as legal advice.'+
                            'The transmission and receipt of information contained on this website does not form or constitute an attorney-client relationship. Persons should not act'+
                            'upon information found on this website without first seeking professional legal counsel.</p>'
              }
          }
})();
