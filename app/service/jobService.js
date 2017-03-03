(function () {
    'use strict';

    angular.module('jobfinder')
        .factory('jobService', jobService);

    jobService.$inject = ['$http'];

    function jobService($http) {
        return {
            getJobs: getJobs
        };
        
        function getJobs(){         
            return $http.get('/api/jobs');
        }
    };   
}());
