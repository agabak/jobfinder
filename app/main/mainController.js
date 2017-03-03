(function(){
   'use strict';
    
    angular.module('jobfinder')
           .controller('mainController',mainController);
    
    mainController.$inject = [];
    
    function mainController(){
        var vm = this;
        
        vm.title =  "Find a Job today !"
        vm.jobs = [
            {title:'Sales Person', description:'you will fight dragons'},
            {title:'Accoutant', description:'you will  use the keybord'}
        ]
    }
    
}());