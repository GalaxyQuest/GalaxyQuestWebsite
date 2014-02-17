angular.module('galaxyApp', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '../views/mainindex.html',
        controller: 'FrameController'
      })
      // .when('/galaxyclass', {
      //   templateUrl: '../views/partials/galaxyclass.html',
      //   controller: 'GalaxyClassController'
      // })
      // .when('/contact', {
      //   templateUrl: '../views/partials/contact.html',
      //   controller: 'ContactController'
      // })      
      .when('/algorithms', {
        templateUrl: '../views/partials/scatter.html',
        controller: 'ScatterController'
      })      
      // .when('/scatter', {
      //   templateUrl: '../views/partials/scatter.html',
      //   controller: 'ScatterController'
      // })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('FrameController', function($scope) {
  })
  .controller('MainController', function($scope) {
  })
  .controller('ContactController', function($scope) {
  })
  .controller('GalaxyClassController', function($scope) {
  })
  .controller('AlgorithmsController', function($scope) {
  })
  .controller('ScatterController', function($scope) {
  })
  .controller('NeuralNetController', function($scope) {
  });

