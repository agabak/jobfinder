(function(){
   'use strict';
    
    angular.module('jobfinder')
           .controller('mainController',mainController);
    
    mainController.$inject = [];
    
    function mainController(){
        var vm = this;
        
        vm.title =  "Job Finder"
    }
    
}());