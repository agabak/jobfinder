(function(){
  'use strict'

  angular.module('madeleka')
         .controller('practiceController',practiceController)

      practiceController.$inject =['practiceService'];

      function practiceController(practiceService){
         var vm =  this;
         vm.practicesList = practiceService.getPractices();
      }
})();
