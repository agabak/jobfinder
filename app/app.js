(function(){
  'use strict'

var app =  angular.module('madeleka',['ui.router','ui.bootstrap'])

  // setting the ui-router
    app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/partial-home.html',
            controller: 'homeController as vm'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      /*  .state('about', {
            url:'/about',
            templateUrl:'app/aboutUs/partial-about-us.html',
            controller:'aboutUsController as vm'

        }) */

        .state('practice',{
          url:'/practice',
          templateUrl:'app/practice/partial-practice.html',
          controller:'practiceController as vm'
        })

        .state('contactUs',{
          url:'/contactUs',
          templateUrl:'app/contactUs/partial-contact.html',
          controller:'contactController as vm'
        })
        .state('about',{
            url:'/abut',
            templateUrl:'app/about/partial-about.html',
            controller:'aboutController as vm'
        })
    });
})();
