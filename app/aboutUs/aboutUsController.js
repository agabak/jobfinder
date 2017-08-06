(function(){
  'use strict'

  angular.module('madeleka')
         .controller('aboutUsController',aboutUsController)

  aboutUsController.$inject =['homeService','practiceService'];

   function aboutUsController(homeService,practiceService){
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
