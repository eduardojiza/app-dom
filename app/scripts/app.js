'use strict';

/**
 * @ngdoc overview
 * @name appDomApp
 * @description
 * # appDomApp
 *
 * Main module of the application.
 */
angular
  .module('appDomApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/devices', {
        templateUrl: 'views/devices.html',
        controller: 'DevicesCtrl',
        controllerAs: 'devices'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
