(function(){
   'use strict';
    
    angular.module('jobfinder')
           .controller('mainController',mainController);
    
    mainController.$inject = ['$resource'];
    
    function mainController($resource){
        var vm = this;
        
        vm.title =  "Find a Job today !"
        vm.jobs = $resource('/api/jobs').query();
    }
    
}());