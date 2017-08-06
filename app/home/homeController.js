(function(){

  'use strict'
  angular.module('madeleka')
         .controller('homeController',homeController);

  homeController.$inject =['homeService'];

       function homeController(homeService){
         var vm = this;
          vm.title = "Welcome to Mdelekas Advocates";
          vm.subTtile ="A Better Law Firm for Business,Family and Criminal Matters"
          vm.listOfDescriptions = homeService.getDescription();
       }
})();
