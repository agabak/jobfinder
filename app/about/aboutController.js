(function(){
    'use strict';
    
    angular.module('madeleka')
           .controller('aboutController',aboutController);
    
    aboutController.$nject =['homeService','practiceService']
    
    function aboutController(homeService,practiceService){
       var vm = this;
       vm.title ="About Us";
       vm.subTitle ="Our Lawyers";
       vm.slide = false;
       vm.oneAtATime = true;
       vm.aboutUsList = homeService.getAboutUs();
       vm.lawyers = homeService.getLawyers();

       vm.experience = practiceService.getExperiences();
    }
})();