angular.module('galaxyApp', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/#', {
        // templateUrl: '../views/main.html',
        templateUrl: './index.html',
        controller: 'MainController'
      })
      .when('/neuralnet', {
        templateUrl: '../views/neuralnet.html',
        controller: 'NeuralNetController'
      })
      .when('/scatter', {
        templateUrl: '../views/scatter.html',
        controller: 'ScatterController'
      });
  })

  .controller('ScatterController', function($scope) {
    console.log('scatter');
  })
  .controller('NeuralNetController', function($scope) {
    console.log('hello');
  });

