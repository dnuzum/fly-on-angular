angular.module('AirplaneApp', ['ui.router', 'AirplaneCtrls'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/404')

    $stateProvider
    .state('airplanes', {
      url: '/',
      templateUrl: 'app/views/airplanes.html',
      controller: 'Airplanes'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    })

    $locationProvider.html5Mode(true);

  }]);