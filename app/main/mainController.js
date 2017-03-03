(function () {
    'use strict';

    angular.module('jobfinder')
        .controller('mainController', mainController);

    mainController.$inject = ['$resource','jobService'];

    function mainController($resource, jobService) {
        var vm = this;

        vm.title = "Find a Job today !"
         jobService.getJobs().then(function(response){
              vm.jobs =   response.data
        })
    }

}());
