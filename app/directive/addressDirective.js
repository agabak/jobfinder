(function () {
  'use strict'
  angular.module('madeleka')
         .directive('companyAddress',companyAddress);

          function companyAddress() {
            return {
              template:
                        '<p>PPF PLAZA, 2nd Floor, Corridor Area,<br/>' +
                          'Old Moshi Road/ Engira Road, <br/>'    +
                          'P.O.Box 11120, Arusha, Tanzania.<br/>' +
                          'Tel: +255 27 2970300 <br/>'  +
                          'Mobile: +255 688502868 <br/> ' +
                          ' + 255 653007415 <br/>' +
                          '+ 255 784 975612 <br />' +
                          'Fax: +255 272970300 <br/>' +
                          'E-mail: info@madelekasadvocates.com<br/>' +
                          'website: <a href="#">www.madelekasadvocates.com</a> <br/>'
                 }
          }
})();
